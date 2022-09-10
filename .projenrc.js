const { awscdk } = require('projen');
const { ReleaseTrigger } = require('projen/lib/release');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Ben Limmer',
  authorAddress: 'https://benlimmer.com/freelance',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-datadog-integration',
  repositoryUrl: 'https://github.com/blimmer/cdk-datadog-integration.git',
  license: 'Apache-2.0',
  majorVersion: 2,
  keywords: [
    'cdk',
    'aws-cdk',
    'aws-cdk-construct',
    'projen',
  ],

  docgen: true,

  release: true,
  releaseTrigger: ReleaseTrigger.manual(),
  releaseToNpm: true,
  npmTokenSecret: 'NPM_TOKEN',
  publishToNuget: {
    nugetApiKeySecret: 'NUGET_TOKEN',
    dotNetNamespace: 'BenLimmer.CdkDatadogIntegration',
    packageId: 'BenLimmer.CdkDatadogIntegration',
  },

  publishToPypi: {
    twineUsernameSecret: 'TWINE_USERNAME', // this resolves to __token__ to use token auth
    twinePasswordSecret: 'PYPI_TOKEN',
    distName: 'cdk-datadog-integration',
    module: 'cdk_datadog_integration',
  },

  publishToMaven: {
    mavenRepositoryUrl: 'https://maven.pkg.github.com/${{ github.repository }}',
    javaPackage: 'com.benlimmer.cdkdatadogintegration',
    mavenGroupId: 'com.benlimmer',
    mavenArtifactId: 'cdk-datadog-integration',
  },
});

project.synth();
