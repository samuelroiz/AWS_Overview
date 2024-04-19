# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

## Create a Cloudwatch

1. Create a CloudWatch Alarm based on the CPU Utilization metric
    - Stack: <b>MyCdkProjectStack</b>

1. Create a CloudWatch metric filter to capture authentication failure logs from your EC2 instances. The filter would look for strings like "Failed authentication" in the log events.
    - Stack: <b>FailedAuthMetricFilterStack</b>
        - Deploys:
            1. Log for EC2: MyLogGroup
            2. Role for EC2: EC2Role
            3. Attaches a policy for EC2 Role
            4. VPC for EC2: MyVPC
            5. Instance for EC2: MyInstance
            6. CloudWatch metric for EC2 CPU Utilization: CPUUtilization 
            7. CloudWatch Alarm based on the CPU Utilization metric: CPUUtilizationAlarm




