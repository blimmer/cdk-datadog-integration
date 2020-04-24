import { expect as expectCDK, haveResource } from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import * as secrets from "@aws-cdk/aws-secretsmanager";
import * as s3 from "@aws-cdk/aws-s3";
import { DatadogIntegrationStack } from "../lib/index";

describe("DatadogIntegrationStack", () => {
  let stack: cdk.Stack, secret: secrets.ISecret;
  beforeEach(() => {
    stack = new cdk.Stack();
    secret = new secrets.Secret(stack, "Secret");
  });

  describe("with default parameters", () => {
    it("creates the macro policy stack", () => {
      const datadogStack = new DatadogIntegrationStack(stack, "DatadogStack", {
        apiKey: secret,
        externalId: "not-a-real-id",
      });
      expectCDK(datadogStack).to(
        haveResource("AWS::CloudFormation::Stack", {
          TemplateURL:
            "https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_policy_macro.yaml",
        })
      );
    });
    it("creates the integration role", () => {
      const datadogStack = new DatadogIntegrationStack(stack, "DatadogStack", {
        apiKey: secret,
        externalId: "not-a-real-id",
      });
      expectCDK(datadogStack).to(
        haveResource("AWS::CloudFormation::Stack", {
          TemplateURL:
            "https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml",
        })
      );
    });
    it("passes the expected default params to the integration role stack", () => {
      const datadogStack = new DatadogIntegrationStack(stack, "DatadogStack", {
        apiKey: secret,
        externalId: "not-a-real-id",
      });
      expectCDK(datadogStack).to(
        haveResource("AWS::CloudFormation::Stack", {
          TemplateURL:
            "https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml",
          Parameters: {
            ExternalId: "not-a-real-id",
            Permissions: "Full",
            IAMRoleName: "DatadogIntegrationRole",
            LogArchives: "",
            CloudTrails: "",
            DdAWSAccountId: "464622532012",
          },
        })
      );
    });
    it("creates the forwarder against the latest YML", () => {
      const datadogStack = new DatadogIntegrationStack(stack, "DatadogStack", {
        apiKey: secret,
        externalId: "not-a-real-id",
      });
      expectCDK(datadogStack).to(
        haveResource("AWS::CloudFormation::Stack", {
          TemplateURL:
            "https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/latest.yaml",
        })
      );
    });
    it("passes the expected default params to the forwarder stack", () => {
      const datadogStack = new DatadogIntegrationStack(stack, "DatadogStack", {
        apiKey: secret,
        externalId: "not-a-real-id",
      });
      expectCDK(datadogStack).to(
        haveResource("AWS::CloudFormation::Stack", {
          TemplateURL:
            "https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/latest.yaml",
          Parameters: {
            DdApiKey: "USE_ARN", // this is specially supported by the forwarder template
            DdApiKeySecretArn: {
              "Fn::ImportValue": "Stack:OutputRefSecretA720EF05",
            },
            DdSite: "datadoghq.com",
            FunctionName: "DatadogForwarder",
          },
        })
      );
    });
  });

  describe("integration role customization", () => {
    it("allows customizing the role name", () => {
      const datadogStack = new DatadogIntegrationStack(stack, "DatadogStack", {
        apiKey: secret,
        externalId: "not-a-real-id",
        iamRoleName: "MyRoleName",
      });

      expectCDK(datadogStack).to(
        haveResource("AWS::CloudFormation::Stack", {
          TemplateURL:
            "https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml",
          Parameters: {
            ExternalId: "not-a-real-id",
            Permissions: "Full",
            IAMRoleName: "MyRoleName", // the sub-assert
            LogArchives: "",
            CloudTrails: "",
            DdAWSAccountId: "464622532012",
          },
        })
      );
    });

    it("allows customizing the permissions level", () => {
      const datadogStack = new DatadogIntegrationStack(stack, "DatadogStack", {
        apiKey: secret,
        externalId: "not-a-real-id",
        permissions: "Core",
      });

      expectCDK(datadogStack).to(
        haveResource("AWS::CloudFormation::Stack", {
          TemplateURL:
            "https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml",
          Parameters: {
            ExternalId: "not-a-real-id",
            Permissions: "Core",
            IAMRoleName: "DatadogIntegrationRole",
            LogArchives: "",
            CloudTrails: "",
            DdAWSAccountId: "464622532012",
          },
        })
      );
    });

    it("allows passing a single log archive bucket", () => {
      const bucket = new s3.Bucket(stack, "Bucket");
      const datadogStack = new DatadogIntegrationStack(stack, "DatadogStack", {
        apiKey: secret,
        externalId: "not-a-real-id",
        logArchives: [bucket],
      });

      expectCDK(datadogStack).to(
        haveResource("AWS::CloudFormation::Stack", {
          TemplateURL:
            "https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml",
          Parameters: {
            ExternalId: "not-a-real-id",
            Permissions: "Full",
            IAMRoleName: "DatadogIntegrationRole",
            LogArchives: {
              "Fn::ImportValue": "Stack:OutputRefBucket83908E77", // the sub-assert
            },
            CloudTrails: "",
            DdAWSAccountId: "464622532012",
          },
        })
      );
    });

    it("allows passing multiple log archive buckets", () => {
      const bucket1 = new s3.Bucket(stack, "Bucket1");
      const bucket2 = new s3.Bucket(stack, "Bucket2");
      const datadogStack = new DatadogIntegrationStack(stack, "DatadogStack", {
        apiKey: secret,
        externalId: "not-a-real-id",
        logArchives: [bucket1, bucket2],
      });

      expectCDK(datadogStack).to(
        haveResource("AWS::CloudFormation::Stack", {
          TemplateURL:
            "https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml",
          Parameters: {
            ExternalId: "not-a-real-id",
            Permissions: "Full",
            IAMRoleName: "DatadogIntegrationRole",
            LogArchives: {
              // the sub-assert
              "Fn::Join": [
                "",
                [
                  {
                    "Fn::ImportValue": "Stack:OutputRefBucket12520700A",
                  },
                  ",",
                  {
                    "Fn::ImportValue": "Stack:OutputRefBucket25524B414",
                  },
                ],
              ],
            },
            CloudTrails: "",
            DdAWSAccountId: "464622532012",
          },
        })
      );
    });

    it("allows passing a single cloudtrail bucket", () => {
      const bucket = new s3.Bucket(stack, "Bucket");
      const datadogStack = new DatadogIntegrationStack(stack, "DatadogStack", {
        apiKey: secret,
        externalId: "not-a-real-id",
        cloudTrails: [bucket],
      });

      expectCDK(datadogStack).to(
        haveResource("AWS::CloudFormation::Stack", {
          TemplateURL:
            "https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml",
          Parameters: {
            ExternalId: "not-a-real-id",
            Permissions: "Full",
            IAMRoleName: "DatadogIntegrationRole",
            LogArchives: "",
            CloudTrails: {
              "Fn::ImportValue": "Stack:OutputRefBucket83908E77", // the sub-assert
            },
            DdAWSAccountId: "464622532012",
          },
        })
      );
    });

    it("allows passing multiple cloudtrail buckets", () => {
      const bucket1 = new s3.Bucket(stack, "Bucket1");
      const bucket2 = new s3.Bucket(stack, "Bucket2");
      const datadogStack = new DatadogIntegrationStack(stack, "DatadogStack", {
        apiKey: secret,
        externalId: "not-a-real-id",
        cloudTrails: [bucket1, bucket2],
      });

      expectCDK(datadogStack).to(
        haveResource("AWS::CloudFormation::Stack", {
          TemplateURL:
            "https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml",
          Parameters: {
            ExternalId: "not-a-real-id",
            Permissions: "Full",
            IAMRoleName: "DatadogIntegrationRole",
            LogArchives: "",
            CloudTrails: {
              // the sub-assert
              "Fn::Join": [
                "",
                [
                  {
                    "Fn::ImportValue": "Stack:OutputRefBucket12520700A",
                  },
                  ",",
                  {
                    "Fn::ImportValue": "Stack:OutputRefBucket25524B414",
                  },
                ],
              ],
            },
            DdAWSAccountId: "464622532012",
          },
        })
      );
    });
  });

  describe("policy macro customization", () => {
    it("is not present when disabled", () => {
      const datadogStack = new DatadogIntegrationStack(stack, "DatadogStack", {
        apiKey: secret,
        externalId: "not-a-real-id",
        installDatadogPolicyMacro: false,
      });

      expectCDK(datadogStack).notTo(
        haveResource("AWS::CloudFormation::Stack", {
          TemplateURL:
            "https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_policy_macro.yaml",
        })
      );
    });
  });

  describe("forwarder stack customization", () => {
    it("allows passing a custom datadog collection site", () => {
      const datadogStack = new DatadogIntegrationStack(stack, "DatadogStack", {
        apiKey: secret,
        externalId: "not-a-real-id",
        site: "datadoghq.eu",
      });

      expectCDK(datadogStack).to(
        haveResource("AWS::CloudFormation::Stack", {
          TemplateURL:
            "https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/latest.yaml",
          Parameters: {
            DdApiKey: "USE_ARN",
            DdApiKeySecretArn: {
              "Fn::ImportValue": "Stack:OutputRefSecretA720EF05",
            },
            DdSite: "datadoghq.eu", // the sub-assert
            FunctionName: "DatadogForwarder",
          },
        })
      );
    });
    it("allows customizing the function name", () => {
      const datadogStack = new DatadogIntegrationStack(stack, "DatadogStack", {
        apiKey: secret,
        externalId: "not-a-real-id",
        forwarderName: "MyForwarder",
      });

      expectCDK(datadogStack).to(
        haveResource("AWS::CloudFormation::Stack", {
          TemplateURL:
            "https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/latest.yaml",
          Parameters: {
            DdApiKey: "USE_ARN",
            DdApiKeySecretArn: {
              "Fn::ImportValue": "Stack:OutputRefSecretA720EF05",
            },
            DdSite: "datadoghq.com",
            FunctionName: "MyForwarder", // the sub-assert
          },
        })
      );
    });

    it("allows locking the forwarder version", () => {
      const datadogStack = new DatadogIntegrationStack(stack, "DatadogStack", {
        apiKey: secret,
        externalId: "not-a-real-id",
        forwarderVersion: "3.9.0",
      });

      expectCDK(datadogStack).to(
        haveResource("AWS::CloudFormation::Stack", {
          TemplateURL:
            "https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/3.9.0.yaml", // the sub-assert
          Parameters: {
            DdApiKey: "USE_ARN",
            DdApiKeySecretArn: {
              "Fn::ImportValue": "Stack:OutputRefSecretA720EF05",
            },
            DdSite: "datadoghq.com",
            FunctionName: "DatadogForwarder",
          },
        })
      );
    });
  });
});
