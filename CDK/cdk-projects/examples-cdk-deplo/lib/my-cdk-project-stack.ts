import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

// added for creating an EC2 instance
import * as ec2 from 'aws-cdk-lib/aws-ec2';

//added for creating an IAM Policy Document
import * as iam from 'aws-cdk-lib/aws-iam'

// added for creating a Log Group
import * as logs from 'aws-cdk-lib/aws-logs'

// added for creating cloudwatch metric
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';


export class MyCdkProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

        const logGroup = new logs.LogGroup(this, 'MyLogGroup', {
          logGroupName: '/aws/ec2/my-instance-logs',
          retention: logs.RetentionDays.ONE_WEEK, // Example retention policy
        });

        // Create an IAM Role for EC2 instances
        const ec2Role = new iam.Role(this, 'EC2Role', {
          assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
          description: 'An IAM role for EC2 instances to access AWS services',
        });

        // Attach the policy document to the role
        ec2Role.addToPolicy(
          new iam.PolicyStatement({
            actions: ['logs:CreateLogStream', 'logs:PutLogEvents'],
            resources: [
              logGroup.logGroupArn
            ],
          })
        );

        // Create a new VPC with default settings
        const vpc = new ec2.Vpc(this, 'MyVPC');

        // Define an EC2 Instance
        const myEC2Instance = new ec2.Instance(this, 'MyInstance', {
          vpc, // Use the VPC created above
          instanceType: new ec2.InstanceType('t2.micro'), // Instance type
          machineImage: new ec2.AmazonLinuxImage({ // AMI
            generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2,
          }),
          role: ec2Role, // Attach the IAM role here
        });

    // // Define a CloudWatch metric for EC2 CPU Utilization
        const cpuUtilizationMetric = new cloudwatch.Metric({
          namespace: 'AWS/EC2',
          metricName: 'CPUUtilization',
          dimensionsMap: {
            InstanceId: myEC2Instance.instanceId // Replace with your EC2 Instance ID
          },
          period: cdk.Duration.minutes(5),
          statistic: 'Average',
        });

      // // (Optional) Create a CloudWatch Alarm based on the CPU Utilization metric
        new cloudwatch.Alarm(this, 'CPUUtilizationAlarm', {
          metric: cpuUtilizationMetric,
          threshold: 80,
          evaluationPeriods: 2,
          datapointsToAlarm: 2,
          comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
          alarmDescription: 'Alarm when CPU utilization exceeds 80% for 10 minutes',
        });
  }
}

