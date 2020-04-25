# AWS Cloud Development Kit (CDK) Datadog Integration

This construct makes it easy to integrate your AWS account with Datadog. It
creates nested stacks based on the official
[Datadog Cloudformation templates](https://github.com/DataDog/cloudformation-template/blob/master/aws/main.yaml)
using [Amazon Cloud Development Kit (CDK)](https://aws.amazon.com/cdk/).

## Basic Usage

1. Install the package

```console
npm i --save cdk-datadog-integration
```

1. Import the stack and pass the required parameters.

```ts
import * as cdk from "@aws-cdk/core";
import * as secrets from "@aws-cdk/aws-secretsmanager";
import { DatadogIntegrationStack } from "cdk-datadog-integration";

const app = new cdk.App();
new DatadogIntegrationStack(app, "DatadogIntegration", {
  // Generate an ID here: https://app.datadoghq.com/account/settings#integrations/amazon-web-services
  externalId: "",

  // Create or lookup a `Secret` that contains your Datadog API Key
  // Get your API key here: https://app.datadoghq.com/account/settings#api
  apiKey: secrets.Secret.fromSecretArn(
    app,
    "DatadogApiKey",
    "arn:aws:secretsmanager:<your region>:<your account>:secret:<your secret name>"
  ),
});
```

## Configuration

Use `DatadogIntegrationConfig` to set additional configuration parameters.
Check out [docs](https://github.com/blimmer/cdk-datadog-integration/blob/master/docs/interfaces/datadogintegrationconfig.md)
for more details on what's available.

## Contributing

PRs are welcome!

### Releasing

To release, use `npm version` and push the tag.
