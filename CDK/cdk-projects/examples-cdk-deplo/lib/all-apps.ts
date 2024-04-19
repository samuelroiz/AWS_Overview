import * as cdk from 'aws-cdk-lib';
// import { Construct } from 'constructs';

import { MyCdkProjectStack } from './my-cdk-project-stack';
import { MetricFilterStack } from './metric-filter-stack';

export class AllApps extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
  
    const ec2create = new MyCdkProjectStack(this, 'MyCdkProjectStack');
    const metricFilter = new MetricFilterStack(this, 'MetricFilterStack');
    }
  }