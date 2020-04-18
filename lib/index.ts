import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import * as secrets from "@aws-cdk/aws-secretsmanager";
import * as s3 from "@aws-cdk/aws-s3";

const DATADOG_AWS_ACCOUNT_ID = "464622532012"; // DO NOT CHANGE!

export interface DatadogIntegrationStackConfig extends cdk.StackProps {
  readonly apiKey: secrets.ISecret;
  readonly externalId: string;

  readonly site?: string;
  readonly iamRoleName?: string;
  readonly permissions?: DatadogPermissionsLevel;
  readonly logArchives?: s3.Bucket[];
  readonly cloudtrails?: s3.Bucket[];
  readonly forwarderName?: string;
}

type DatadogPermissionsLevel = "Full" | "Core";

export class DatadogIntegrationStack extends cdk.Stack {
  constructor(
    scope: cdk.Construct,
    id: string,
    props: DatadogIntegrationStackConfig
  ) {
    super(scope, id, props);

    // The code that defines your stack goes here
  }
}
