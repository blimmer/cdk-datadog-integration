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
  readonly installDatadogPolicyMacro?: boolean;

  readonly logArchives?: s3.Bucket[] | undefined;
  readonly cloudTrails?: s3.Bucket[] | undefined;
}

const DATADOG_AWS_ACCOUNT_ID = "464622532012"; // DO NOT CHANGE!

export interface DatadogIntegrationStackConfig
  extends DatadogIntegrationConfig,
    cdk.StackProps {}

export class DatadogIntegrationStack extends cdk.Stack {
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
        parameters: {
          ExternalId: props.externalId,
          Permissions: props.permissions.toString(),
          IAMRoleName: props.iamRoleName,
          LogArchives: bucketsToString(props.logArchives),
          CloudTrails: bucketsToString(props.cloudTrails),
          DdAWSAccountId: DATADOG_AWS_ACCOUNT_ID,
        },
      }
    );

    if (policyMacroStack) {
      integrationRoleStack.addDependsOn(policyMacroStack);
    }

    return integrationRoleStack;
  }
}
