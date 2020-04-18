import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import { bucketsToString } from "../lib/util";

describe("bucketsToString", () => {
  it("returns an empty string when no buckets are present", () => {
    expect(bucketsToString()).toEqual("");
  });
  it("returns the bucket name when one bucket it present", () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, "MyStack");
    const bucket = new s3.Bucket(stack, "MyBucket", {
      bucketName: "my-example-bucket-name",
    });

    expect(bucketsToString([bucket])).toEqual(bucket.bucketName);
  });
  it("concatenates bucket names with commas when multiple buckets are provided", () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, "MyStack");
    const bucket1 = new s3.Bucket(stack, "MyFirstBucket", {
      bucketName: "first-bucket",
    });
    const bucket2 = new s3.Bucket(stack, "MySecondBucket", {
      bucketName: "second-bucket",
    });

    expect(bucketsToString([bucket1, bucket2])).toEqual(
      `${bucket1.bucketName},${bucket2.bucketName}`
    );
  });
});
