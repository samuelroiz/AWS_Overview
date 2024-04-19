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

## To Run Security Hub

Inside package.json
```
"scripts": {
    "predeploy": "node scripts/enableSecurityHub.js",
    "deploy": "npm run build && cdk deploy --all",
    "full-deploy": "npm run predeploy && npm run deploy"
}
```

```npm run full-deploy```

### Lambda Function
The node 18 lambda runtime only supports the v3 SDK.
```npm install @aws-sdk/client-lambda```

```npm install @aws-sdk/client-securityhub```