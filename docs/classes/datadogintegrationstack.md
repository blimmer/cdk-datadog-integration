[cdk-datadog-integration](../README.md) › [DatadogIntegrationStack](datadogintegrationstack.md)

# Class: DatadogIntegrationStack

## Hierarchy

* Stack

  ↳ **DatadogIntegrationStack**

## Implements

* IConstruct
* IConstruct
* ITaggable

## Index

### Constructors

* [constructor](datadogintegrationstack.md#constructor)

### Properties

* [account](datadogintegrationstack.md#readonly-account)
* [artifactId](datadogintegrationstack.md#readonly-artifactid)
* [environment](datadogintegrationstack.md#readonly-environment)
* [nestedStackResource](datadogintegrationstack.md#optional-readonly-nestedstackresource)
* [node](datadogintegrationstack.md#readonly-node)
* [region](datadogintegrationstack.md#readonly-region)
* [synthesizer](datadogintegrationstack.md#readonly-synthesizer)
* [tags](datadogintegrationstack.md#readonly-tags)
* [templateFile](datadogintegrationstack.md#readonly-templatefile)
* [templateOptions](datadogintegrationstack.md#readonly-templateoptions)
* [terminationProtection](datadogintegrationstack.md#optional-readonly-terminationprotection)

### Accessors

* [availabilityZones](datadogintegrationstack.md#availabilityzones)
* [dependencies](datadogintegrationstack.md#dependencies)
* [nested](datadogintegrationstack.md#nested)
* [nestedStackParent](datadogintegrationstack.md#nestedstackparent)
* [notificationArns](datadogintegrationstack.md#notificationarns)
* [parentStack](datadogintegrationstack.md#parentstack)
* [partition](datadogintegrationstack.md#partition)
* [stackId](datadogintegrationstack.md#stackid)
* [stackName](datadogintegrationstack.md#stackname)
* [urlSuffix](datadogintegrationstack.md#urlsuffix)

### Methods

* [addDependency](datadogintegrationstack.md#adddependency)
* [addDockerImageAsset](datadogintegrationstack.md#adddockerimageasset)
* [addFileAsset](datadogintegrationstack.md#addfileasset)
* [addTransform](datadogintegrationstack.md#addtransform)
* [allocateLogicalId](datadogintegrationstack.md#protected-allocatelogicalid)
* [formatArn](datadogintegrationstack.md#formatarn)
* [getLogicalId](datadogintegrationstack.md#getlogicalid)
* [onPrepare](datadogintegrationstack.md#protected-onprepare)
* [onSynthesize](datadogintegrationstack.md#protected-onsynthesize)
* [onValidate](datadogintegrationstack.md#protected-onvalidate)
* [parseArn](datadogintegrationstack.md#parsearn)
* [prepare](datadogintegrationstack.md#protected-prepare)
* [prepareCrossReference](datadogintegrationstack.md#protected-preparecrossreference)
* [renameLogicalId](datadogintegrationstack.md#renamelogicalid)
* [reportMissingContext](datadogintegrationstack.md#reportmissingcontext)
* [resolve](datadogintegrationstack.md#resolve)
* [synthesize](datadogintegrationstack.md#protected-synthesize)
* [toJsonString](datadogintegrationstack.md#tojsonstring)
* [toString](datadogintegrationstack.md#tostring)
* [validate](datadogintegrationstack.md#protected-validate)
* [isConstruct](datadogintegrationstack.md#static-isconstruct)
* [isStack](datadogintegrationstack.md#static-isstack)
* [of](datadogintegrationstack.md#static-of)

## Constructors

###  constructor

\+ **new DatadogIntegrationStack**(`scope`: Construct, `id`: string, `props`: [DatadogIntegrationStackConfig](../interfaces/datadogintegrationstackconfig.md)): *[DatadogIntegrationStack](datadogintegrationstack.md)*

*Overrides void*

*Defined in [lib/index.ts:192](https://github.com/blimmer/cdk-datadog-integration/blob/main/lib/index.ts#L192)*

**Parameters:**

Name | Type |
------ | ------ |
`scope` | Construct |
`id` | string |
`props` | [DatadogIntegrationStackConfig](../interfaces/datadogintegrationstackconfig.md) |

**Returns:** *[DatadogIntegrationStack](datadogintegrationstack.md)*

## Properties

### `Readonly` account

• **account**: *string*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[account](datadogintegrationstack.md#readonly-account)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:172

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

___

### `Readonly` artifactId

• **artifactId**: *string*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[artifactId](datadogintegrationstack.md#readonly-artifactid)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:208

The ID of the cloud assembly artifact for this stack.

___

### `Readonly` environment

• **environment**: *string*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[environment](datadogintegrationstack.md#readonly-environment)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:186

The environment coordinates in which this stack is deployed. In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.account` or `Aws.region`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

___

### `Optional` `Readonly` nestedStackResource

• **nestedStackResource**? : *CfnResource*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[nestedStackResource](datadogintegrationstack.md#optional-readonly-nestedstackresource)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:197

If this is a nested stack, this represents its `AWS::CloudFormation::Stack`
resource. `undefined` for top-level (non-nested) stacks.

**`experimental`** 

___

### `Readonly` node

• **node**: *ConstructNode*

*Inherited from [DatadogIntegration](datadogintegration.md).[node](datadogintegration.md#readonly-node)*

Defined in node_modules/@aws-cdk/core/lib/construct-compat.d.ts:52

The construct tree node associated with this construct.

___

### `Readonly` region

• **region**: *string*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[region](datadogintegrationstack.md#readonly-region)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:151

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

___

### `Readonly` synthesizer

• **synthesizer**: *IStackSynthesizer*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[synthesizer](datadogintegrationstack.md#readonly-synthesizer)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:214

Synthesis method for this stack

**`experimental`** 

___

### `Readonly` tags

• **tags**: *TagManager*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[tags](datadogintegrationstack.md#readonly-tags)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:126

Tags to be applied to the stack.

___

### `Readonly` templateFile

• **templateFile**: *string*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[templateFile](datadogintegrationstack.md#readonly-templatefile)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:204

The name of the CloudFormation template file emitted to the output
directory during synthesis.

**`example`** MyStack.template.json

___

### `Readonly` templateOptions

• **templateOptions**: *ITemplateOptions*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[templateOptions](datadogintegrationstack.md#readonly-templateoptions)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:130

Options for CloudFormation template (like version, transform, description).

___

### `Optional` `Readonly` terminationProtection

• **terminationProtection**? : *undefined | false | true*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[terminationProtection](datadogintegrationstack.md#optional-readonly-terminationprotection)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:190

Whether termination protection is enabled for this stack.

## Accessors

###  availabilityZones

• **get availabilityZones**(): *string[]*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[availabilityZones](datadogintegrationstack.md#availabilityzones)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:398

Returns the list of AZs that are available in the AWS environment
(account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

**Returns:** *string[]*

___

###  dependencies

• **get dependencies**(): *Stack[]*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[dependencies](datadogintegrationstack.md#dependencies)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:290

Return the stacks this stack depends on

**Returns:** *Stack[]*

___

###  nested

• **get nested**(): *boolean*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[nested](datadogintegrationstack.md#nested)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:325

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

**Returns:** *boolean*

___

###  nestedStackParent

• **get nestedStackParent**(): *Stack | undefined*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[nestedStackParent](datadogintegrationstack.md#nestedstackparent)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:416

If this is a nested stack, returns it's parent stack.

**Returns:** *Stack | undefined*

___

###  notificationArns

• **get notificationArns**(): *string[]*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[notificationArns](datadogintegrationstack.md#notificationarns)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:321

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

**Returns:** *string[]*

___

###  parentStack

• **get parentStack**(): *Stack | undefined*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[parentStack](datadogintegrationstack.md#parentstack)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:422

Returns the parent of a nested stack.

**`deprecated`** use `nestedStackParent`

**Returns:** *Stack | undefined*

___

###  partition

• **get partition**(): *string*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[partition](datadogintegrationstack.md#partition)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:307

The partition in which this stack is defined

**Returns:** *string*

___

###  stackId

• **get stackId**(): *string*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[stackId](datadogintegrationstack.md#stackid)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:317

The ID of the stack

**`example`** After resolving, looks like arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123

**Returns:** *string*

___

###  stackName

• **get stackName**(): *string*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[stackName](datadogintegrationstack.md#stackname)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:303

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.stackName` directly.

**Returns:** *string*

___

###  urlSuffix

• **get urlSuffix**(): *string*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[urlSuffix](datadogintegrationstack.md#urlsuffix)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:311

The Amazon domain suffix for the region in which this stack is defined

**Returns:** *string*

## Methods

###  addDependency

▸ **addDependency**(`target`: Stack, `reason?`: undefined | string): *void*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[addDependency](datadogintegrationstack.md#adddependency)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:286

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

**Parameters:**

Name | Type |
------ | ------ |
`target` | Stack |
`reason?` | undefined &#124; string |

**Returns:** *void*

___

###  addDockerImageAsset

▸ **addDockerImageAsset**(`asset`: DockerImageAssetSource): *DockerImageAssetLocation*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[addDockerImageAsset](datadogintegrationstack.md#adddockerimageasset)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:412

Register a docker image asset on this Stack

**`deprecated`** Use `stack.synthesizer.addDockerImageAsset()` if you are calling,
and a different `IStackSynthesizer` class if you are implementing.

**Parameters:**

Name | Type |
------ | ------ |
`asset` | DockerImageAssetSource |

**Returns:** *DockerImageAssetLocation*

___

###  addFileAsset

▸ **addFileAsset**(`asset`: FileAssetSource): *FileAssetLocation*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[addFileAsset](datadogintegrationstack.md#addfileasset)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:405

Register a file asset on this Stack

**`deprecated`** Use `stack.synthesizer.addFileAsset()` if you are calling,
and a different IStackSynthesizer class if you are implementing.

**Parameters:**

Name | Type |
------ | ------ |
`asset` | FileAssetSource |

**Returns:** *FileAssetLocation*

___

###  addTransform

▸ **addTransform**(`transform`: string): *void*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[addTransform](datadogintegrationstack.md#addtransform)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:435

Add a Transform to this stack. A Transform is a macro that AWS
CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

**`example`** addTransform('AWS::Serverless-2016-10-31')

**`see`** https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`transform` | string | The transform to add  |

**Returns:** *void*

___

### `Protected` allocateLogicalId

▸ **allocateLogicalId**(`cfnElement`: CfnElement): *string*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[allocateLogicalId](datadogintegrationstack.md#protected-allocatelogicalid)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:476

Returns the naming scheme used to allocate logical IDs. By default, uses
the `HashedAddressingScheme` but this method can be overridden to customize
this behavior.

In order to make sure logical IDs are unique and stable, we hash the resource
construct tree path (i.e. toplevel/secondlevel/.../myresource) and add it as
a suffix to the path components joined without a separator (CloudFormation
IDs only allow alphanumeric characters).

The result will be:

  <path.join('')><md5(path.join('/')>
    "human"      "hash"

If the "human" part of the ID exceeds 240 characters, we simply trim it so
the total ID doesn't exceed CloudFormation's 255 character limit.

We only take 8 characters from the md5 hash (0.000005 chance of collision).

Special cases:

- If the path only contains a single component (i.e. it's a top-level
  resource), we won't add the hash to it. The hash is not needed for
  disamiguation and also, it allows for a more straightforward migration an
  existing CloudFormation template to a CDK stack without logical ID changes
  (or renames).
- For aesthetic reasons, if the last components of the path are the same
  (i.e. `L1/L2/Pipeline/Pipeline`), they will be de-duplicated to make the
  resulting human portion of the ID more pleasing: `L1L2Pipeline<HASH>`
  instead of `L1L2PipelinePipeline<HASH>`
- If a component is named "Default" it will be omitted from the path. This
  allows refactoring higher level abstractions around constructs without affecting
  the IDs of already deployed resources.
- If a component is named "Resource" it will be omitted from the user-visible
  path, but included in the hash. This reduces visual noise in the human readable
  part of the identifier.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cfnElement` | CfnElement | The element for which the logical ID is allocated.  |

**Returns:** *string*

___

###  formatArn

▸ **formatArn**(`components`: ArnComponents): *string*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[formatArn](datadogintegrationstack.md#formatarn)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:343

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

**Parameters:**

Name | Type |
------ | ------ |
`components` | ArnComponents |

**Returns:** *string*

___

###  getLogicalId

▸ **getLogicalId**(`element`: CfnElement): *string*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[getLogicalId](datadogintegrationstack.md#getlogicalid)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:279

Allocates a stack-unique CloudFormation-compatible logical identity for a
specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | CfnElement | The CloudFormation element for which a logical identity is needed.  |

**Returns:** *string*

___

### `Protected` onPrepare

▸ **onPrepare**(): *void*

*Inherited from [DatadogIntegration](datadogintegration.md).[onPrepare](datadogintegration.md#protected-onprepare)*

*Overrides void*

Defined in node_modules/@aws-cdk/core/lib/construct-compat.d.ts:73

Perform final modifications before synthesis

This method can be implemented by derived constructs in order to perform
final changes before synthesis. prepare() will be called after child
constructs have been prepared.

This is an advanced framework feature. Only use this if you
understand the implications.

**Returns:** *void*

___

### `Protected` onSynthesize

▸ **onSynthesize**(`session`: ISynthesisSession): *void*

*Inherited from [DatadogIntegration](datadogintegration.md).[onSynthesize](datadogintegration.md#protected-onsynthesize)*

*Overrides void*

Defined in node_modules/@aws-cdk/core/lib/construct-compat.d.ts:82

Allows this construct to emit artifacts into the cloud assembly during synthesis.

This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
as they participate in synthesizing the cloud assembly.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`session` | ISynthesisSession | The synthesis session.  |

**Returns:** *void*

___

### `Protected` onValidate

▸ **onValidate**(): *string[]*

*Inherited from [DatadogIntegration](datadogintegration.md).[onValidate](datadogintegration.md#protected-onvalidate)*

*Overrides void*

Defined in node_modules/@aws-cdk/core/lib/construct-compat.d.ts:62

Validate the current construct.

This method can be implemented by derived constructs in order to perform
validation logic. It is called on all constructs before synthesis.

**Returns:** *string[]*

An array of validation error messages, or an empty array if the construct is valid.

___

###  parseArn

▸ **parseArn**(`arn`: string, `sepIfToken?`: undefined | string, `hasName?`: undefined | false | true): *ArnComponents*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[parseArn](datadogintegrationstack.md#parsearn)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:382

Given an ARN, parses it and returns components.

If the ARN is a concrete string, it will be parsed and validated. The
separator (`sep`) will be set to '/' if the 6th component includes a '/',
in which case, `resource` will be set to the value before the '/' and
`resourceName` will be the rest. In case there is no '/', `resource` will
be set to the 6th components and `resourceName` will be set to the rest
of the string.

If the ARN includes tokens (or is a token), the ARN cannot be validated,
since we don't have the actual value yet at the time of this function
call. You will have to know the separator and the type of ARN. The
resulting `ArnComponents` object will contain tokens for the
subexpressions of the ARN, not string literals. In this case this
function cannot properly parse the complete final resourceName (path) out
of ARNs that use '/' to both separate the 'resource' from the
'resourceName' AND to subdivide the resourceName further. For example, in
S3 ARNs:

   arn:aws:s3:::my_corporate_bucket/path/to/exampleobject.png

After parsing the resourceName will not contain
'path/to/exampleobject.png' but simply 'path'. This is a limitation
because there is no slicing functionality in CloudFormation templates.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arn` | string | The ARN string to parse |
`sepIfToken?` | undefined &#124; string | The separator used to separate resource from resourceName |
`hasName?` | undefined &#124; false &#124; true | Whether there is a name component in the ARN at all. For example, SNS Topics ARNs have the 'resource' component contain the topic name, and no 'resourceName' component.  |

**Returns:** *ArnComponents*

an ArnComponents object which allows access to the various
components of the ARN.

___

### `Protected` prepare

▸ **prepare**(): *void*

*Inherited from [DatadogIntegration](datadogintegration.md).[prepare](datadogintegration.md#protected-prepare)*

Defined in node_modules/@aws-cdk/core/lib/construct-compat.d.ts:102

Perform final modifications before synthesis

This method can be implemented by derived constructs in order to perform
final changes before synthesis. prepare() will be called after child
constructs have been prepared.

This is an advanced framework feature. Only use this if you
understand the implications.

**Returns:** *void*

___

### `Protected` prepareCrossReference

▸ **prepareCrossReference**(`_sourceStack`: Stack, `reference`: Reference): *IResolvable*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[prepareCrossReference](datadogintegrationstack.md#protected-preparecrossreference)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:484

Deprecated.

**`see`** https://github.com/aws/aws-cdk/pull/7187

**`deprecated`** cross reference handling has been moved to `App.prepare()`.

**Parameters:**

Name | Type |
------ | ------ |
`_sourceStack` | Stack |
`reference` | Reference |

**Returns:** *IResolvable*

reference itself without any change

___

###  renameLogicalId

▸ **renameLogicalId**(`oldId`: string, `newId`: string): *void*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[renameLogicalId](datadogintegrationstack.md#renamelogicalid)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:263

Rename a generated logical identities

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

**Parameters:**

Name | Type |
------ | ------ |
`oldId` | string |
`newId` | string |

**Returns:** *void*

___

###  reportMissingContext

▸ **reportMissingContext**(`report`: MissingContext): *void*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[reportMissingContext](datadogintegrationstack.md#reportmissingcontext)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:256

Indicate that a context key was expected

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`report` | MissingContext | The set of parameters needed to obtain the context  |

**Returns:** *void*

___

###  resolve

▸ **resolve**(`obj`: any): *any*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[resolve](datadogintegrationstack.md#resolve)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:243

Resolve a tokenized value in the context of the current stack.

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *any*

___

### `Protected` synthesize

▸ **synthesize**(`session`: ISynthesisSession): *void*

*Inherited from [DatadogIntegration](datadogintegration.md).[synthesize](datadogintegration.md#protected-synthesize)*

Defined in node_modules/@aws-cdk/core/lib/construct-compat.d.ts:111

Allows this construct to emit artifacts into the cloud assembly during synthesis.

This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
as they participate in synthesizing the cloud assembly.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`session` | ISynthesisSession | The synthesis session.  |

**Returns:** *void*

___

###  toJsonString

▸ **toJsonString**(`obj`: any, `space?`: undefined | number): *string*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[toJsonString](datadogintegrationstack.md#tojsonstring)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:247

Convert an object, potentially containing tokens, to a JSON string

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |
`space?` | undefined &#124; number |

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [DatadogIntegration](datadogintegration.md).[toString](datadogintegration.md#tostring)*

Defined in node_modules/constructs/lib/construct.d.ts:237

Returns a string representation of this construct.

**Returns:** *string*

___

### `Protected` validate

▸ **validate**(): *string[]*

*Inherited from [DatadogIntegration](datadogintegration.md).[validate](datadogintegration.md#protected-validate)*

Defined in node_modules/@aws-cdk/core/lib/construct-compat.d.ts:91

Validate the current construct.

This method can be implemented by derived constructs in order to perform
validation logic. It is called on all constructs before synthesis.

**Returns:** *string[]*

An array of validation error messages, or an empty array if the construct is valid.

___

### `Static` isConstruct

▸ **isConstruct**(`x`: any): *x is Construct*

*Inherited from [DatadogIntegration](datadogintegration.md).[isConstruct](datadogintegration.md#static-isconstruct)*

Defined in node_modules/@aws-cdk/core/lib/construct-compat.d.ts:48

Return whether the given object is a Construct

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |

**Returns:** *x is Construct*

___

### `Static` isStack

▸ **isStack**(`x`: any): *x is Stack*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[isStack](datadogintegrationstack.md#static-isstack)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:117

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |

**Returns:** *x is Stack*

___

### `Static` of

▸ **of**(`construct`: IConstruct): *Stack*

*Inherited from [DatadogIntegrationStack](datadogintegrationstack.md).[of](datadogintegrationstack.md#static-of)*

Defined in node_modules/@aws-cdk/core/lib/stack.d.ts:122

Looks up the first stack scope in which `construct` is defined. Fails if there is no stack up the tree.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`construct` | IConstruct | The construct to start the search from.  |

**Returns:** *Stack*
