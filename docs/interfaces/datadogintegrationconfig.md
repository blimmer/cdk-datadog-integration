[cdk-datadog-integration](../README.md) › [DatadogIntegrationConfig](datadogintegrationconfig.md)

# Interface: DatadogIntegrationConfig

## Hierarchy

* **DatadogIntegrationConfig**

  ↳ [DatadogIntegrationStackConfig](datadogintegrationstackconfig.md)

## Index

### Properties

* [additionalForwarderParams](datadogintegrationconfig.md#optional-readonly-additionalforwarderparams)
* [additionalIntegrationRoleParams](datadogintegrationconfig.md#optional-readonly-additionalintegrationroleparams)
* [apiKey](datadogintegrationconfig.md#readonly-apikey)
* [cloudTrails](datadogintegrationconfig.md#optional-readonly-cloudtrails)
* [externalId](datadogintegrationconfig.md#readonly-externalid)
* [forwarderName](datadogintegrationconfig.md#optional-readonly-forwardername)
* [forwarderVersion](datadogintegrationconfig.md#optional-readonly-forwarderversion)
* [iamRoleName](datadogintegrationconfig.md#optional-readonly-iamrolename)
* [installDatadogPolicyMacro](datadogintegrationconfig.md#optional-readonly-installdatadogpolicymacro)
* [logArchives](datadogintegrationconfig.md#optional-readonly-logarchives)
* [permissions](datadogintegrationconfig.md#optional-readonly-permissions)
* [site](datadogintegrationconfig.md#optional-readonly-site)

## Properties

### `Optional` `Readonly` additionalForwarderParams

• **additionalForwarderParams**? : *undefined | object*

*Defined in [lib/index.ts:96](https://github.com/blimmer/cdk-datadog-integration/blob/master/lib/index.ts#L96)*

Additional parameters to pass through to the underlying Forwarder CloudFormation
template. Use this construct if you need to specify a template variable not
yet exposed through this library.

See https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/latest.yaml
for the latest parameters.

___

### `Optional` `Readonly` additionalIntegrationRoleParams

• **additionalIntegrationRoleParams**? : *undefined | object*

*Defined in [lib/index.ts:108](https://github.com/blimmer/cdk-datadog-integration/blob/master/lib/index.ts#L108)*

Additional parameters to pass through to the underlying Integration Role CloudFormation
template. Use this construct if you need to specify a template variable not
yet exposed through this library.

See https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml
for the latest parameters.

___

### `Readonly` apiKey

• **apiKey**: *ISecret*

*Defined in [lib/index.ts:17](https://github.com/blimmer/cdk-datadog-integration/blob/master/lib/index.ts#L17)*

API key for the Datadog account (find at https://app.datadoghq.com/account/settings#api)

___

### `Optional` `Readonly` cloudTrails

• **cloudTrails**? : *Bucket[] | undefined*

*Defined in [lib/index.ts:86](https://github.com/blimmer/cdk-datadog-integration/blob/master/lib/index.ts#L86)*

S3 buckets for Datadog CloudTrail integration. Permissions will be automatically
added to the Datadog integration IAM role.
https://docs.datadoghq.com/integrations/amazon_cloudtrail

___

### `Readonly` externalId

• **externalId**: *string*

*Defined in [lib/index.ts:23](https://github.com/blimmer/cdk-datadog-integration/blob/master/lib/index.ts#L23)*

External ID for the Datadog role (generate at
https://app.datadoghq.com/account/settings#integrations/amazon-web-services)

___

### `Optional` `Readonly` forwarderName

• **forwarderName**? : *undefined | string*

*Defined in [lib/index.ts:55](https://github.com/blimmer/cdk-datadog-integration/blob/master/lib/index.ts#L55)*

The Datadog Forwarder Lambda function name. DO NOT change when updating an existing
CloudFormation stack, otherwise the current forwarder function will be replaced and
all the triggers will be lost.

**`default`** DatadogForwarder

___

### `Optional` `Readonly` forwarderVersion

• **forwarderVersion**? : *undefined | string*

*Defined in [lib/index.ts:64](https://github.com/blimmer/cdk-datadog-integration/blob/master/lib/index.ts#L64)*

Specify a version of the forwarder to use. See
https://github.com/DataDog/datadog-serverless-functions/releases. Pass this
parameter as a version string, e.g., '3.9.0'

**`default`** latest

___

### `Optional` `Readonly` iamRoleName

• **iamRoleName**? : *undefined | string*

*Defined in [lib/index.ts:38](https://github.com/blimmer/cdk-datadog-integration/blob/master/lib/index.ts#L38)*

Customize the name of IAM role for Datadog AWS integration

**`default`** DatadogIntegrationRole

___

### `Optional` `Readonly` installDatadogPolicyMacro

• **installDatadogPolicyMacro**? : *undefined | false | true*

*Defined in [lib/index.ts:72](https://github.com/blimmer/cdk-datadog-integration/blob/master/lib/index.ts#L72)*

If you already deployed a stack using this template, set this parameter to false
to skip the installation of the DatadogPolicy Macro again

**`default`** true

___

### `Optional` `Readonly` logArchives

• **logArchives**? : *Bucket[] | undefined*

*Defined in [lib/index.ts:79](https://github.com/blimmer/cdk-datadog-integration/blob/master/lib/index.ts#L79)*

S3 paths to store log archives for log rehydration.
Permissions will be automatically added to the Datadog integration IAM role.
https://docs.datadoghq.com/logs/archives/rehydrating/?tab=awss

___

### `Optional` `Readonly` permissions

• **permissions**? : *[DatadogPermissionsLevel](../README.md#datadogpermissionslevel)*

*Defined in [lib/index.ts:46](https://github.com/blimmer/cdk-datadog-integration/blob/master/lib/index.ts#L46)*

Customize the permission level for the Datadog IAM role.
Select "Core" to only grant Datadog read-only permissions (not recommended).

**`default`** Full

___

### `Optional` `Readonly` site

• **site**? : *undefined | string*

*Defined in [lib/index.ts:31](https://github.com/blimmer/cdk-datadog-integration/blob/master/lib/index.ts#L31)*

Define your Datadog Site to send data to.
For the Datadog EU site, set to datadoghq.eu

**`default`** datadoghq.com
