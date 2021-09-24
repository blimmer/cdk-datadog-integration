[cdk-datadog-integration](../README.md) › [DatadogIntegrationStackConfig](datadogintegrationstackconfig.md)

# Interface: DatadogIntegrationStackConfig

## Hierarchy

* [DatadogIntegrationConfig](datadogintegrationconfig.md)

* StackProps

  ↳ **DatadogIntegrationStackConfig**

## Index

### Properties

* [additionalForwarderParams](datadogintegrationstackconfig.md#optional-readonly-additionalforwarderparams)
* [additionalIntegrationRoleParams](datadogintegrationstackconfig.md#optional-readonly-additionalintegrationroleparams)
* [apiKey](datadogintegrationstackconfig.md#readonly-apikey)
* [cloudTrails](datadogintegrationstackconfig.md#optional-readonly-cloudtrails)
* [description](datadogintegrationstackconfig.md#optional-readonly-description)
* [env](datadogintegrationstackconfig.md#optional-readonly-env)
* [externalId](datadogintegrationstackconfig.md#readonly-externalid)
* [forwarderName](datadogintegrationstackconfig.md#optional-readonly-forwardername)
* [forwarderVersion](datadogintegrationstackconfig.md#optional-readonly-forwarderversion)
* [iamRoleName](datadogintegrationstackconfig.md#optional-readonly-iamrolename)
* [installDatadogPolicyMacro](datadogintegrationstackconfig.md#optional-readonly-installdatadogpolicymacro)
* [logArchives](datadogintegrationstackconfig.md#optional-readonly-logarchives)
* [permissions](datadogintegrationstackconfig.md#optional-readonly-permissions)
* [site](datadogintegrationstackconfig.md#optional-readonly-site)
* [stackName](datadogintegrationstackconfig.md#optional-readonly-stackname)
* [synthesizer](datadogintegrationstackconfig.md#optional-readonly-synthesizer)
* [tags](datadogintegrationstackconfig.md#optional-readonly-tags)
* [terminationProtection](datadogintegrationstackconfig.md#optional-readonly-terminationprotection)

## Properties

### `Optional` `Readonly` additionalForwarderParams

• **additionalForwarderParams**? : *undefined | object*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[additionalForwarderParams](datadogintegrationconfig.md#optional-readonly-additionalforwarderparams)*

*Defined in [lib/index.ts:96](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L96)*

Additional parameters to pass through to the underlying Forwarder CloudFormation
template. Use this construct if you need to specify a template variable not
yet exposed through this library.

See https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/latest.yaml
for the latest parameters.

___

### `Optional` `Readonly` additionalIntegrationRoleParams

• **additionalIntegrationRoleParams**? : *undefined | object*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[additionalIntegrationRoleParams](datadogintegrationconfig.md#optional-readonly-additionalintegrationroleparams)*

*Defined in [lib/index.ts:108](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L108)*

Additional parameters to pass through to the underlying Integration Role CloudFormation
template. Use this construct if you need to specify a template variable not
yet exposed through this library.

See https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml
for the latest parameters.

___

### `Readonly` apiKey

• **apiKey**: *ISecret*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[apiKey](datadogintegrationconfig.md#readonly-apikey)*

*Defined in [lib/index.ts:17](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L17)*

API key for the Datadog account (find at https://app.datadoghq.com/account/settings#api)

___

### `Optional` `Readonly` cloudTrails

• **cloudTrails**? : *Bucket[] | undefined*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[cloudTrails](datadogintegrationconfig.md#optional-readonly-cloudtrails)*

*Defined in [lib/index.ts:86](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L86)*

S3 buckets for Datadog CloudTrail integration. Permissions will be automatically
added to the Datadog integration IAM role.
https://docs.datadoghq.com/integrations/amazon_cloudtrail

___

### `Optional` `Readonly` description

• **description**? : *undefined | string*

*Inherited from [DatadogIntegrationStackConfig](datadogintegrationstackconfig.md).[description](datadogintegrationstackconfig.md#optional-readonly-description)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:14

A description of the stack.

**`default`** - No description.

___

### `Optional` `Readonly` env

• **env**? : *Environment*

*Inherited from [DatadogIntegrationStackConfig](datadogintegrationstackconfig.md).[env](datadogintegrationstackconfig.md#optional-readonly-env)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:79

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

**`example`** 

// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new MyStack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new MyStack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack1');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');

**`default`** - The environment of the containing `Stage` if available,
otherwise create the stack will be environment-agnostic.

___

### `Readonly` externalId

• **externalId**: *string*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[externalId](datadogintegrationconfig.md#readonly-externalid)*

*Defined in [lib/index.ts:23](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L23)*

External ID for the Datadog role (generate at
https://app.datadoghq.com/account/settings#integrations/amazon-web-services)

___

### `Optional` `Readonly` forwarderName

• **forwarderName**? : *undefined | string*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[forwarderName](datadogintegrationconfig.md#optional-readonly-forwardername)*

*Defined in [lib/index.ts:55](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L55)*

The Datadog Forwarder Lambda function name. DO NOT change when updating an existing
CloudFormation stack, otherwise the current forwarder function will be replaced and
all the triggers will be lost.

**`default`** DatadogForwarder

___

### `Optional` `Readonly` forwarderVersion

• **forwarderVersion**? : *undefined | string*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[forwarderVersion](datadogintegrationconfig.md#optional-readonly-forwarderversion)*

*Defined in [lib/index.ts:64](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L64)*

Specify a version of the forwarder to use. See
https://github.com/DataDog/datadog-serverless-functions/releases. Pass this
parameter as a version string, e.g., '3.9.0'

**`default`** latest

___

### `Optional` `Readonly` iamRoleName

• **iamRoleName**? : *undefined | string*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[iamRoleName](datadogintegrationconfig.md#optional-readonly-iamrolename)*

*Defined in [lib/index.ts:38](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L38)*

Customize the name of IAM role for Datadog AWS integration

**`default`** DatadogIntegrationRole

___

### `Optional` `Readonly` installDatadogPolicyMacro

• **installDatadogPolicyMacro**? : *undefined | false | true*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[installDatadogPolicyMacro](datadogintegrationconfig.md#optional-readonly-installdatadogpolicymacro)*

*Defined in [lib/index.ts:72](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L72)*

If you already deployed a stack using this template, set this parameter to false
to skip the installation of the DatadogPolicy Macro again

**`default`** true

___

### `Optional` `Readonly` logArchives

• **logArchives**? : *Bucket[] | undefined*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[logArchives](datadogintegrationconfig.md#optional-readonly-logarchives)*

*Defined in [lib/index.ts:79](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L79)*

S3 paths to store log archives for log rehydration.
Permissions will be automatically added to the Datadog integration IAM role.
https://docs.datadoghq.com/logs/archives/rehydrating/?tab=awss

___

### `Optional` `Readonly` permissions

• **permissions**? : *[DatadogPermissionsLevel](../README.md#datadogpermissionslevel)*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[permissions](datadogintegrationconfig.md#optional-readonly-permissions)*

*Defined in [lib/index.ts:46](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L46)*

Customize the permission level for the Datadog IAM role.
Select "Core" to only grant Datadog read-only permissions (not recommended).

**`default`** Full

___

### `Optional` `Readonly` site

• **site**? : *undefined | string*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[site](datadogintegrationconfig.md#optional-readonly-site)*

*Defined in [lib/index.ts:31](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L31)*

Define your Datadog Site to send data to.
For the Datadog EU site, set to datadoghq.eu

**`default`** datadoghq.com

___

### `Optional` `Readonly` stackName

• **stackName**? : *undefined | string*

*Inherited from [DatadogIntegrationStackConfig](datadogintegrationstackconfig.md).[stackName](datadogintegrationstackconfig.md#optional-readonly-stackname)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:85

Name to deploy the stack with

**`default`** - Derived from construct path.

___

### `Optional` `Readonly` synthesizer

• **synthesizer**? : *IStackSynthesizer*

*Inherited from [DatadogIntegrationStackConfig](datadogintegrationstackconfig.md).[synthesizer](datadogintegrationstackconfig.md#optional-readonly-synthesizer)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:100

Synthesis method to use while deploying this stack

**`default`** - `DefaultStackSynthesizer` if the `@aws-cdk/core:newStyleStackSynthesis` feature flag
is set, `LegacyStackSynthesizer` otherwise.

___

### `Optional` `Readonly` tags

• **tags**? : *undefined | object*

*Inherited from [DatadogIntegrationStackConfig](datadogintegrationstackconfig.md).[tags](datadogintegrationstackconfig.md#optional-readonly-tags)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:91

Stack tags that will be applied to all the taggable resources and the stack itself.

**`default`** {}

___

### `Optional` `Readonly` terminationProtection

• **terminationProtection**? : *undefined | false | true*

*Inherited from [DatadogIntegrationStackConfig](datadogintegrationstackconfig.md).[terminationProtection](datadogintegrationstackconfig.md#optional-readonly-terminationprotection)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:106

Whether to enable termination protection for this stack.

**`default`** false
