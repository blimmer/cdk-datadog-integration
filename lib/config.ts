import { DatadogIntegrationConfig } from ".";

type DatadogIntegrationDefaults = Required<
  Pick<
    DatadogIntegrationConfig,
    | "site"
    | "iamRoleName"
    | "permissions"
    | "forwarderName"
    | "installDatadogPolicyMacro"
  >
>;

const CONFIG_DEFAULTS: DatadogIntegrationDefaults = Object.freeze({
  site: "datadoghq.com",
  iamRoleName: "DatadogIntegrationRole",
  permissions: "Full",
  forwarderName: "DatadogForwarder",
  installDatadogPolicyMacro: true,
});

export type DatadogIntegrationConfigWithDefaults = DatadogIntegrationConfig &
  DatadogIntegrationDefaults;

export function applyDefaultsToConfig(
  config: DatadogIntegrationConfig
): DatadogIntegrationConfigWithDefaults {
  return Object.assign({}, CONFIG_DEFAULTS, config);
}
