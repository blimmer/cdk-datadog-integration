import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import * as cfn from "@aws-cdk/aws-cloudformation";
import {
  DatadogIntegrationConfig,
  applyDefaultsToConfig,
  DatadogIntegrationConfigWithDefaults,
} from "./config";

// const DATADOG_AWS_ACCOUNT_ID = "464622532012"; // DO NOT CHANGE!

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

    const policyMacroStack = this.createPolicyMacroStack();
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
    policyMacroStack: cfn.CfnStack
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
        },
      }
    );
    integrationRoleStack.addDependsOn(policyMacroStack);
    return integrationRoleStack;
  }
}
