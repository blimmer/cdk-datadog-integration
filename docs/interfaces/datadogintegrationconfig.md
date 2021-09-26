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

*Defined in [lib/index.ts:95](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L95)*

Additional parameters to pass through to the underlying Forwarder CloudFormation
template. Use this construct if you need to specify a template variable not
yet exposed through this library.

See https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/latest.yaml
for the latest parameters.

___

### `Optional` `Readonly` additionalIntegrationRoleParams

• **additionalIntegrationRoleParams**? : *undefined | object*

*Defined in [lib/index.ts:107](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L107)*

Additional parameters to pass through to the underlying Integration Role CloudFormation
template. Use this construct if you need to specify a template variable not
yet exposed through this library.

See https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml
for the latest parameters.

___

### `Readonly` apiKey

• **apiKey**: *ISecret*

*Defined in [lib/index.ts:16](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L16)*

API key for the Datadog account (find at https://app.datadoghq.com/account/settings#api)

___

### `Optional` `Readonly` cloudTrails

• **cloudTrails**? : *Bucket[] | undefined*

*Defined in [lib/index.ts:85](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L85)*

S3 buckets for Datadog CloudTrail integration. Permissions will be automatically
added to the Datadog integration IAM role.
https://docs.datadoghq.com/integrations/amazon_cloudtrail

___

### `Readonly` externalId

• **externalId**: *string*

*Defined in [lib/index.ts:22](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L22)*

External ID for the Datadog role (generate at
https://app.datadoghq.com/account/settings#integrations/amazon-web-services)

___

### `Optional` `Readonly` forwarderName

• **forwarderName**? : *undefined | string*

*Defined in [lib/index.ts:54](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L54)*

The Datadog Forwarder Lambda function name. DO NOT change when updating an existing
CloudFormation stack, otherwise the current forwarder function will be replaced and
all the triggers will be lost.

**`default`** DatadogForwarder

___

### `Optional` `Readonly` forwarderVersion

• **forwarderVersion**? : *undefined | string*

*Defined in [lib/index.ts:63](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L63)*

Specify a version of the forwarder to use. See
https://github.com/DataDog/datadog-serverless-functions/releases. Pass this
parameter as a version string, e.g., '3.9.0'

**`default`** latest

___

### `Optional` `Readonly` iamRoleName

• **iamRoleName**? : *undefined | string*

*Defined in [lib/index.ts:37](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L37)*

Customize the name of IAM role for Datadog AWS integration

**`default`** DatadogIntegrationRole

___

### `Optional` `Readonly` installDatadogPolicyMacro

• **installDatadogPolicyMacro**? : *undefined | false | true*

*Defined in [lib/index.ts:71](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L71)*

If you already deployed a stack using this template, set this parameter to false
to skip the installation of the DatadogPolicy Macro again

**`default`** true

___

### `Optional` `Readonly` logArchives

• **logArchives**? : *Bucket[] | undefined*

*Defined in [lib/index.ts:78](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L78)*

S3 paths to store log archives for log rehydration.
Permissions will be automatically added to the Datadog integration IAM role.
https://docs.datadoghq.com/logs/archives/rehydrating/?tab=awss

___

### `Optional` `Readonly` permissions

• **permissions**? : *[DatadogPermissionsLevel](../README.md#datadogpermissionslevel)*

*Defined in [lib/index.ts:45](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L45)*

Customize the permission level for the Datadog IAM role.
Select "Core" to only grant Datadog read-only permissions (not recommended).

**`default`** Full

___

### `Optional` `Readonly` site

• **site**? : *undefined | string*

*Defined in [lib/index.ts:30](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L30)*

Define your Datadog Site to send data to.
For the Datadog EU site, set to datadoghq.eu

**`default`** datadoghq.com
