// import * as lambda from 'aws-cdk-lib/aws-lambda';
// // import * as iam from 'aws-cdk-lib/aws-iam';
// import * as path from 'path';
// import { Construct } from 'constructs';
// import { Stack, StackProps } from 'aws-cdk-lib';

// export class SecurityHubStack extends Stack {
//   constructor(scope: Construct, id: string, props?: StackProps) {
//     super(scope, id, props);

//     new lambda.Function(this, 'SecurityHubFunction', {
//         runtime: lambda.Runtime.NODEJS_18_X, // Updated for Node.js 18.x
//         handler: 'index.handler',
//         code: lambda.Code.fromAsset(path.join(__dirname, '../scripts/lambda')),
//         environment: {
//           AWS_REGION: Stack.of(this).region,
//         },
//       });

//   }
// }