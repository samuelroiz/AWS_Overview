#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AllApps } from '../lib/all-apps';

const app = new cdk.App();
new AllApps(app, 'AllApps', {
});