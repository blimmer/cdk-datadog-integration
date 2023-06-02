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
   import * as cdk from "aws-cdk-lib";
   import { MonitoringInfrastructureStack } from "../lib/monitoring-infrastructure-stack";

   const app = new cdk.App();
   new MonitoringInfrastructureStack(app, "MonitoringInfrastructure");
   ```

   ```ts
   import * as cdk from "aws-cdk-lib";
   import * as secrets from "aws-cdk-lib/aws-secretsmanager";
   import { DatadogIntegration } from "cdk-datadog-integration";

   export class MonitoringInfrastructureStack extends cdk.Stack {
     constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
       super(scope, id, props);

       const datadog = new DatadogIntegration(this, "Datadog", {
         // Generate an ID here: https://app.datadoghq.com/account/settings#integrations/amazon-web-services
         externalId: "",

         // Create or lookup a `Secret` that contains your Datadog API Key
         // See https://docs.aws.amazon.com/cdk/api/latest/docs/aws-secretsmanager-readme.html for details on Secrets in CDK
         // Get your API key here: https://app.datadoghq.com/account/settings#api
         apiKey: secrets.Secret.fromSecretNameV2(
           this,
           "DatadogApiKey",
           "<your secret name>"
         ),
       });
     }
   }
   ```

## Configuration

Use `DatadogIntegrationConfig` to set additional configuration parameters. Check
out
[docs](/API.md#cdk-datadog-integration.DatadogIntegrationConfig)
for more details on what's available.

Additionally, a CDK `Construct` is exposed, should you want to add additional
customizations vs. using the out-of-the-box `Stack`.

## CDK Version Compatibility

This package is expected to work with all recent versions of CDK v2. It has been
tested with 2.1.0 so almost certainly works will all newer versions, and
probably works with some older versions too, but is untested.

If you're still on CDK v1, you can use `cdk-datadog-integration@1`, but this
version is unmaintained. Please upgrade to CDKv2.

## How it Works

This module uses the
[`CfnStack` CDK Construct](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_cloudformation.CfnStack.html)
to import the three CloudFormation stacks referenced by the
[main Datadog CloudFormation template](https://github.com/DataDog/cloudformation-template/tree/master/aws).
By referencing the Datadog-provided templates, you can be confident that the
integration works exactly as Datadog intends.

## Author

This package is created and maintained by
[Ben Limmer](https://www.linkedin.com/in/blimmer/), a
[freelance architect and consultant](https://benlimmer.com/freelance/). I love
helping businesses of all sizes solve their hardest technology problems. Let's
[connect](https://benlimmer.com/freelance/contact/) if I can be of help!

## Contributing

PRs are welcome!

### Releasing

To release, merge your PR to `main`.

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatadogIntegration <a name="DatadogIntegration" id="cdk-datadog-integration.DatadogIntegration"></a>

#### Initializers <a name="Initializers" id="cdk-datadog-integration.DatadogIntegration.Initializer"></a>

```typescript
import { DatadogIntegration } from 'cdk-datadog-integration'

new DatadogIntegration(scope: Construct, id: string, props: DatadogIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-datadog-integration.DatadogIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-datadog-integration.DatadogIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-datadog-integration.DatadogIntegration.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-datadog-integration.DatadogIntegrationConfig">DatadogIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-datadog-integration.DatadogIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-datadog-integration.DatadogIntegration.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-datadog-integration.DatadogIntegration.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-datadog-integration.DatadogIntegrationConfig">DatadogIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-datadog-integration.DatadogIntegration.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-datadog-integration.DatadogIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-datadog-integration.DatadogIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-datadog-integration.DatadogIntegration.isConstruct"></a>

```typescript
import { DatadogIntegration } from 'cdk-datadog-integration'

DatadogIntegration.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-datadog-integration.DatadogIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-datadog-integration.DatadogIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-datadog-integration.DatadogIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### DatadogIntegrationStack <a name="DatadogIntegrationStack" id="cdk-datadog-integration.DatadogIntegrationStack"></a>

#### Initializers <a name="Initializers" id="cdk-datadog-integration.DatadogIntegrationStack.Initializer"></a>

```typescript
import { DatadogIntegrationStack } from 'cdk-datadog-integration'

new DatadogIntegrationStack(scope: Construct, id: string, props: DatadogIntegrationStackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-datadog-integration.DatadogIntegrationStackConfig">DatadogIntegrationStackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-datadog-integration.DatadogIntegrationStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-datadog-integration.DatadogIntegrationStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-datadog-integration.DatadogIntegrationStack.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-datadog-integration.DatadogIntegrationStackConfig">DatadogIntegrationStackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a value. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |

---

##### `toString` <a name="toString" id="cdk-datadog-integration.DatadogIntegrationStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk-datadog-integration.DatadogIntegrationStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="cdk-datadog-integration.DatadogIntegrationStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="cdk-datadog-integration.DatadogIntegrationStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addTransform` <a name="addTransform" id="cdk-datadog-integration.DatadogIntegrationStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="cdk-datadog-integration.DatadogIntegrationStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportValue` <a name="exportValue" id="cdk-datadog-integration.DatadogIntegrationStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

## Example

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

### Deployment 1: break the relationship

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
   stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
   remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
   will make sure the CloudFormation Export continues to exist while the relationship
   between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

### Deployment 2: remove the bucket resource

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="cdk-datadog-integration.DatadogIntegrationStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-datadog-integration.DatadogIntegrationStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="cdk-datadog-integration.DatadogIntegrationStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

   arn:{partition}:{service}:{region}:{account}:{resource}{sep}}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="cdk-datadog-integration.DatadogIntegrationStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="cdk-datadog-integration.DatadogIntegrationStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="cdk-datadog-integration.DatadogIntegrationStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `renameLogicalId` <a name="renameLogicalId" id="cdk-datadog-integration.DatadogIntegrationStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="cdk-datadog-integration.DatadogIntegrationStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="cdk-datadog-integration.DatadogIntegrationStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="cdk-datadog-integration.DatadogIntegrationStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="cdk-datadog-integration.DatadogIntegrationStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="cdk-datadog-integration.DatadogIntegrationStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="cdk-datadog-integration.DatadogIntegrationStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="cdk-datadog-integration.DatadogIntegrationStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="cdk-datadog-integration.DatadogIntegrationStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="cdk-datadog-integration.DatadogIntegrationStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="cdk-datadog-integration.DatadogIntegrationStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="cdk-datadog-integration.DatadogIntegrationStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="cdk-datadog-integration.DatadogIntegrationStack.toJsonString.parameter.space"></a>

- *Type:* number

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-datadog-integration.DatadogIntegrationStack.isConstruct"></a>

```typescript
import { DatadogIntegrationStack } from 'cdk-datadog-integration'

DatadogIntegrationStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-datadog-integration.DatadogIntegrationStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="cdk-datadog-integration.DatadogIntegrationStack.isStack"></a>

```typescript
import { DatadogIntegrationStack } from 'cdk-datadog-integration'

DatadogIntegrationStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="cdk-datadog-integration.DatadogIntegrationStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="cdk-datadog-integration.DatadogIntegrationStack.of"></a>

```typescript
import { DatadogIntegrationStack } from 'cdk-datadog-integration'

DatadogIntegrationStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-datadog-integration.DatadogIntegrationStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-datadog-integration.DatadogIntegrationStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="cdk-datadog-integration.DatadogIntegrationStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
    either be a concerete account (e.g. `585695031111`) or the
    `Aws.accountId` token.
3. `Aws.accountId`, which represents the CloudFormation intrinsic reference
    `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concerete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="cdk-datadog-integration.DatadogIntegrationStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="cdk-datadog-integration.DatadogIntegrationStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk-datadog-integration.DatadogIntegrationStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="cdk-datadog-integration.DatadogIntegrationStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.account` or `Aws.region`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="cdk-datadog-integration.DatadogIntegrationStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="cdk-datadog-integration.DatadogIntegrationStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="cdk-datadog-integration.DatadogIntegrationStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="cdk-datadog-integration.DatadogIntegrationStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="cdk-datadog-integration.DatadogIntegrationStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="cdk-datadog-integration.DatadogIntegrationStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
    either be a concerete region (e.g. `us-west-2`) or the `Aws.region`
    token.
3. `Aws.region`, which is represents the CloudFormation intrinsic reference
    `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concerete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="cdk-datadog-integration.DatadogIntegrationStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="cdk-datadog-integration.DatadogIntegrationStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.stackName` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="cdk-datadog-integration.DatadogIntegrationStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="cdk-datadog-integration.DatadogIntegrationStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="cdk-datadog-integration.DatadogIntegrationStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="cdk-datadog-integration.DatadogIntegrationStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="cdk-datadog-integration.DatadogIntegrationStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="cdk-datadog-integration.DatadogIntegrationStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---


## Structs <a name="Structs" id="Structs"></a>

### DatadogIntegrationConfig <a name="DatadogIntegrationConfig" id="cdk-datadog-integration.DatadogIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="cdk-datadog-integration.DatadogIntegrationConfig.Initializer"></a>

```typescript
import { DatadogIntegrationConfig } from 'cdk-datadog-integration'

const datadogIntegrationConfig: DatadogIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationConfig.property.apiKey">apiKey</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | API key for the Datadog account (find at https://app.datadoghq.com/account/settings#api). |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationConfig.property.externalId">externalId</a></code> | <code>string</code> | External ID for the Datadog role (generate at https://app.datadoghq.com/account/settings#integrations/amazon-web-services). |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationConfig.property.additionalForwarderParams">additionalForwarderParams</a></code> | <code>{[ key: string ]: string}</code> | Additional parameters to pass through to the underlying Forwarder CloudFormation template. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationConfig.property.additionalIntegrationRoleParams">additionalIntegrationRoleParams</a></code> | <code>{[ key: string ]: string}</code> | Additional parameters to pass through to the underlying Integration Role CloudFormation template. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationConfig.property.cloudTrails">cloudTrails</a></code> | <code>aws-cdk-lib.aws_s3.Bucket[]</code> | S3 buckets for Datadog CloudTrail integration. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationConfig.property.forwarderName">forwarderName</a></code> | <code>string</code> | The Datadog Forwarder Lambda function name. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationConfig.property.forwarderVersion">forwarderVersion</a></code> | <code>string</code> | Specify a version of the forwarder to use. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationConfig.property.iamRoleName">iamRoleName</a></code> | <code>string</code> | Customize the name of IAM role for Datadog AWS integration. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationConfig.property.installDatadogPolicyMacro">installDatadogPolicyMacro</a></code> | <code>boolean</code> | If you already deployed a stack using this template, set this parameter to false to skip the installation of the DatadogPolicy Macro again. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationConfig.property.logArchives">logArchives</a></code> | <code>aws-cdk-lib.aws_s3.Bucket[]</code> | S3 paths to store log archives for log rehydration. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationConfig.property.permissions">permissions</a></code> | <code>string</code> | Customize the permission level for the Datadog IAM role. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationConfig.property.site">site</a></code> | <code>string</code> | Define your Datadog Site to send data to. |

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="cdk-datadog-integration.DatadogIntegrationConfig.property.apiKey"></a>

```typescript
public readonly apiKey: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

API key for the Datadog account (find at https://app.datadoghq.com/account/settings#api).

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="cdk-datadog-integration.DatadogIntegrationConfig.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

External ID for the Datadog role (generate at https://app.datadoghq.com/account/settings#integrations/amazon-web-services).

---

##### `additionalForwarderParams`<sup>Optional</sup> <a name="additionalForwarderParams" id="cdk-datadog-integration.DatadogIntegrationConfig.property.additionalForwarderParams"></a>

```typescript
public readonly additionalForwarderParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional parameters to pass through to the underlying Forwarder CloudFormation template.

Use this construct if you need to specify a template variable not
yet exposed through this library.

See https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/latest.yaml
for the latest parameters.

---

##### `additionalIntegrationRoleParams`<sup>Optional</sup> <a name="additionalIntegrationRoleParams" id="cdk-datadog-integration.DatadogIntegrationConfig.property.additionalIntegrationRoleParams"></a>

```typescript
public readonly additionalIntegrationRoleParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional parameters to pass through to the underlying Integration Role CloudFormation template.

Use this construct if you need to specify a template variable not
yet exposed through this library.

See https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml
for the latest parameters.

---

##### `cloudTrails`<sup>Optional</sup> <a name="cloudTrails" id="cdk-datadog-integration.DatadogIntegrationConfig.property.cloudTrails"></a>

```typescript
public readonly cloudTrails: Bucket[];
```

- *Type:* aws-cdk-lib.aws_s3.Bucket[]

S3 buckets for Datadog CloudTrail integration.

Permissions will be automatically
added to the Datadog integration IAM role.
https://docs.datadoghq.com/integrations/amazon_cloudtrail

---

##### `forwarderName`<sup>Optional</sup> <a name="forwarderName" id="cdk-datadog-integration.DatadogIntegrationConfig.property.forwarderName"></a>

```typescript
public readonly forwarderName: string;
```

- *Type:* string
- *Default:* DatadogForwarder

The Datadog Forwarder Lambda function name.

DO NOT change when updating an existing
CloudFormation stack, otherwise the current forwarder function will be replaced and
all the triggers will be lost.

---

##### `forwarderVersion`<sup>Optional</sup> <a name="forwarderVersion" id="cdk-datadog-integration.DatadogIntegrationConfig.property.forwarderVersion"></a>

```typescript
public readonly forwarderVersion: string;
```

- *Type:* string
- *Default:* latest

Specify a version of the forwarder to use.

See
https://github.com/DataDog/datadog-serverless-functions/releases. Pass this
parameter as a version string, e.g., '3.9.0'

---

##### `iamRoleName`<sup>Optional</sup> <a name="iamRoleName" id="cdk-datadog-integration.DatadogIntegrationConfig.property.iamRoleName"></a>

```typescript
public readonly iamRoleName: string;
```

- *Type:* string
- *Default:* DatadogIntegrationRole

Customize the name of IAM role for Datadog AWS integration.

---

##### `installDatadogPolicyMacro`<sup>Optional</sup> <a name="installDatadogPolicyMacro" id="cdk-datadog-integration.DatadogIntegrationConfig.property.installDatadogPolicyMacro"></a>

```typescript
public readonly installDatadogPolicyMacro: boolean;
```

- *Type:* boolean
- *Default:* true

If you already deployed a stack using this template, set this parameter to false to skip the installation of the DatadogPolicy Macro again.

---

##### `logArchives`<sup>Optional</sup> <a name="logArchives" id="cdk-datadog-integration.DatadogIntegrationConfig.property.logArchives"></a>

```typescript
public readonly logArchives: Bucket[];
```

- *Type:* aws-cdk-lib.aws_s3.Bucket[]

S3 paths to store log archives for log rehydration.

Permissions will be automatically added to the Datadog integration IAM role.
https://docs.datadoghq.com/logs/archives/rehydrating/?tab=awss

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="cdk-datadog-integration.DatadogIntegrationConfig.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string
- *Default:* Full

Customize the permission level for the Datadog IAM role.

Select "Core" to only grant Datadog read-only permissions (not recommended).

---

##### `site`<sup>Optional</sup> <a name="site" id="cdk-datadog-integration.DatadogIntegrationConfig.property.site"></a>

```typescript
public readonly site: string;
```

- *Type:* string
- *Default:* datadoghq.com

Define your Datadog Site to send data to.

For the Datadog EU site, set to datadoghq.eu

---

### DatadogIntegrationStackConfig <a name="DatadogIntegrationStackConfig" id="cdk-datadog-integration.DatadogIntegrationStackConfig"></a>

#### Initializer <a name="Initializer" id="cdk-datadog-integration.DatadogIntegrationStackConfig.Initializer"></a>

```typescript
import { DatadogIntegrationStackConfig } from 'cdk-datadog-integration'

const datadogIntegrationStackConfig: DatadogIntegrationStackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStackConfig.property.apiKey">apiKey</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | API key for the Datadog account (find at https://app.datadoghq.com/account/settings#api). |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStackConfig.property.externalId">externalId</a></code> | <code>string</code> | External ID for the Datadog role (generate at https://app.datadoghq.com/account/settings#integrations/amazon-web-services). |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStackConfig.property.additionalForwarderParams">additionalForwarderParams</a></code> | <code>{[ key: string ]: string}</code> | Additional parameters to pass through to the underlying Forwarder CloudFormation template. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStackConfig.property.additionalIntegrationRoleParams">additionalIntegrationRoleParams</a></code> | <code>{[ key: string ]: string}</code> | Additional parameters to pass through to the underlying Integration Role CloudFormation template. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStackConfig.property.cloudTrails">cloudTrails</a></code> | <code>aws-cdk-lib.aws_s3.Bucket[]</code> | S3 buckets for Datadog CloudTrail integration. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStackConfig.property.forwarderName">forwarderName</a></code> | <code>string</code> | The Datadog Forwarder Lambda function name. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStackConfig.property.forwarderVersion">forwarderVersion</a></code> | <code>string</code> | Specify a version of the forwarder to use. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStackConfig.property.iamRoleName">iamRoleName</a></code> | <code>string</code> | Customize the name of IAM role for Datadog AWS integration. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStackConfig.property.installDatadogPolicyMacro">installDatadogPolicyMacro</a></code> | <code>boolean</code> | If you already deployed a stack using this template, set this parameter to false to skip the installation of the DatadogPolicy Macro again. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStackConfig.property.logArchives">logArchives</a></code> | <code>aws-cdk-lib.aws_s3.Bucket[]</code> | S3 paths to store log archives for log rehydration. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStackConfig.property.permissions">permissions</a></code> | <code>string</code> | Customize the permission level for the Datadog IAM role. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStackConfig.property.site">site</a></code> | <code>string</code> | Define your Datadog Site to send data to. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStackConfig.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStackConfig.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStackConfig.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStackConfig.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStackConfig.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStackConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#cdk-datadog-integration.DatadogIntegrationStackConfig.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="cdk-datadog-integration.DatadogIntegrationStackConfig.property.apiKey"></a>

```typescript
public readonly apiKey: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

API key for the Datadog account (find at https://app.datadoghq.com/account/settings#api).

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="cdk-datadog-integration.DatadogIntegrationStackConfig.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

External ID for the Datadog role (generate at https://app.datadoghq.com/account/settings#integrations/amazon-web-services).

---

##### `additionalForwarderParams`<sup>Optional</sup> <a name="additionalForwarderParams" id="cdk-datadog-integration.DatadogIntegrationStackConfig.property.additionalForwarderParams"></a>

```typescript
public readonly additionalForwarderParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional parameters to pass through to the underlying Forwarder CloudFormation template.

Use this construct if you need to specify a template variable not
yet exposed through this library.

See https://datadog-cloudformation-template.s3.amazonaws.com/aws/forwarder/latest.yaml
for the latest parameters.

---

##### `additionalIntegrationRoleParams`<sup>Optional</sup> <a name="additionalIntegrationRoleParams" id="cdk-datadog-integration.DatadogIntegrationStackConfig.property.additionalIntegrationRoleParams"></a>

```typescript
public readonly additionalIntegrationRoleParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional parameters to pass through to the underlying Integration Role CloudFormation template.

Use this construct if you need to specify a template variable not
yet exposed through this library.

See https://datadog-cloudformation-template.s3.amazonaws.com/aws/datadog_integration_role.yaml
for the latest parameters.

---

##### `cloudTrails`<sup>Optional</sup> <a name="cloudTrails" id="cdk-datadog-integration.DatadogIntegrationStackConfig.property.cloudTrails"></a>

```typescript
public readonly cloudTrails: Bucket[];
```

- *Type:* aws-cdk-lib.aws_s3.Bucket[]

S3 buckets for Datadog CloudTrail integration.

Permissions will be automatically
added to the Datadog integration IAM role.
https://docs.datadoghq.com/integrations/amazon_cloudtrail

---

##### `forwarderName`<sup>Optional</sup> <a name="forwarderName" id="cdk-datadog-integration.DatadogIntegrationStackConfig.property.forwarderName"></a>

```typescript
public readonly forwarderName: string;
```

- *Type:* string
- *Default:* DatadogForwarder

The Datadog Forwarder Lambda function name.

DO NOT change when updating an existing
CloudFormation stack, otherwise the current forwarder function will be replaced and
all the triggers will be lost.

---

##### `forwarderVersion`<sup>Optional</sup> <a name="forwarderVersion" id="cdk-datadog-integration.DatadogIntegrationStackConfig.property.forwarderVersion"></a>

```typescript
public readonly forwarderVersion: string;
```

- *Type:* string
- *Default:* latest

Specify a version of the forwarder to use.

See
https://github.com/DataDog/datadog-serverless-functions/releases. Pass this
parameter as a version string, e.g., '3.9.0'

---

##### `iamRoleName`<sup>Optional</sup> <a name="iamRoleName" id="cdk-datadog-integration.DatadogIntegrationStackConfig.property.iamRoleName"></a>

```typescript
public readonly iamRoleName: string;
```

- *Type:* string
- *Default:* DatadogIntegrationRole

Customize the name of IAM role for Datadog AWS integration.

---

##### `installDatadogPolicyMacro`<sup>Optional</sup> <a name="installDatadogPolicyMacro" id="cdk-datadog-integration.DatadogIntegrationStackConfig.property.installDatadogPolicyMacro"></a>

```typescript
public readonly installDatadogPolicyMacro: boolean;
```

- *Type:* boolean
- *Default:* true

If you already deployed a stack using this template, set this parameter to false to skip the installation of the DatadogPolicy Macro again.

---

##### `logArchives`<sup>Optional</sup> <a name="logArchives" id="cdk-datadog-integration.DatadogIntegrationStackConfig.property.logArchives"></a>

```typescript
public readonly logArchives: Bucket[];
```

- *Type:* aws-cdk-lib.aws_s3.Bucket[]

S3 paths to store log archives for log rehydration.

Permissions will be automatically added to the Datadog integration IAM role.
https://docs.datadoghq.com/logs/archives/rehydrating/?tab=awss

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="cdk-datadog-integration.DatadogIntegrationStackConfig.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string
- *Default:* Full

Customize the permission level for the Datadog IAM role.

Select "Core" to only grant Datadog read-only permissions (not recommended).

---

##### `site`<sup>Optional</sup> <a name="site" id="cdk-datadog-integration.DatadogIntegrationStackConfig.property.site"></a>

```typescript
public readonly site: string;
```

- *Type:* string
- *Default:* datadoghq.com

Define your Datadog Site to send data to.

For the Datadog EU site, set to datadoghq.eu

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="cdk-datadog-integration.DatadogIntegrationStackConfig.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-datadog-integration.DatadogIntegrationStackConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="cdk-datadog-integration.DatadogIntegrationStackConfig.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `stackName`<sup>Optional</sup> <a name="stackName" id="cdk-datadog-integration.DatadogIntegrationStackConfig.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="cdk-datadog-integration.DatadogIntegrationStackConfig.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* `DefaultStackSynthesizer` if the `@aws-cdk/core:newStyleStackSynthesis` feature flag is set, `LegacyStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-datadog-integration.DatadogIntegrationStackConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="cdk-datadog-integration.DatadogIntegrationStackConfig.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---



