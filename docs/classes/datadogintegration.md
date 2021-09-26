[cdk-datadog-integration](../README.md) › [DatadogIntegration](datadogintegration.md)

# Class: DatadogIntegration

## Hierarchy

* Construct

  ↳ **DatadogIntegration**

## Implements

* IConstruct
* IConstruct

## Index

### Constructors

* [constructor](datadogintegration.md#constructor)

### Properties

* [DATADOG_AWS_ACCOUNT_ID](datadogintegration.md#private-datadog_aws_account_id)
* [node](datadogintegration.md#readonly-node)

### Methods

* [createForwarderStack](datadogintegration.md#private-createforwarderstack)
* [createIntegrationRole](datadogintegration.md#private-createintegrationrole)
* [createPolicyMacroStack](datadogintegration.md#private-createpolicymacrostack)
* [onPrepare](datadogintegration.md#protected-onprepare)
* [onSynthesize](datadogintegration.md#protected-onsynthesize)
* [onValidate](datadogintegration.md#protected-onvalidate)
* [prepare](datadogintegration.md#protected-prepare)
* [synthesize](datadogintegration.md#protected-synthesize)
* [toString](datadogintegration.md#tostring)
* [validate](datadogintegration.md#protected-validate)
* [isConstruct](datadogintegration.md#static-isconstruct)

## Constructors

###  constructor

\+ **new DatadogIntegration**(`scope`: Construct, `id`: string, `props`: [DatadogIntegrationConfig](../interfaces/datadogintegrationconfig.md)): *[DatadogIntegration](datadogintegration.md)*

*Overrides void*

*Defined in [lib/index.ts:113](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`scope` | Construct |
`id` | string |
`props` | [DatadogIntegrationConfig](../interfaces/datadogintegrationconfig.md) |

**Returns:** *[DatadogIntegration](datadogintegration.md)*

## Properties

### `Private` DATADOG_AWS_ACCOUNT_ID

• **DATADOG_AWS_ACCOUNT_ID**: *string* = "464622532012"

*Defined in [lib/index.ts:113](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L113)*

___

### `Readonly` node

• **node**: *ConstructNode*

*Inherited from [DatadogIntegration](datadogintegration.md).[node](datadogintegration.md#readonly-node)*

Defined in node_modules/@aws-cdk/core/lib/construct-compat.d.ts:52

The construct tree node associated with this construct.

## Methods

### `Private` createForwarderStack

▸ **createForwarderStack**(`props`: [DatadogIntegrationConfigWithDefaults](../README.md#datadogintegrationconfigwithdefaults)): *CfnStack*

*Defined in [lib/index.ts:170](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [DatadogIntegrationConfigWithDefaults](../README.md#datadogintegrationconfigwithdefaults) |

**Returns:** *CfnStack*

___

### `Private` createIntegrationRole

▸ **createIntegrationRole**(`props`: [DatadogIntegrationConfigWithDefaults](../README.md#datadogintegrationconfigwithdefaults), `policyMacroStack?`: cfn.CfnStack): *CfnStack*

*Defined in [lib/index.ts:139](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [DatadogIntegrationConfigWithDefaults](../README.md#datadogintegrationconfigwithdefaults) |
`policyMacroStack?` | cfn.CfnStack |

**Returns:** *CfnStack*

___

### `Private` createPolicyMacroStack

▸ **createPolicyMacroStack**(): *CfnStack*

*Defined in [lib/index.ts:132](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L132)*

**Returns:** *CfnStack*

___

### `Protected` onPrepare

▸ **onPrepare**(): *void*

*Inherited from [DatadogIntegration](datadogintegration.md).[onPrepare](datadogintegration.md#protected-onprepare)*

*Overrides void*

Defined in node_modules/@aws-cdk/core/lib/construct-compat.d.ts:73

Perform final modifications before synthesis

This method can be implemented by derived constructs in order to perform
final changes before synthesis. prepare() will be called after child
constructs have been prepared.

This is an advanced framework feature. Only use this if you
understand the implications.

**Returns:** *void*

___

### `Protected` onSynthesize

▸ **onSynthesize**(`session`: ISynthesisSession): *void*

*Inherited from [DatadogIntegration](datadogintegration.md).[onSynthesize](datadogintegration.md#protected-onsynthesize)*

*Overrides void*

Defined in node_modules/@aws-cdk/core/lib/construct-compat.d.ts:82

Allows this construct to emit artifacts into the cloud assembly during synthesis.

This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
as they participate in synthesizing the cloud assembly.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`session` | ISynthesisSession | The synthesis session.  |

**Returns:** *void*

___

### `Protected` onValidate

▸ **onValidate**(): *string[]*

*Inherited from [DatadogIntegration](datadogintegration.md).[onValidate](datadogintegration.md#protected-onvalidate)*

*Overrides void*

Defined in node_modules/@aws-cdk/core/lib/construct-compat.d.ts:62

Validate the current construct.

This method can be implemented by derived constructs in order to perform
validation logic. It is called on all constructs before synthesis.

**Returns:** *string[]*

An array of validation error messages, or an empty array if the construct is valid.

___

### `Protected` prepare

▸ **prepare**(): *void*

*Inherited from [DatadogIntegration](datadogintegration.md).[prepare](datadogintegration.md#protected-prepare)*

Defined in node_modules/@aws-cdk/core/lib/construct-compat.d.ts:102

Perform final modifications before synthesis

This method can be implemented by derived constructs in order to perform
final changes before synthesis. prepare() will be called after child
constructs have been prepared.

This is an advanced framework feature. Only use this if you
understand the implications.

**Returns:** *void*

___

### `Protected` synthesize

▸ **synthesize**(`session`: ISynthesisSession): *void*

*Inherited from [DatadogIntegration](datadogintegration.md).[synthesize](datadogintegration.md#protected-synthesize)*

Defined in node_modules/@aws-cdk/core/lib/construct-compat.d.ts:111

Allows this construct to emit artifacts into the cloud assembly during synthesis.

This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
as they participate in synthesizing the cloud assembly.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`session` | ISynthesisSession | The synthesis session.  |

**Returns:** *void*

___

###  toString

▸ **toString**(): *string*

*Inherited from [DatadogIntegration](datadogintegration.md).[toString](datadogintegration.md#tostring)*

Defined in node_modules/constructs/lib/construct.d.ts:237

Returns a string representation of this construct.

**Returns:** *string*

___

### `Protected` validate

▸ **validate**(): *string[]*

*Inherited from [DatadogIntegration](datadogintegration.md).[validate](datadogintegration.md#protected-validate)*

Defined in node_modules/@aws-cdk/core/lib/construct-compat.d.ts:91

Validate the current construct.

This method can be implemented by derived constructs in order to perform
validation logic. It is called on all constructs before synthesis.

**Returns:** *string[]*

An array of validation error messages, or an empty array if the construct is valid.

___

### `Static` isConstruct

▸ **isConstruct**(`x`: any): *x is Construct*

*Inherited from [DatadogIntegration](datadogintegration.md).[isConstruct](datadogintegration.md#static-isconstruct)*

Defined in node_modules/@aws-cdk/core/lib/construct-compat.d.ts:48

Return whether the given object is a Construct

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |

**Returns:** *x is Construct*
