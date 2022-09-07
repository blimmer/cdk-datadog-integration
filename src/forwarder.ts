import * as cfn from 'aws-cdk-lib/aws-cloudformation';
import { Construct } from 'constructs';

export interface ForwarderStackProps extends Omit<cfn.CfnStackProps, 'templateUrl'>{
  forwarderVersion: string;
  templateParameters: ForwarderTemplateParameters;
}

export interface ForwarderTemplateParameters{
  /**
     * The Datadog API key, which can be found from the APIs page (/account/settings#api). It will be stored in AWS Secrets Manager securely. If DdApiKeySecretArn is also set, this value will not be used. This value must still be set, however.
     * @default 'USE_ARN'
     */
  DdApiKey?: string;

  /**
     * The ARN of the secret storing the Datadog API key, if you already have it stored in Secrets Manager. You still need to set a dummy value for "DdApiKey" to satisfy the requirement, though that value won't be used.
     */
  DdApiKeySecretArn?: string;

  /**
     *  The Datadog Forwarder Lambda function name. DO NOT change when updating an existing CloudFormation stack, otherwise the current forwarder function will be replaced and all the triggers will be lost.
     * @default DatadogForwarder
     */
  FunctionName?: string;

  /**
     * Define your Datadog Site to send data to. For the Datadog EU site, set to datadoghq.eu
     * @default datadoghq.com
     */
  DdSite?: string;
}
export class ForwarderStack extends cfn.CfnStack {

  constructor(scope: Construct, id: string, props: ForwarderStackProps) {

    const templateParams: ForwarderTemplateParameters = {
      DdApiKey: 'USE_ARN',
      DdApiKeySecretArn: props.templateParameters.DdApiKeySecretArn,
      DdSite: props.templateParameters.DdSite,
      FunctionName: props.templateParameters.DdSite,
      ...props.templateParameters,
    };

    const templateParamsAsDict: { [key: string]: (string) } = Object.entries(templateParams)
      .reduce((all, [key, value]) => ({ ...all, [key]: value.toString() }), {});

    super(scope, id, {
      templateUrl: `https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/${props.forwarderVersion}.yaml`,
      parameters: templateParamsAsDict,
    });
  }
}