import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import * as cfn from "@aws-cdk/aws-cloudformation";
import * as secrets from "@aws-cdk/aws-secretsmanager";
import * as s3 from "@aws-cdk/aws-s3";
import {
  applyDefaultsToConfig,
  DatadogIntegrationConfigWithDefaults,
} from "./config";
import { bucketsToString } from "./util";

type DatadogPermissionsLevel = "Full" | "Core";
export interface DatadogIntegrationConfig {
  readonly apiKey: secrets.ISecret;
  readonly externalId: string;

  readonly site?: string;
  readonly iamRoleName?: string;
  readonly permissions?: DatadogPermissionsLevel;
  readonly forwarderName?: string;
  readonly forwarderVersion?: string;
  readonly installDatadogPolicyMacro?: boolean;

  readonly logArchives?: s3.Bucket[] | undefined;
  readonly cloudTrails?: s3.Bucket[] | undefined;

  readonly additionalForwarderParams?: {
    [key: string]: string;
  };

  readonly additionalIntegrationRoleParams?: {
    [key: string]: string;
  };
}

export interface DatadogIntegrationStackConfig
  extends DatadogIntegrationConfig,
    cdk.StackProps {}

export class DatadogIntegrationStack extends cdk.Stack {
  private DATADOG_AWS_ACCOUNT_ID = "464622532012"; // DO NOT CHANGE!

  constructor(
    scope: cdk.Construct,
    id: string,
    props: DatadogIntegrationStackConfig
  ) {
    super(scope, id, props);
    const propsWithDefaults = applyDefaultsToConfig(props);

    let policyMacroStack: cfn.CfnStack | undefined;
    if (propsWithDefaults.installDatadogPolicyMacro) {
      policyMacroStack = this.createPolicyMacroStack();
    }

    this.createIntegrationRole(propsWithDefaults, policyMacroStack);
    this.createForwarderStack(propsWithDefaults);
  }

  private createPolicyMacroStack(): cfn.CfnStack {
    return new cfn.CfnStack(this, "PolicyMacroStack", {
      templateUrl:
        "https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_policy_macro.yaml",
    });
  }

  private createIntegrationRole(
    props: DatadogIntegrationConfigWithDefaults,
    policyMacroStack?: cfn.CfnStack
  ): cfn.CfnStack {
    const integrationRoleStack = new cfn.CfnStack(
      this,
      "IntegrationRoleStack",
      {
        templateUrl:
          "https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml",
        parameters: Object.assign(
          {
            ExternalId: props.externalId,
            Permissions: props.permissions.toString(),
            IAMRoleName: props.iamRoleName,
            LogArchives: bucketsToString(props.logArchives),
            CloudTrails: bucketsToString(props.cloudTrails),
            DdAWSAccountId: this.DATADOG_AWS_ACCOUNT_ID,
          },
          { ...props.additionalIntegrationRoleParams }
        ),
      }
    );

    if (policyMacroStack) {
      integrationRoleStack.addDependsOn(policyMacroStack);
    }

    return integrationRoleStack;
  }

  private createForwarderStack(
    props: DatadogIntegrationConfigWithDefaults
  ): cfn.CfnStack {
    return new cfn.CfnStack(this, "ForwarderStack", {
      templateUrl: `https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/${props.forwarderVersion}.yaml`,
      parameters: Object.assign(
        {
          DdApiKey: "USE_ARN",
          DdApiKeySecretArn: props.apiKey.secretArn,
          DdSite: props.site,
          FunctionName: props.forwarderName,
        },
        { ...props.additionalForwarderParams }
      ),
    });
  }
}
