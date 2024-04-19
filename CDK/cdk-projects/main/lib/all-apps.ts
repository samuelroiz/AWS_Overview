import * as cdk from 'aws-cdk-lib';
// import { Construct } from 'constructs';

import { EC2Create } from './ec2-host-stack';
import { MetricFilterStack } from './metric-filter-stack';
import { LogGroupCreate } from './log-group-stack';
// import { SecurityHubStack } from './services-stack';

export class AllApps extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
    
      const loggroupcreate = new LogGroupCreate(this, 'LogGroupCreate')
      const ec2create = new EC2Create(this, 'EC2Create');
      const metricFilter = new MetricFilterStack(this, 'MetricFilterStack');
      // const securityhubfindings = new SecurityHubStack(this, 'SecurityHubStack')
    }
  }