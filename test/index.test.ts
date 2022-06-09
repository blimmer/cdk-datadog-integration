import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as secrets from 'aws-cdk-lib/aws-secretsmanager';
import { DatadogIntegrationStack } from '../src/index';

describe('DatadogIntegrationStack', () => {
  let stack: cdk.Stack, secret: secrets.ISecret;
  beforeEach(() => {
    const app = new cdk.App();
    stack = new cdk.Stack(app, 'Stack');
    secret = new secrets.Secret(stack, 'Secret');
  });

  describe('with default parameters', () => {
    it('creates the macro policy stack', () => {
      const datadogStack = new DatadogIntegrationStack(stack, 'DatadogStack', {
        apiKey: secret,
        externalId: 'not-a-real-id',
      });

      const template = Template.fromStack(datadogStack);
      template.hasResourceProperties('AWS::CloudFormation::Stack', {
        TemplateURL:
          'https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_policy_macro.yaml',
      });
    });
    it('creates the integration role', () => {
      const datadogStack = new DatadogIntegrationStack(stack, 'DatadogStack', {
        apiKey: secret,
        externalId: 'not-a-real-id',
      });

      const template = Template.fromStack(datadogStack);
      template.hasResourceProperties('AWS::CloudFormation::Stack', {
        TemplateURL:
          'https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml',
      });
    });
    it('passes the expected default params to the integration role stack', () => {
      const datadogStack = new DatadogIntegrationStack(stack, 'DatadogStack', {
        apiKey: secret,
        externalId: 'not-a-real-id',
      });

      const template = Template.fromStack(datadogStack);
      template.hasResourceProperties('AWS::CloudFormation::Stack', {
        TemplateURL:
          'https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml',
        Parameters: {
          ExternalId: 'not-a-real-id',
          BasePermissions: 'Full',
          IAMRoleName: 'DatadogIntegrationRole',
          LogArchives: '',
          CloudTrails: '',
          DdAWSAccountId: '464622532012',
        },
      });
    });
    it('creates the forwarder against the latest YML', () => {
      const datadogStack = new DatadogIntegrationStack(stack, 'DatadogStack', {
        apiKey: secret,
        externalId: 'not-a-real-id',
      });

      const template = Template.fromStack(datadogStack);
      template.hasResourceProperties('AWS::CloudFormation::Stack', {
        TemplateURL:
          'https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/latest.yaml',
      });
    });
    it('passes the expected default params to the forwarder stack', () => {
      const datadogStack = new DatadogIntegrationStack(stack, 'DatadogStack', {
        apiKey: secret,
        externalId: 'not-a-real-id',
      });

      const template = Template.fromStack(datadogStack);
      template.hasResourceProperties('AWS::CloudFormation::Stack', {
        TemplateURL:
          'https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/latest.yaml',
        Parameters: {
          DdApiKey: 'USE_ARN', // this is specially supported by the forwarder template
          DdApiKeySecretArn: {
            'Fn::ImportValue': 'Stack:ExportsOutputRefSecretA720EF052D953DED',
          },
          DdSite: 'datadoghq.com',
          FunctionName: 'DatadogForwarder',
        },
      });
    });
  });

  describe('integration role customization', () => {
    it('allows customizing the role name', () => {
      const datadogStack = new DatadogIntegrationStack(stack, 'DatadogStack', {
        apiKey: secret,
        externalId: 'not-a-real-id',
        iamRoleName: 'MyRoleName',
      });

      const template = Template.fromStack(datadogStack);
      template.hasResourceProperties('AWS::CloudFormation::Stack', {
        TemplateURL:
          'https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml',
        Parameters: {
          ExternalId: 'not-a-real-id',
          BasePermissions: 'Full',
          IAMRoleName: 'MyRoleName', // the sub-assert
          LogArchives: '',
          CloudTrails: '',
          DdAWSAccountId: '464622532012',
        },
      });
    });

    it('allows customizing the permissions level', () => {
      const datadogStack = new DatadogIntegrationStack(stack, 'DatadogStack', {
        apiKey: secret,
        externalId: 'not-a-real-id',
        permissions: 'Core',
      });

      const template = Template.fromStack(datadogStack);
      template.hasResourceProperties('AWS::CloudFormation::Stack', {
        TemplateURL:
          'https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml',
        Parameters: {
          ExternalId: 'not-a-real-id',
          BasePermissions: 'Core',
          IAMRoleName: 'DatadogIntegrationRole',
          LogArchives: '',
          CloudTrails: '',
          DdAWSAccountId: '464622532012',
        },
      });

    });

    it('allows passing a single log archive bucket', () => {
      const bucket = new s3.Bucket(stack, 'Bucket');
      const datadogStack = new DatadogIntegrationStack(stack, 'DatadogStack', {
        apiKey: secret,
        externalId: 'not-a-real-id',
        logArchives: [bucket],
      });

      const template = Template.fromStack(datadogStack);
      template.hasResourceProperties('AWS::CloudFormation::Stack', {
        TemplateURL:
          'https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml',
        Parameters: {
          ExternalId: 'not-a-real-id',
          BasePermissions: 'Full',
          IAMRoleName: 'DatadogIntegrationRole',
          LogArchives: {
            'Fn::ImportValue': 'Stack:ExportsOutputRefBucket83908E7781C90AC0', // the sub-assert
          },
          CloudTrails: '',
          DdAWSAccountId: '464622532012',
        },
      });
    });

    it('allows passing multiple log archive buckets', () => {
      const bucket1 = new s3.Bucket(stack, 'Bucket1');
      const bucket2 = new s3.Bucket(stack, 'Bucket2');
      const datadogStack = new DatadogIntegrationStack(stack, 'DatadogStack', {
        apiKey: secret,
        externalId: 'not-a-real-id',
        logArchives: [bucket1, bucket2],
      });

      const template = Template.fromStack(datadogStack);
      template.hasResourceProperties('AWS::CloudFormation::Stack', {
        TemplateURL:
          'https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml',
        Parameters: {
          ExternalId: 'not-a-real-id',
          BasePermissions: 'Full',
          IAMRoleName: 'DatadogIntegrationRole',
          LogArchives: {
            // the sub-assert
            'Fn::Join': [
              '',
              [
                {
                  'Fn::ImportValue':
                    'Stack:ExportsOutputRefBucket12520700A8CDAA090',
                },
                ',',
                {
                  'Fn::ImportValue':
                    'Stack:ExportsOutputRefBucket25524B414E77B0447',
                },
              ],
            ],
          },
          CloudTrails: '',
          DdAWSAccountId: '464622532012',
        },
      });
    });

    it('allows passing a single cloudtrail bucket', () => {
      const bucket = new s3.Bucket(stack, 'Bucket');
      const datadogStack = new DatadogIntegrationStack(stack, 'DatadogStack', {
        apiKey: secret,
        externalId: 'not-a-real-id',
        cloudTrails: [bucket],
      });

      const template = Template.fromStack(datadogStack);
      template.hasResourceProperties('AWS::CloudFormation::Stack', {
        TemplateURL:
          'https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml',
        Parameters: {
          ExternalId: 'not-a-real-id',
          BasePermissions: 'Full',
          IAMRoleName: 'DatadogIntegrationRole',
          LogArchives: '',
          CloudTrails: {
            'Fn::ImportValue': 'Stack:ExportsOutputRefBucket83908E7781C90AC0', // the sub-assert
          },
          DdAWSAccountId: '464622532012',
        },
      });
    });

    it('allows passing multiple cloudtrail buckets', () => {
      const bucket1 = new s3.Bucket(stack, 'Bucket1');
      const bucket2 = new s3.Bucket(stack, 'Bucket2');
      const datadogStack = new DatadogIntegrationStack(stack, 'DatadogStack', {
        apiKey: secret,
        externalId: 'not-a-real-id',
        cloudTrails: [bucket1, bucket2],
      });

      const template = Template.fromStack(datadogStack);
      template.hasResourceProperties('AWS::CloudFormation::Stack', {
        TemplateURL:
          'https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml',
        Parameters: {
          ExternalId: 'not-a-real-id',
          BasePermissions: 'Full',
          IAMRoleName: 'DatadogIntegrationRole',
          LogArchives: '',
          CloudTrails: {
            // the sub-assert
            'Fn::Join': [
              '',
              [
                {
                  'Fn::ImportValue':
                    'Stack:ExportsOutputRefBucket12520700A8CDAA090',
                },
                ',',
                {
                  'Fn::ImportValue':
                    'Stack:ExportsOutputRefBucket25524B414E77B0447',
                },
              ],
            ],
          },
          DdAWSAccountId: '464622532012',
        },
      });

    });

    it('allows passing additional, arbitrary parameters', () => {
      const datadogStack = new DatadogIntegrationStack(stack, 'DatadogStack', {
        apiKey: secret,
        externalId: 'not-a-real-id',
        additionalIntegrationRoleParams: {
          Foo: 'bar',
        },
      });

      const template = Template.fromStack(datadogStack);
      template.hasResourceProperties('AWS::CloudFormation::Stack', {
        TemplateURL:
          'https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml',
        Parameters: {
          ExternalId: 'not-a-real-id',
          BasePermissions: 'Full',
          IAMRoleName: 'DatadogIntegrationRole',
          LogArchives: '',
          CloudTrails: '',
          DdAWSAccountId: '464622532012',
          Foo: 'bar', // the sub-assert
        },
      });
    });

    it('allows additional parameters to override parameters set other props', () => {
      const datadogStack = new DatadogIntegrationStack(stack, 'DatadogStack', {
        apiKey: secret,
        externalId: 'not-a-real-id',
        additionalIntegrationRoleParams: {
          BasePermissions: 'SomeNewThing',
        },
      });

      const template = Template.fromStack(datadogStack);
      template.hasResourceProperties('AWS::CloudFormation::Stack', {
        TemplateURL:
          'https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml',
        Parameters: {
          ExternalId: 'not-a-real-id',
          BasePermissions: 'SomeNewThing',
          IAMRoleName: 'DatadogIntegrationRole',
          LogArchives: '',
          CloudTrails: '',
          DdAWSAccountId: '464622532012',
        },
      });
    });
  });

  describe('policy macro customization', () => {
    it('is not present when disabled', () => {
      const datadogStack = new DatadogIntegrationStack(stack, 'DatadogStack', {
        apiKey: secret,
        externalId: 'not-a-real-id',
        installDatadogPolicyMacro: false,
      });

      const template = Template.fromStack(datadogStack);
      const resource = template.findResources('AWS::CloudFormation::Stack', {
        TemplateURL:
          'https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_policy_macro.yaml',
      });
      expect(resource).toEqual({});
    });
  });

  describe('forwarder stack customization', () => {
    it('allows passing a custom datadog collection site', () => {
      const datadogStack = new DatadogIntegrationStack(stack, 'DatadogStack', {
        apiKey: secret,
        externalId: 'not-a-real-id',
        site: 'datadoghq.eu',
      });

      const template = Template.fromStack(datadogStack);
      template.hasResourceProperties('AWS::CloudFormation::Stack', {
        TemplateURL:
          'https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/latest.yaml',
        Parameters: {
          DdApiKey: 'USE_ARN',
          DdApiKeySecretArn: {
            'Fn::ImportValue': 'Stack:ExportsOutputRefSecretA720EF052D953DED',
          },
          DdSite: 'datadoghq.eu', // the sub-assert
          FunctionName: 'DatadogForwarder',
        },
      });
    });
    it('allows customizing the function name', () => {
      const datadogStack = new DatadogIntegrationStack(stack, 'DatadogStack', {
        apiKey: secret,
        externalId: 'not-a-real-id',
        forwarderName: 'MyForwarder',
      });

      const template = Template.fromStack(datadogStack);
      template.hasResourceProperties('AWS::CloudFormation::Stack', {
        TemplateURL:
          'https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/latest.yaml',
        Parameters: {
          DdApiKey: 'USE_ARN',
          DdApiKeySecretArn: {
            'Fn::ImportValue': 'Stack:ExportsOutputRefSecretA720EF052D953DED',
          },
          DdSite: 'datadoghq.com',
          FunctionName: 'MyForwarder', // the sub-assert
        },
      });

    });

    it('allows locking the forwarder version', () => {
      const datadogStack = new DatadogIntegrationStack(stack, 'DatadogStack', {
        apiKey: secret,
        externalId: 'not-a-real-id',
        forwarderVersion: '3.9.0',
      });

      const template = Template.fromStack(datadogStack);
      template.hasResourceProperties('AWS::CloudFormation::Stack', {
        TemplateURL:
          'https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/3.9.0.yaml', // the sub-assert
        Parameters: {
          DdApiKey: 'USE_ARN',
          DdApiKeySecretArn: {
            'Fn::ImportValue': 'Stack:ExportsOutputRefSecretA720EF052D953DED',
          },
          DdSite: 'datadoghq.com',
          FunctionName: 'DatadogForwarder',
        },
      });
    });

    it('allows passing additional, arbitrary parameters', () => {
      const datadogStack = new DatadogIntegrationStack(stack, 'DatadogStack', {
        apiKey: secret,
        externalId: 'not-a-real-id',
        additionalForwarderParams: {
          Foo: 'bar',
        },
      });

      const template = Template.fromStack(datadogStack);
      template.hasResourceProperties('AWS::CloudFormation::Stack', {
        TemplateURL:
          'https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/latest.yaml',
        Parameters: {
          DdApiKey: 'USE_ARN',
          DdApiKeySecretArn: {
            'Fn::ImportValue': 'Stack:ExportsOutputRefSecretA720EF052D953DED',
          },
          DdSite: 'datadoghq.com',
          FunctionName: 'DatadogForwarder',
          Foo: 'bar', // the sub-assert
        },
      });
    });

    it('allows additional parameters to override parameters set other props', () => {
      const datadogStack = new DatadogIntegrationStack(stack, 'DatadogStack', {
        apiKey: secret,
        externalId: 'not-a-real-id',
        additionalForwarderParams: {
          DdApiKeySecretArn: 'some-hardcoded-thing',
        },
      });

      const template = Template.fromStack(datadogStack);
      template.hasResourceProperties('AWS::CloudFormation::Stack', {
        TemplateURL:
          'https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/latest.yaml',
        Parameters: {
          DdApiKey: 'USE_ARN',
          DdApiKeySecretArn: 'some-hardcoded-thing', // the sub-assert
          DdSite: 'datadoghq.com',
          FunctionName: 'DatadogForwarder',
        },
      });
    });
  });
});
