import * as cfn from 'aws-cdk-lib/aws-cloudformation';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as secrets from 'aws-cdk-lib/aws-secretsmanager';
import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import {
  applyDefaultsToConfig,
  DatadogIntegrationConfigWithDefaults,
} from './config';
import { bucketsToString } from './util';

type DatadogPermissionsLevel = 'Full' | 'Core';
export interface DatadogIntegrationConfig {
  /**
   * API key for the Datadog account (find at https://app.datadoghq.com/account/settings#api)
   */
  readonly apiKey: secrets.ISecret;

  /**
   * External ID for the Datadog role (generate at
   * https://app.datadoghq.com/account/settings#integrations/amazon-web-services)
   */
  readonly externalId: string;

  /**
   * Define your Datadog Site to send data to.
   * For the Datadog EU site, set to datadoghq.eu
   *
   * @default datadoghq.com
   */
  readonly site?: string;

  /**
   * Customize the name of IAM role for Datadog AWS integration
   *
   * @default DatadogIntegrationRole
   */
  readonly iamRoleName?: string;

  /**
   * Customize the permission level for the Datadog IAM role.
   * Select "Core" to only grant Datadog read-only permissions (not recommended).
   *
   * @default Full
   */
  readonly permissions?: DatadogPermissionsLevel;

  /**
   * The Datadog Forwarder Lambda function name. DO NOT change when updating an existing
   * CloudFormation stack, otherwise the current forwarder function will be replaced and
   * all the triggers will be lost.
   *
   * @default DatadogForwarder
   */
  readonly forwarderName?: string;

  /**
   * Specify a version of the forwarder to use. See
   * https://github.com/DataDog/datadog-serverless-functions/releases. Pass this
   * parameter as a version string, e.g., '3.9.0'
   *
   * @default latest
   */
  readonly forwarderVersion?: string;

  /**
   * If you already deployed a stack using this template, set this parameter to false
   * to skip the installation of the DatadogPolicy Macro again
   *
   * @default true
   */
  readonly installDatadogPolicyMacro?: boolean;

  /**
   * S3 paths to store log archives for log rehydration.
   * Permissions will be automatically added to the Datadog integration IAM role.
   * https://docs.datadoghq.com/logs/archives/rehydrating/?tab=awss
   */
  readonly logArchives?: s3.Bucket[] | undefined;

  /**
   * S3 buckets for Datadog CloudTrail integration. Permissions will be automatically
   * added to the Datadog integration IAM role.
   * https://docs.datadoghq.com/integrations/amazon_cloudtrail
   */
  readonly cloudTrails?: s3.Bucket[] | undefined;

  /**
   * Additional parameters to pass through to the underlying Forwarder CloudFormation
   * template. Use this construct if you need to specify a template variable not
   * yet exposed through this library.
   *
   * See https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/latest.yaml
   * for the latest parameters.
   */
  readonly additionalForwarderParams?: {
    [key: string]: string;
  };

  /**
   * Additional parameters to pass through to the underlying Integration Role CloudFormation
   * template. Use this construct if you need to specify a template variable not
   * yet exposed through this library.
   *
   * See https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml
   * for the latest parameters.
   */
  readonly additionalIntegrationRoleParams?: {
    [key: string]: string;
  };
}

export class DatadogIntegration extends Construct {
  private DATADOG_AWS_ACCOUNT_ID = '464622532012'; // DO NOT CHANGE!

  constructor(
    scope: Construct,
    id: string,
    props: DatadogIntegrationConfig,
  ) {
    super(scope, id);
    const propsWithDefaults = applyDefaultsToConfig(props);

    let policyMacroStack: cfn.CfnStack | undefined;
    if (propsWithDefaults.installDatadogPolicyMacro) {
      policyMacroStack = this.createPolicyMacroStack();
    }

    this.createIntegrationRole(propsWithDefaults, policyMacroStack);
    this.createForwarderStack(propsWithDefaults);
  }

  private createPolicyMacroStack(): cfn.CfnStack {
    return new cfn.CfnStack(this, 'PolicyMacroStack', {
      templateUrl:
        'https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_policy_macro.yaml',
    });
  }

  private createIntegrationRole(
    props: DatadogIntegrationConfigWithDefaults,
    policyMacroStack?: cfn.CfnStack,
  ): cfn.CfnStack {
    const integrationRoleStack = new cfn.CfnStack(
      this,
      'IntegrationRoleStack',
      {
        templateUrl:
          'https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml',
        parameters: Object.assign(
          {
            ExternalId: props.externalId,
            BasePermissions: props.permissions.toString(),
            IAMRoleName: props.iamRoleName,
            LogArchives: bucketsToString(props.logArchives),
            CloudTrails: bucketsToString(props.cloudTrails),
            DdAWSAccountId: this.DATADOG_AWS_ACCOUNT_ID,
          },
          { ...props.additionalIntegrationRoleParams },
        ),
      },
    );

    if (policyMacroStack) {
      integrationRoleStack.addDependsOn(policyMacroStack);
    }

    return integrationRoleStack;
  }

  private createForwarderStack(
    props: DatadogIntegrationConfigWithDefaults,
  ): cfn.CfnStack {
    return new cfn.CfnStack(this, 'ForwarderStack', {
      templateUrl: `https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/${props.forwarderVersion}.yaml`,
      parameters: Object.assign(
        {
          DdApiKey: 'USE_ARN',
          DdApiKeySecretArn: props.apiKey.secretArn,
          DdSite: props.site,
          FunctionName: props.forwarderName,
        },
        { ...props.additionalForwarderParams },
      ),
    });
  }
}

export interface DatadogIntegrationStackConfig
  extends DatadogIntegrationConfig,
  cdk.StackProps {}

export class DatadogIntegrationStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    props: DatadogIntegrationStackConfig,
  ) {
    super(scope, id, props);
    new DatadogIntegration(this, id, props);
  }
}
