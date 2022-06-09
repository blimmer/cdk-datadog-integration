import * as s3 from 'aws-cdk-lib/aws-s3';

export function bucketsToString(buckets?: s3.Bucket[]): string {
  if (!buckets) {
    return '';
  }

  return buckets.map((bucket) => bucket.bucketName).join(',');
}
