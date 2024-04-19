import * as cdk from 'aws-cdk-lib';
import { MyCdkProjectStack } from '../lib/my-cdk-project-stack';
import { MetricFilterStack } from '../lib/metric-filter-stack';

const app = new cdk.App();
new MyCdkProjectStack(app, 'MyCdkProjectStack');
new MetricFilterStack(app, 'MetricFilterStack');