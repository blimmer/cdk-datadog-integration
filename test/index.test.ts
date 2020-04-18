import {
  expect as expectCDK,
  matchTemplate,
  MatchStyle,
} from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import CdkDatadogIntegration = require("../lib/index");

test("Empty Stack", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkDatadogIntegration.DatadogIntegrationStack(
    app,
    "MyTestStack"
  );
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Resources: {},
      },
      MatchStyle.EXACT
    )
  );
});
