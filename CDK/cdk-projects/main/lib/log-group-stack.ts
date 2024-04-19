import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

// added for creating a Log Group
import * as logs from 'aws-cdk-lib/aws-logs'

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class LogGroupCreate extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
        const logGroup = new logs.LogGroup(this, 'EC2LogGroup', {
            logGroupName: '/aws/ec2/sunstone-dev-cdk-1-logs',
            retention: logs.RetentionDays.ONE_WEEK, // Example retention policy
        });
  }
}
