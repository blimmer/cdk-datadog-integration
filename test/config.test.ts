import * as cdk from "@aws-cdk/core";
import * as secrets from "@aws-cdk/aws-secretsmanager";
import { applyDefaultsToConfig } from "../lib/config";
import { DatadogIntegrationConfig } from "../lib";

describe("applyDefaultsToConfig", () => {
  let apiKey: secrets.ISecret;
  beforeEach(() => {
    const app = new cdk.App();
    const construct = new cdk.Stack(app, "MyStack");
    apiKey = new secrets.Secret(construct, "DatadogApiKey");
  });

  describe("site", () => {
    it("defaults to datadoghq.com", () => {
      const config: DatadogIntegrationConfig = {
        apiKey,
        externalId: "a-fake-external-id",
      };
      const configWithDefaults = applyDefaultsToConfig(config);

      expect(configWithDefaults.site).toEqual("datadoghq.com");
    });
    it("can be overridden", () => {
      const config: DatadogIntegrationConfig = {
        apiKey,
        externalId: "a-fake-external-id",
        site: "datadoghq.eu",
      };
      const configWithDefaults = applyDefaultsToConfig(config);

      expect(configWithDefaults.site).toEqual("datadoghq.eu");
    });
  });
  describe("iamRoleName", () => {
    it("defaults to DatadogIntegrationRole", () => {
      const config: DatadogIntegrationConfig = {
        apiKey,
        externalId: "a-fake-external-id",
      };
      const configWithDefaults = applyDefaultsToConfig(config);

      expect(configWithDefaults.iamRoleName).toEqual("DatadogIntegrationRole");
    });
    it("can be overridden", () => {
      const config: DatadogIntegrationConfig = {
        apiKey,
        externalId: "a-fake-external-id",
        iamRoleName: "MySuperSpecialRoleName",
      };
      const configWithDefaults = applyDefaultsToConfig(config);

      expect(configWithDefaults.iamRoleName).toEqual("MySuperSpecialRoleName");
    });
  });
  describe("permissions", () => {
    it("defaults to Full", () => {
      const config: DatadogIntegrationConfig = {
        apiKey,
        externalId: "a-fake-external-id",
      };
      const configWithDefaults = applyDefaultsToConfig(config);

      expect(configWithDefaults.permissions).toEqual("Full");
    });
    it("can be overridden", () => {
      const config: DatadogIntegrationConfig = {
        apiKey,
        externalId: "a-fake-external-id",
        permissions: "Core",
      };
      const configWithDefaults = applyDefaultsToConfig(config);

      expect(configWithDefaults.permissions).toEqual("Core");
    });
  });
  describe("forwarderName", () => {
    it("defaults to DatadogForwarder", () => {
      const config: DatadogIntegrationConfig = {
        apiKey,
        externalId: "a-fake-external-id",
      };
      const configWithDefaults = applyDefaultsToConfig(config);

      expect(configWithDefaults.forwarderName).toEqual("DatadogForwarder");
    });
    it("can be overridden", () => {
      const config: DatadogIntegrationConfig = {
        apiKey,
        externalId: "a-fake-external-id",
        forwarderName: "MySuperSpecialForwarderName",
      };
      const configWithDefaults = applyDefaultsToConfig(config);

      expect(configWithDefaults.forwarderName).toEqual(
        "MySuperSpecialForwarderName"
      );
    });
  });
  describe("forwarderVersion", () => {
    it("defaults to latest", () => {
      const config: DatadogIntegrationConfig = {
        apiKey,
        externalId: "a-fake-external-id",
      };
      const configWithDefaults = applyDefaultsToConfig(config);

      expect(configWithDefaults.forwarderVersion).toEqual("latest");
    });
    it("can be overridden", () => {
      const config: DatadogIntegrationConfig = {
        apiKey,
        externalId: "a-fake-external-id",
        forwarderVersion: "3.8.0",
      };
      const configWithDefaults = applyDefaultsToConfig(config);

      expect(configWithDefaults.forwarderVersion).toEqual("3.8.0");
    });
  });
  describe("installDatadogPolicyMacro", () => {
    it("defaults to true", () => {
      const config: DatadogIntegrationConfig = {
        apiKey,
        externalId: "a-fake-external-id",
      };
      const configWithDefaults = applyDefaultsToConfig(config);

      expect(configWithDefaults.installDatadogPolicyMacro).toEqual(true);
    });
    it("can be overridden", () => {
      const config: DatadogIntegrationConfig = {
        apiKey,
        externalId: "a-fake-external-id",
        installDatadogPolicyMacro: false,
      };
      const configWithDefaults = applyDefaultsToConfig(config);

      expect(configWithDefaults.installDatadogPolicyMacro).toEqual(false);
    });
  });
});
