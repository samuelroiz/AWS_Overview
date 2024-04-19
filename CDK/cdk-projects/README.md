# To start CDK:

In terminal: 
1. ``` aws configure ```
    * Fill out information
        * AWS Access Key ID
        * AWS Access Key ID
        * AWS Secret Access Key
2. ```cdk init app --language typescript```
3. ```npm install```

After this installs... you have options what to do...

- Log Group
    * Create Logs
        1. Terminal: ```npm install @aws-cdk/aws-logs```
        2. Copy and paste into __lib/{project}.ts__ at the top of the page:
        ```import * as logs from 'aws-cdk-lib/aws-logs'```
        3. Copy and paste into __lib/{project}.ts__ inside of the <b><i>class</i></b>:
        ``` 
        const logGroup = new logs.LogGroup(this, 'MyLogGroup', {
        logGroupName: '/aws/ec2/my-instance-logs',
        retention: logs.RetentionDays.ONE_WEEK, // Example retention policy
        }); 
        ```
    
    * Attach Log Group in a new [IAM Policy](#iampolicy)
        1. Terminal: ```npm install @aws-cdk/aws-iam```
        2. Copy and paste into __lib/{project}.ts__ at the top of the page:
        ```import * as iam from 'aws-cdk-lib/aws-iam';```
        3. Copy and paste into __lib/{project}.ts__ inside of the <b><i>class</i></b>:
        ```
        const logPolicyDocument = new iam.PolicyDocument({
        statements: [
            new iam.PolicyStatement({
            actions: ['logs:CreateLogStream', 'logs:PutLogEvents'],
            resources: [
                logGroup.logGroupArn, // Dynamically reference the Log Group's ARN
            ],
            }),
        ],
        });
        ```

    * Construct existing Log Group in AWS System
        1. Go in AWS and get its information on:
        <b>region, accountId, logGroupName, logGroupArn</b>
        2. Copy and paste into __lib/{project}.ts__ inside of the <b><i>class</i></b>:
        ```
        const region = 'us-east-1'; // Your AWS Region
        const accountId = '123456789012'; // Your AWS Account ID
        const logGroupName = '/aws/ec2/my-instance-logs'; // Your Log Group Name
        const logGroupArn = `arn:aws:logs:${region}:${accountId}:log-group:${logGroupName}:*`;
        ```
        3. To attach the constructed Log Group, example:
        ```
        const logPolicyDocument = new iam.PolicyDocument({
        statements: [
            new iam.PolicyStatement({
            actions: ['logs:CreateLogStream', 'logs:PutLogEvents'],
            resources: [logGroupArn],
            }),
        ],
        });
        ```

    * Use 'logName' to Reference the Existing Log Group
        1. Copy and paste into __lib/{project}.ts__ at the top of the page:
        ```import * as logs from 'aws-cdk-lib/aws-logs'```
        2. Copy and paste into __lib/{project}.ts__ inside of the <b><i>class</i></b>:
        ```
        const logGroup = logs.LogGroup.fromLogGroupName(this, 'ExistingLogGroup', '/aws/ec2/my-instance-logs'); 
        ```
        3. To attach the existing Log Group, example:
        ```
        const logPolicyDocument = new iam.PolicyDocument({
        statements: [
            new iam.PolicyStatement({
            actions: ['logs:CreateLogStream', 'logs:PutLogEvents'],
            resources: [logGroup.logGroupArn],
            }),
        ],
        });
        ```

- IAM Policy <a name="iampolicy"></a>
    * Create an IAM Policy
        1. Terminal: ```npm install @aws-cdk/aws-iam```
        2. Copy and paste into __lib/{project}.ts__ at the top of the page:
        ```import * as iam from 'aws-cdk-lib/aws-iam';```
        3. Copy and paste into __lib/{project}.ts__ inside of the <b><i>class</i></b>:
        ```
        const logPolicyDocument = new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              actions: ['logs:CreateLogStream', 'logs:PutLogEvents'],
              resources: [
                `arn:aws:logs:REGION:ACCOUNT_ID:log-group:/aws/ec2/my-instance-logs:*`,
            ],
            }),
          ],
        });
        ```
    
    * Using an [AWS-Managed Policy](#aws-managed-policy)
        1. Copy and paste into __lib/{project}.ts__ at the top of the page:
        ```import * as iam from 'aws-cdk-lib/aws-iam';```
        2. Copy and paste into __lib/{project}.ts__ inside of the <b><i>class</i></b>:
        ```
        const roleName = 'your-role-name'; // Define your role name
        const policyName = 'AmazonDynamoDBFullAccess'; // Example AWS-managed policy

        const role = iam.Role.fromRoleName(this, 'ExistingRole', roleName);
        role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName(policyName));
        ```
    
    * Attaching an <a name="aws-managed-policy">AWS-Managed Policy</a> to a New Role
        1. Copy and paste into __lib/{project}.ts__ at the top of the page:
        ```
        import * as iam from 'aws-cdk-lib/aws-iam';
        import { Stack, StackProps } from 'aws-cdk-lib';
        import { Construct } from 'constructs';
        ```
        2. Copy and paste into __lib/{project}.ts__ inside of the <b><i>class</i></b>:
        ```
        // Create a new IAM Role
        const role = new iam.Role(this, 'MyRole', {
        assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'), // Example service principal
        // Additional configuration...
        });

        // Attach an AWS-managed policy to the role
        const policyName = 'AmazonDynamoDBFullAccess'; // Example AWS-managed policy
        role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName(policyName));
        ```
    
    * Using a [Customer-Managed Policy](#aws-customer-managed-policy)
        1. Copy and paste into __lib/{project}.ts__ at the top of the page:
        ```import * as iam from 'aws-cdk-lib/aws-iam';```
        2. Copy and paste into __lib/{project}.ts__ inside of the <b><i>class</i></b>:
        ```
        const roleName = 'your-role-name'; // Define your role name
        const policyArn = 'arn:aws:iam::account-id:policy/policy-name'; // ARN of your existing policy

        const role = iam.Role.fromRoleName(this, 'ExistingRole', roleName);
        role.attachInlinePolicy(iam.Policy.fromPolicyArn(this, 'ExistingPolicy', policyArn));
        ```
    
    * Attaching a <a name="aws-customer-managed-policy">Customer-Managed Policy</a> to a New Role
        1. Copy and paste into __lib/{project}.ts__ at the top of the page:
        ```
        import * as iam from 'aws-cdk-lib/aws-iam';
        import { Stack, StackProps } from 'aws-cdk-lib';
        import { Construct } from 'constructs';
        ```
        2. Copy and paste into __lib/{project}.ts__ inside of the <b><i>class</i></b>:
        ```
        // Create a new IAM Role
        const role = new iam.Role(this, 'MyRole', {
        assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'), // Example service principal
        // Additional configuration...
        });

        // Attach a customer-managed policy to the role
        const policyArn = 'arn:aws:iam::account-id:policy/policy-name'; // ARN of your existing policy
        role.attachInlinePolicy(iam.Policy.fromPolicyArn(this, 'MyPolicy', policyArn));
        ```

- [EC2](#ec2)
    * Create an EC2 using CDK
        1. Terminal: ```npm install aws-cdk-lib constructs```
        2. Copy and paste into __lib/{project}.ts__ at the top of the page:
        ```import * as ec2 from 'aws-cdk-lib/aws-ec2';```
        3. Terminal: ```cdk bootstrap```
        4. Terminal: ```cdk deploy```
        5. Terminal: ```y```


- Cloudwatch
    * Create a CloudWatch metric filter to capture authentication failure logs from your <a name="ec2">EC2</a> instances. The filter would look for strings like "Failed authentication" in the log events.

    1. Terminal: ```npm install @aws-cdk/aws-logs```
    2. Terminal: ```npm install @aws-cdk/aws-cloudwatch```
    3. Open your CDK stack file (located in the lib directory of your CDK project, usually named after your project). Here, you will define the CloudWatch Logs Metric Filter.
    4. Copy: 
        ```
        import * as logs from '@aws-cdk/aws-logs'; 
        import * as cdk from '@aws-cdk/core';
        ```
    5. Paste inside __cdk-stack.ts__ to import the required modules at the top of your stack file
    6. Define the Log Group that your EC2 instances are using to store logs. If you haven't already created a log group in CDK or CloudWatch Logs, you will need to do so.


## Welcome to your CDK TypeScript project

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




