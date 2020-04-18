import * as secrets from "@aws-cdk/aws-secretsmanager";
import * as s3 from "@aws-cdk/aws-s3";

export interface DatadogIntegrationConfig {
  readonly apiKey: secrets.ISecret;
  readonly externalId: string;

  readonly site?: string;
  readonly iamRoleName?: string;
  readonly permissions?: DatadogPermissionsLevel;
  readonly forwarderName?: string;
  readonly installDatadogPolicyMacro?: boolean;

  readonly logArchives?: s3.Bucket[] | undefined;
  readonly cloudTrails?: s3.Bucket[] | undefined;
}
type DatadogPermissionsLevel = "Full" | "Core";

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
