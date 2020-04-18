#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkDatadogIntegrationStack } from '../lib/cdk-datadog-integration-stack';

const app = new cdk.App();
new CdkDatadogIntegrationStack(app, 'CdkDatadogIntegrationStack');
