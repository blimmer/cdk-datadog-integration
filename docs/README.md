[cdk-datadog-integration](README.md)

# cdk-datadog-integration

## Index

### Classes

* [DatadogIntegration](classes/datadogintegration.md)
* [DatadogIntegrationStack](classes/datadogintegrationstack.md)

### Interfaces

* [DatadogIntegrationConfig](interfaces/datadogintegrationconfig.md)
* [DatadogIntegrationStackConfig](interfaces/datadogintegrationstackconfig.md)

### Type aliases

* [DatadogIntegrationConfigWithDefaults](README.md#datadogintegrationconfigwithdefaults)
* [DatadogIntegrationDefaults](README.md#datadogintegrationdefaults)
* [DatadogPermissionsLevel](README.md#datadogpermissionslevel)

### Variables

* [CONFIG_DEFAULTS](README.md#const-config_defaults)

### Functions

* [applyDefaultsToConfig](README.md#applydefaultstoconfig)
* [bucketsToString](README.md#bucketstostring)

## Type aliases

###  DatadogIntegrationConfigWithDefaults

Ƭ **DatadogIntegrationConfigWithDefaults**: *[DatadogIntegrationConfig](interfaces/datadogintegrationconfig.md) & [DatadogIntegrationDefaults](README.md#datadogintegrationdefaults)*

*Defined in [lib/config.ts:24](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/config.ts#L24)*

___

###  DatadogIntegrationDefaults

Ƭ **DatadogIntegrationDefaults**: *Required‹Pick‹[DatadogIntegrationConfig](interfaces/datadogintegrationconfig.md), "site" | "iamRoleName" | "permissions" | "forwarderName" | "forwarderVersion" | "installDatadogPolicyMacro"››*

*Defined in [lib/config.ts:3](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/config.ts#L3)*

___

###  DatadogPermissionsLevel

Ƭ **DatadogPermissionsLevel**: *"Full" | "Core"*

*Defined in [lib/index.ts:12](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L12)*

## Variables

### `Const` CONFIG_DEFAULTS

• **CONFIG_DEFAULTS**: *[DatadogIntegrationDefaults](README.md#datadogintegrationdefaults)* = Object.freeze({
  site: "datadoghq.com",
  iamRoleName: "DatadogIntegrationRole",
  permissions: "Full",
  forwarderName: "DatadogForwarder",
  forwarderVersion: "latest",
  installDatadogPolicyMacro: true,
})

*Defined in [lib/config.ts:15](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/config.ts#L15)*

## Functions

###  applyDefaultsToConfig

▸ **applyDefaultsToConfig**(`config`: [DatadogIntegrationConfig](interfaces/datadogintegrationconfig.md)): *[DatadogIntegrationConfigWithDefaults](README.md#datadogintegrationconfigwithdefaults)*

*Defined in [lib/config.ts:27](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/config.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [DatadogIntegrationConfig](interfaces/datadogintegrationconfig.md) |

**Returns:** *[DatadogIntegrationConfigWithDefaults](README.md#datadogintegrationconfigwithdefaults)*

___

###  bucketsToString

▸ **bucketsToString**(`buckets?`: Bucket[]): *string*

*Defined in [lib/util.ts:3](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/util.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`buckets?` | Bucket[] |

**Returns:** *string*
