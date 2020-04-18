import * as secrets from "@aws-cdk/aws-secretsmanager";
import * as s3 from "@aws-cdk/aws-s3";

export interface DatadogIntegrationConfig {
  readonly apiKey: secrets.ISecret;
  readonly externalId: string;

  readonly site?: string;
  readonly iamRoleName?: string;
  readonly permissions?: DatadogPermissionsLevel;
  readonly logArchives?: s3.Bucket[] | undefined;
  readonly cloudTrails?: s3.Bucket[] | undefined;
  readonly forwarderName?: string;
  readonly installDatadogPolicyMacro?: boolean;
}
type DatadogPermissionsLevel = "Full" | "Core";

const CONFIG_DEFAULTS: Complete<Omit<
  DatadogIntegrationConfig,
  "apiKey" | "externalId"
>> = Object.freeze({
  site: "datadoghq.com",
  iamRoleName: "DatadogIntegrationRole",
  permissions: "Full",
  logArchives: undefined,
  cloudTrails: undefined,
  forwarderName: "DatadogForwarder",
  installDatadogPolicyMacro: true,
});

export function applyDefaultsToConfig(
  config: DatadogIntegrationConfig
): Complete<DatadogIntegrationConfig> {
  return Object.assign({}, CONFIG_DEFAULTS, config);
}

// Make all optional types required
export type Complete<T> = {
  [P in keyof Required<T>]: Pick<T, P> extends Required<Pick<T, P>>
    ? T[P]
    : T[P] | undefined;
};
