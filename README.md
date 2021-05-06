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

   Or via [pypi](https://pypi.org/project/cdk-datadog-integration/),
   [NuGet](https://www.nuget.org/packages/BenLimmer.CdkDatadogIntegration/), or
   [GitHub Packages](https://github.com/blimmer/cdk-datadog-integration/packages).

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

Use `DatadogIntegrationConfig` to set additional configuration parameters. Check
out
[docs](https://github.com/blimmer/cdk-datadog-integration/blob/master/docs/interfaces/datadogintegrationconfig.md)
for more details on what's available.

Additionally, a CDK `Construct` is exposed, should you want to add additional
customizations vs. using the out-of-the-box `Stack`.

## CDK Version Compatibility

This package is expected to work with all recent versions of CDK
v1. It has been tested with 1.55.0 so almost certainly works will all
newer versions, and probably works with some older versions too, but
is untested.

## How it Works

This module uses the
[`CfnStack` CDK Construct](https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-cloudformation.CfnStack.html)
to import the three CloudFormation stacks referenced by the
[main Datadog CloudFormation template](https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-cloudformation.CfnStack.html).
By referencing the Datadog-provided templates, you can be confident that the
integration works exactly as Datadog intends.

## Author

This package is created and maintained by
[Ben Limmer](https://www.linkedin.com/in/blimmer/), a
[freelance architect and consultant](https://benlimmer.com/consulting/). I love
helping businesses of all sizes solve their hardest technology problems. Let's
[connect](https://benlimmer.com/consulting/contact/) if I can be of help!

## Contributing

PRs are welcome!

### Releasing

To release, use `npm version` and push the tag.
