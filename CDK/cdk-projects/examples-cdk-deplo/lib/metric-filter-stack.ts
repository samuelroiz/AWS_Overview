import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as logs from 'aws-cdk-lib/aws-logs';

export class MetricFilterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Reference an existing log group (replace 'MyLogGroup' with your log group name)
    // const logGroup = logs.LogGroup.fromLogGroupName(this, 'ExistingLogGroup', 'MyLogGroup');
    const logGroup = logs.LogGroup.fromLogGroupName(this, 'ExistingLogGroup', '/aws/ec2/my-instance-logs');


    // Create the metric filter for capturing "Failed authentication" events
    new logs.MetricFilter(this, 'FailedAuthMetricFilter', {
      logGroup,
      filterPattern: logs.FilterPattern.literal('"Failed authentication"'),
      metricNamespace: 'MyApplication',
      metricName: 'FailedAuthenticationAttempts',
      metricValue: '1',
    //   defaultValue: '0',
    });
  }
}
