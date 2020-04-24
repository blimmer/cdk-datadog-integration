[cdk-datadog-integration](../README.md) › [DatadogIntegrationStackConfig](datadogintegrationstackconfig.md)

# Interface: DatadogIntegrationStackConfig

## Hierarchy

* [DatadogIntegrationConfig](datadogintegrationconfig.md)

* StackProps

  ↳ **DatadogIntegrationStackConfig**

## Index

### Properties

* [additionalForwarderParams](datadogintegrationstackconfig.md#optional-additionalforwarderparams)
* [additionalIntegrationRoleParams](datadogintegrationstackconfig.md#optional-additionalintegrationroleparams)
* [apiKey](datadogintegrationstackconfig.md#apikey)
* [cloudTrails](datadogintegrationstackconfig.md#optional-cloudtrails)
* [description](datadogintegrationstackconfig.md#optional-description)
* [env](datadogintegrationstackconfig.md#optional-env)
* [externalId](datadogintegrationstackconfig.md#externalid)
* [forwarderName](datadogintegrationstackconfig.md#optional-forwardername)
* [forwarderVersion](datadogintegrationstackconfig.md#optional-forwarderversion)
* [iamRoleName](datadogintegrationstackconfig.md#optional-iamrolename)
* [installDatadogPolicyMacro](datadogintegrationstackconfig.md#optional-installdatadogpolicymacro)
* [logArchives](datadogintegrationstackconfig.md#optional-logarchives)
* [permissions](datadogintegrationstackconfig.md#optional-permissions)
* [site](datadogintegrationstackconfig.md#optional-site)
* [stackName](datadogintegrationstackconfig.md#optional-stackname)
* [tags](datadogintegrationstackconfig.md#optional-tags)

## Properties

### `Optional` additionalForwarderParams

• **additionalForwarderParams**? : *undefined | object*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[additionalForwarderParams](datadogintegrationconfig.md#optional-additionalforwarderparams)*

*Defined in [lib/index.ts:96](https://github.com/blimmer/cdk-datadog-integration/blob/7fe7271/lib/index.ts#L96)*

Additional parameters to pass through to the underlying Forwarder CloudFormation
template. Use this construct if you need to specify a template variable not
yet exposed through this library.

See https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/latest.yaml
for the latest parameters.

___

### `Optional` additionalIntegrationRoleParams

• **additionalIntegrationRoleParams**? : *undefined | object*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[additionalIntegrationRoleParams](datadogintegrationconfig.md#optional-additionalintegrationroleparams)*

*Defined in [lib/index.ts:108](https://github.com/blimmer/cdk-datadog-integration/blob/7fe7271/lib/index.ts#L108)*

Additional parameters to pass through to the underlying Integration Role CloudFormation
template. Use this construct if you need to specify a template variable not
yet exposed through this library.

See https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml
for the latest parameters.

___

###  apiKey

• **apiKey**: *ISecret*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[apiKey](datadogintegrationconfig.md#apikey)*

*Defined in [lib/index.ts:17](https://github.com/blimmer/cdk-datadog-integration/blob/7fe7271/lib/index.ts#L17)*

API key for the Datadog account (find at https://app.datadoghq.com/account/settings#api)

___

### `Optional` cloudTrails

• **cloudTrails**? : *Bucket[] | undefined*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[cloudTrails](datadogintegrationconfig.md#optional-cloudtrails)*

*Defined in [lib/index.ts:86](https://github.com/blimmer/cdk-datadog-integration/blob/7fe7271/lib/index.ts#L86)*

S3 buckets for Datadog CloudTrail integration. Permissions will be automatically
added to the Datadog integration IAM role.
https://docs.datadoghq.com/integrations/amazon_cloudtrail

___

### `Optional` description

• **description**? : *undefined | string*

*Inherited from [DatadogIntegrationStackConfig](datadogintegrationstackconfig.md).[description](datadogintegrationstackconfig.md#optional-description)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:11

A description of the stack.

**`default`** - No description.

___

### `Optional` env

• **env**? : *Environment*

*Inherited from [DatadogIntegrationStackConfig](datadogintegrationstackconfig.md).[env](datadogintegrationstackconfig.md#optional-env)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:18

The AWS environment (account/region) where this stack will be deployed.

**`default`** - The `default-account` and `default-region` context parameters will be
used. If they are undefined, it will not be possible to deploy the stack.

___

###  externalId

• **externalId**: *string*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[externalId](datadogintegrationconfig.md#externalid)*

*Defined in [lib/index.ts:23](https://github.com/blimmer/cdk-datadog-integration/blob/7fe7271/lib/index.ts#L23)*

External ID for the Datadog role (generate at
https://app.datadoghq.com/account/settings#integrations/amazon-web-services)

___

### `Optional` forwarderName

• **forwarderName**? : *undefined | string*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[forwarderName](datadogintegrationconfig.md#optional-forwardername)*

*Defined in [lib/index.ts:55](https://github.com/blimmer/cdk-datadog-integration/blob/7fe7271/lib/index.ts#L55)*

The Datadog Forwarder Lambda function name. DO NOT change when updating an existing
CloudFormation stack, otherwise the current forwarder function will be replaced and
all the triggers will be lost.

**`default`** DatadogForwarder

___

### `Optional` forwarderVersion

• **forwarderVersion**? : *undefined | string*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[forwarderVersion](datadogintegrationconfig.md#optional-forwarderversion)*

*Defined in [lib/index.ts:64](https://github.com/blimmer/cdk-datadog-integration/blob/7fe7271/lib/index.ts#L64)*

Specify a version of the forwarder to use. See
https://github.com/DataDog/datadog-serverless-functions/releases. Pass this
parameter as a version string, e.g., '3.9.0'

**`default`** latest

___

### `Optional` iamRoleName

• **iamRoleName**? : *undefined | string*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[iamRoleName](datadogintegrationconfig.md#optional-iamrolename)*

*Defined in [lib/index.ts:38](https://github.com/blimmer/cdk-datadog-integration/blob/7fe7271/lib/index.ts#L38)*

Customize the name of IAM role for Datadog AWS integration

**`default`** DatadogIntegrationRole

___

### `Optional` installDatadogPolicyMacro

• **installDatadogPolicyMacro**? : *undefined | false | true*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[installDatadogPolicyMacro](datadogintegrationconfig.md#optional-installdatadogpolicymacro)*

*Defined in [lib/index.ts:72](https://github.com/blimmer/cdk-datadog-integration/blob/7fe7271/lib/index.ts#L72)*

If you already deployed a stack using this template, set this parameter to false
to skip the installation of the DatadogPolicy Macro again

**`default`** true

___

### `Optional` logArchives

• **logArchives**? : *Bucket[] | undefined*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[logArchives](datadogintegrationconfig.md#optional-logarchives)*

*Defined in [lib/index.ts:79](https://github.com/blimmer/cdk-datadog-integration/blob/7fe7271/lib/index.ts#L79)*

S3 paths to store log archives for log rehydration.
Permissions will be automatically added to the Datadog integration IAM role.
https://docs.datadoghq.com/logs/archives/rehydrating/?tab=awss

___

### `Optional` permissions

• **permissions**? : *[DatadogPermissionsLevel](../README.md#datadogpermissionslevel)*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[permissions](datadogintegrationconfig.md#optional-permissions)*

*Defined in [lib/index.ts:46](https://github.com/blimmer/cdk-datadog-integration/blob/7fe7271/lib/index.ts#L46)*

Customize the permission level for the Datadog IAM role.
Select "Core" to only grant Datadog read-only permissions (not recommended).

**`default`** Full

___

### `Optional` site

• **site**? : *undefined | string*

*Inherited from [DatadogIntegrationConfig](datadogintegrationconfig.md).[site](datadogintegrationconfig.md#optional-site)*

*Defined in [lib/index.ts:31](https://github.com/blimmer/cdk-datadog-integration/blob/7fe7271/lib/index.ts#L31)*

Define your Datadog Site to send data to.
For the Datadog EU site, set to datadoghq.eu

**`default`** datadoghq.com

___

### `Optional` stackName

• **stackName**? : *undefined | string*

*Inherited from [DatadogIntegrationStackConfig](datadogintegrationstackconfig.md).[stackName](datadogintegrationstackconfig.md#optional-stackname)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:24

Name to deploy the stack with

**`default`** - Derived from construct path.

___

### `Optional` tags

• **tags**? : *undefined | object*

*Inherited from [DatadogIntegrationStackConfig](datadogintegrationstackconfig.md).[tags](datadogintegrationstackconfig.md#optional-tags)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:30

Stack tags that will be applied to all the taggable resources and the stack itself.

**`default`** {}
