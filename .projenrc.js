const { awscdk } = require('projen');
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
  releaseToNpm: true,
  npmTokenSecret: 'NPM_TOKEN',
  publishToNuget: {
    nugetApiKeySecret: 'NUGET_TOKEN',
    dotNetNamespace: 'BenLimmer.CdkDatadogIntegration',
    packageId: 'BenLimmer.CdkDatadogIntegration',
  },

  // TODO: It looks like we need a username/password for twine via the API key I was using before.
  // publishToPypi: {
  //   distName: 'cdk-datadog-integration',
  //   module: 'cdk_datadog_integration',
  // },

  // TODO: it looks like this publishes to sonatype, not GitHub, so would need to set that up.
  // publishToMaven: {
  //   javaPackage: 'com.benlimmer.cdkdatadogintegration',
  //   mavenGroupId: 'com.benlimmer',
  //   mavenArtifactId: 'cdk-datadog-integration',
  // },
});

project.synth();
