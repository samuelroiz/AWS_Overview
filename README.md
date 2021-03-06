# AWS_Overview
Overview and important notes on Amazon Web Services on how it works, references, tips, etc. 

## AWS Overview 
* [AWS General Reference](https://docs.aws.amazon.com/general/latest/gr/aws-general.pdf)
* [Overview of AWS White Paper](https://d0.awsstatic.com/whitepapers/aws-overview.pdf)

## AWS Certification
* [AWS Certified Cloud Practitioner (CLF-C01) Exam Guide](https://d1.awsstatic.com/training-and-certification/Docs%20-%20Cloud%20Practitioner/AWS%20Certified%20Cloud%20Practitioner_Exam_Guide_v1.4_FINAL.PDF)
* [AWS Certified Cloud Practitioner – Foundational (CLF-C01) Sample Exam Questions](https://d1.awsstatic.com/training-and-certification/Docs%20-%20Cloud%20Practitioner/AWS%20Certified%20Cloud%20Practioner_Sample%20Questions_v1.1_FINAL.PDF)
* [AWS Certified Solutions Architect – Associate (Released February 2018) SAA-C01 Exam Guide](https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS_Certified_Solutions_Architect_Associate_Feb_2018_%20Exam_Guide_v1.5.2.pdf)
* [AWS Solutions Architect – Associate (Released February 2018) (SAA-C01) Sample Exam Questions](https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS_Certified_Solutions%20Architect_Associate_Feb_2018_Sample%20Questions_v1.0.pdf)
* [AWS Certified Developer - Associate Level Exam Blueprint](http://awstrainingandcertification.s3.amazonaws.com/production/AWS_certified_developer_associate_blueprint.pdf)
* [AWS Certified Developer – Associate Sample Exam Questions](https://d1.awsstatic.com/training-and-certification/docs-dev-associate/AWS_certified_developer_associate_examsample.pdf)
* [AWS Certified SysOps Administrator - Associate Level Exam Blueprint](http://awstrainingandcertification.s3.amazonaws.com/production/AWS_certified_sysops_associate_blueprint.pdf)
* [AWS Certified SysOps Administrator – Associate Level Sample Exam Questions](https://d0.awsstatic.com/training-and-certification/docs/AWS_certified_sysops_associate_examsample.pdf)
## Business Case for AWS
* [Introduction to AWS Economics](https://d1.awsstatic.com/whitepapers/introduction-to-aws-cloud-economics-final.pdf)
* [The Business Value of AWS](https://d1.awsstatic.com/whitepapers/introduction-to-aws-cloud-economics-final.pdf)
* [How AWS Pricing Works](https://d1.awsstatic.com/whitepapers/aws_pricing_overview.pdf)
* [AWS Answers to Key Compliance Questions](https://d1.awsstatic.com/whitepapers/compliance/AWS_Answers_to_Key_Compliance_Questions.pdf)
* [Overview of Security Processes](https://d0.awsstatic.com/whitepapers/Security/AWS_Security_Whitepaper.pdf)

## Types of Storage Services
![Type of Storage Services](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/AWS_storage_list.png)
* [Simple Storage Service (S3)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)
* [Glacier](https://www.whizlabs.com/blog/what-is-amazon-glacier/#:~:text=Amazon%20Web%20Services%20Amazon%20Glacier%20is%20considered%20as,to%20archive%20storage%20for%20saving%20costs%20on%20storage.)
* [Elastic Block Store (ESB)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html)
* [Elastic File System (EFS)](https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html)

## Bucket's

### How to create a bucket? 
1. Go to home page
2. Find the search bar in top middle of the page
3. Type in <b> S3 </b>
4. Select <b> S3 </b>
5. Select <i> Create bucket </i>
6. Give unique name (a name not taken)
7. Select <i> US East (N. Virginia) us-east-1 </i> (some regions do not support all services)
8. Select <i> ACLs disabled </i> (Leave other settings as is since by default the bucket is private)
9. Select <i> Block all public access </i> (Leave settings as is since by default the bucket is private)
10. Select <i> Bucket Versioning disabled </i> (Leave settings as is since by default the bucket is private)
11. Select <i> Server-side encryption disabled </i> (Leave settings as is since by default the bucket is private)
12. Finally, select <i> Create Bucket </i>

#### w/ visualization
1. Go to home page ![Homepage](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Create/homepage_amazon.png)
2. Find the search bar in top middle of the page ![Step 1 of creating bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Create/create_bucket_in_S3_step_1.png)
3. Type in <b> S3 </b> 
4. Select <b> S3 </b> ![Step 2 of creating bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Create/create_bucket_in_S3_step_2.png)
5. Select <i> Create bucket </i> ![Step 3 of creating bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Create/create_bucket_in_S3_step_3.png)
6. Give unique name (a name not taken) ![Step 4 of creating bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Create/create_bucket_in_S3_step_4.png)
7. Select <i> US East (N. Virginia) us-east-1 </i> (some regions do not support all services) ![Step 5 of creating bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Create/create_bucket_in_S3_step_5.png)
8. Select <i> ACLs disabled </i> (Leave other settings as is since by default the bucket is private) ![Step 6 of creating bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Create/create_bucket_in_S3_step_6.png)
9. Select <i> Block all public access </i> (Leave settings as is since by default the bucket is private) ![Step 7 of creating bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Create/create_bucket_in_S3_step_7.png)
10. Select <i> Bucket Versioning disabled </i> (Leave settings as is since by default the bucket is private) ![Step 8 of creating bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Create/create_bucket_in_S3_step_8.png)
11. Select <i> Server-side encryption disabled </i> (Leave settings as is since by default the bucket is private) ![Step 9 of creating bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Create/create_bucket_in_S3_step_9.png)
12. Finally, select <i> Create Bucket </i> ![Step 10 of creating bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Create/create_bucket_in_S3_step_10.png)

### How to upload files to bucket?
1. Find the search bar in top middle of the page
2. Type in <b> S3 </b>
3. Select <b> S3 </b>
4. Select <b> Buckets </b>
5. Select bucket
6. Select <i> Upload </i>
7. Ways to upload files... One, drag a folder or files from local device to <b> S3 Management Console </b> screen. Two, select <i> Add files </i> / <i> Add folder </i> then select file(s) or folder to upload
8. Leave the other settings alone
9. Select <i> Upload </i>
10. Wait and check if files uploaded successfully
11. Select <i> Close </i>

#### w/ visualization
1. Go to home page ![Homepage](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Create/homepage_amazon.png)
2. Find the search bar in top middle of the page ![Step 1 of to S3](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Upload/basic_steps_to_s3_step_1.png)
3. Type in <b> S3 </b> 
4. Select <b> S3 </b> ![Step 2 of to S3](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Upload/basic_steps_to_s3_step_2.png)
5. Select <b> Buckets </b> ![Step 3 of to S3](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Upload/basic_steps_to_s3_buckets_step_3.png)
6. Select bucket ![Step 1 of upload files to bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Upload/upload_to_bucket_in_S3_step_1.png)
6. Select <i> Upload </i> ![Step 2 of upload files to bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Upload/upload_to_bucket_in_S3_step_2.png)
7. Ways to upload files... One, drag a folder or files from local device to <b> S3 Management Console </b> screen. Two, select <i> Add files </i> / <i> Add folder </i> then select file(s) or folder to upload ![Step 3 of upload files to bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Upload/upload_to_bucket_in_S3_step_3.png)
8. Leave the other settings alone
9. Select <i> Upload </i> ![Step 4 of upload files to bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Upload/upload_to_bucket_in_S3_step_4.png)
10. Wait and check if files uploaded successfully ![Step 5 of upload files to bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Upload/upload_to_bucket_in_S3_step_5.png)
11. Select <i> Close </i>

### How to download files from bucket? 
1. Find the search bar in top middle of the page
2. Type in <b> S3 </b> 
3. Select <b> S3 </b> 
4. Select <b> Buckets </b> 
5. Select <i> Bucket </i> 
6. Select <i> File </i> 
7. Select <i> Download </i> 

#### w/ visualization
1. Find the search bar in top middle of the page ![Step 1 to S3](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Download/basic_steps_to_s3_step_1.png)
2. Type in <b> S3 </b>
3. Select <b> S3 </b> ![Step 2 to S3](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Download/basic_steps_to_s3_step_2.png)
4. Select <b> Buckets </b> ![Step 3 of to S3](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Upload/basic_steps_to_s3_buckets_step_3.png)
5. Select <i> Bucket </i> ![Step 4 of to S3](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Upload/upload_to_bucket_in_S3_step_1.png)
6. Select <i> File </i> ![Step 1 of download files in S3](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Download/download_from_bucket_in_S3_step_1.png)
7. Select <i> Download </i> ![Step 2 of download files in S3](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Download/download_from_bucket_in_S3_step_2.png)

### How to delete bucket(s)? 
1. Find the search bar in top middle of the page
2. Type in <b> S3 </b>
3. Select <b> S3 </b>
4. Select <b> Buckets </b>
5. Select <i> Bucket(s) </i> circle icon
6. Select <i> Empty </i>
7. Type in "permanently delete"
8. Wait and check if files emptied successfully
9. Select <i> Exit </i>
10. Select <i> Bucket(s) </i> circle icon
11. Select <i> Delete </i>
12. Type in the name of the bucket 
13. Select <i> Delete bucket </i>

#### w/ visualization
1. Find the search bar in top middle of the page ![Step 1 to S3](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Delete/basic_steps_to_s3_step_1.png)
2. Type in <b> S3 </b>
3. Select <b> S3 </b> ![Step 2 to S3](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Delete/basic_steps_to_s3_step_2.png)
4. Select <b> Buckets </b> ![Step 3 to S3](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Delete/basic_steps_to_s3_buckets_step_3.png)
5. Select <i> Bucket(s) </i> circle icon ![Step 1 of delete bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Delete/delete_bucket_in_S3_step_1.png)
6. Select <i> Empty </i> ![Step 2 of delete bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Delete/delete_bucket_in_S3_step_2.png)
7. Type in "permanently delete"
8. Wait and check if files emptied successfully ![Step 3 of delete bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Delete/delete_bucket_in_S3_step_3.png)
9. Select <i> Exit </i> ![Step 4 of delete bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Delete/delete_bucket_in_S3_step_4.png)
10. Select <i> Bucket(s) </i> circle icon ![Step 5 of delete bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Delete/delete_bucket_in_S3_step_5.png)
11. Select <i> Delete </i> ![Step 6 of delete bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Delete/delete_bucket_in_S3_step_6.png)
12. Type in the name of the bucket ![Step 1 of delete bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Delete/delete_bucket_in_S3_step_7.png)
13. Select <i> Delete bucket </i> ![Step 1 of delete bucket](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Delete/delete_bucket_in_S3_step_8.png)

## Budget's

### How to set budget or control budget cost?
1. Select <b> Account Name </b> (top right corner) 
3. Scroll down until you see <b> Budgets </b>
4. Select <b> Budgets </b> 
5. Select <b> Create budget </b>
6. Select <i> Cost budget - Recommended </i> 
8. Input name of budget 
9. Select <i> Monthly </i> 
10. Select <i> Recurring budget </i> 
11. Leave <i> Start month </i> alone
12. Select <i> Fixed </i> 
13. Input budget amount 
14. Select <i> All AWS services (Recommended) </i> 
15. Select <b> Next </b>
16. Select <b> Add an alert threshold </b> 
17. Select <i> Threshold </i> 
18. Input email 
19. Select <b> Next </b>
20. Select <b> Next </b> 
21. Select <b> Create Budget </b> 

#### w/ visualization
1. Select <b> Account Name </b> (top right corner) ![Step 1 of setting up budget](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Budget/Set_Budget_Cost/set_budget_cost_step_1.png)
2. Select <i> Billing Dashboard </i> ![Step 2 of setting up budget](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Budget/Set_Budget_Cost/set_budget_cost_step_2.png)
3. Scroll down until you see <b> Budgets </b>
4. Select <b> Budgets </b> ![Step 4 of setting up budget](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Budget/Set_Budget_Cost/set_budget_cost_step_4.png)
5. Select <b> Create budget </b> ![Step 5 of setting up budget](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Budget/Set_Budget_Cost/set_budget_cost_step_5.png)
6. Select <i> Cost budget - Recommended </i> ![Step 6 of setting up budget](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Budget/Set_Budget_Cost/set_budget_cost_step_6.png)
7. Select <b> Next </b> ![Step 7 of setting up budget](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Budget/Set_Budget_Cost/set_budget_cost_step_7.png)
8. Input name of budget ![Step 8 of setting up budget](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Budget/Set_Budget_Cost/set_budget_cost_step_8.png)
9. Select <i> Monthly </i> ![Step 9 of setting up budget](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Budget/Set_Budget_Cost/set_budget_cost_step_9.png)
10. Select <i> Recurring budget </i> ![Step 10 of setting up budget](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Budget/Set_Budget_Cost/set_budget_cost_step_10.png)
11. Leave <i> Start month </i> alone
12. Select <i> Fixed </i> ![Step 12 of setting up budget](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Budget/Set_Budget_Cost/set_budget_cost_step_12.png)
13. Input budget amount ![Step 13 of setting up budget](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Budget/Set_Budget_Cost/set_budget_cost_step_13.png)
14. Select <i> All AWS services (Recommended) </i> ![Step 14 of setting up budget](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Budget/Set_Budget_Cost/set_budget_cost_step_14.png)
15. Select <b> Next </b> ![Step 15 of setting up budget](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Budget/Set_Budget_Cost/set_budget_cost_step_15.png)
16. Select <b> Add an alert threshold </b> ![Step 16 of setting up budget](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Budget/Set_Budget_Cost/set_budget_cost_step_16.png)
17. Select <i> Threshold </i> ![Step 17 of setting up budget](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Budget/Set_Budget_Cost/set_budget_cost_step_17.png)
18. Input email ![Step 18 of setting up budget](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Budget/Set_Budget_Cost/set_budget_cost_step_18.png)
19. Select <b> Next </b> ![Step 19 of setting up budget](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Budget/Set_Budget_Cost/set_budget_cost_step_19.png)
20. Select <b> Next </b> ![Step 20 of setting up budget](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Budget/Set_Budget_Cost/set_budget_cost_step_20.png)
21. Select <b> Create Budget </b> ![Step 21 of setting up budget](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Budget/Set_Budget_Cost/set_budget_cost_step_21.png)

## Security Group

### How to create a security group?
1.  Go to home page
2.  Find the search bar in top middle of the page
3.  Type in  **VPC**
4.  Select  **VPC**
5.  Select  _Security Groups_
6.  Select **Create security group**
7.  Input *Security group name*
8.  Input *Description*
9.  Ensure to select *Default for VPN* 
10. Select **Add rule**
11.  Click on *Custom TCP* 
12. Select *MYSQL/Aurora*
13. Click on *Custom*
14. Select *Anywhere-IPv4*
15. Select **Create security group**

#### w/ visualizations
1.  Go to home page ![Step 1 of setting up security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Security_Group/create_security_group_step_1.jpg)
2.  Find the search bar in top middle of the page ![Step 2 of setting up security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Security_Group/create_security_group_step_2_and_3.jpg)
3.  Type in  **VPC** ![Step 3 of setting up security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Security_Group/create_security_group_step_2_and_3.jpg)
4.  Select  **VPC** ![Step 4 of setting up security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Security_Group/create_security_group_step_4.jpg)
5.  Select  _Security Groups_ ![Step 5 of setting up security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Security_Group/create_security_group_step_5.jpg)
6.  Select **Create security group** ![Step 6 of setting up security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Security_Group/create_security_group_step_6.jpg)
7.  Input *Security group name* ![Step 7 of setting up security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Security_Group/create_security_group_step_7.jpg)
8.  Input *Description* ![Step 8 of setting up security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Security_Group/create_security_group_step_8.jpg)
9.  Ensure to select *Default for VPN* ![Step 9 of setting up security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Security_Group/create_security_group_step_9.jpg)
10. Select **Add rule** ![Step 10 of setting up security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Security_Group/create_security_group_step_10.jpg)
11.  Click on *Custom TCP* ![Step 11 of setting up security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Security_Group/create_security_group_step_11.jpg)
12. Select *MYSQL/Aurora* ![Step 12 of setting up security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Security_Group/create_security_group_step_12.jpg)
13. Click on *Custom* ![Step 13 of setting up security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Security_Group/create_security_group_step_13.jpg)
14. Select *Anywhere-IPv4* ![Step 14 of setting up security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Security_Group/create_security_group_step_14.jpg)
15. Select **Create security group** ![Step 15 of setting up security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Security_Group/create_security_group_step_15.jpg)

### How to delete Security Group?
1.  Find the search bar in top middle of the page
2.  Type in  **VPC**
3.  Select  **VPC**
4.  Select  _Security Groups_
5. Select *Security Group*
6. Select *Actions*
7. Select *Delete Security groups*
8. Select **Delete**

#### w/ visualizations
1.  Find the search bar in top middle of the page ![Step 1 of delete security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_delete_security_group/delete_security_group_step_1.jpg)
2.  Type in  **VPC** ![Step 2 of delete security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_delete_security_group/delete_security_group_step_2.jpg)
3.  Select  **VPC** ![Step 3 of delete security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_delete_security_group/delete_security_group_step_3.jpg)
4.  Select  _Security Groups_ ![Step 4 of delete security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_delete_security_group/delete_security_group_step_4.jpg)
5. Select *Security Group* ![Step 5 of delete security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_delete_security_group/delete_security_group_step_5.jpg)
6. Select *Actions* ![Step 6 of delete security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_delete_security_group/delete_security_group_step_6.jpg)
7. Select *Delete Security groups* ![Step 7 of delete security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_delete_security_group/delete_security_group_step_7.jpg)
8. Select **Delete** ![Step 8 of delete security group](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_delete_security_group/delete_security_group_step_8.jpg)

## Database

### How to create a database?
1.  Go to home page
2.  Find the search bar in top middle of the page
3.  Type in  **RDS**
4.  Select  **RDS**
5. Select **Create database**
6. Select *Standard create*
7. Select *MySQL*
8. Select *Free tier*
9. Input *database name*
10. Input *Master username* 
11.  Input *Master password*
12.  Leave *Instance configuration* alone
13. Unselect *Storage autoscaling* 
14. Select *Connectivity* default VPC
15. Leave *Subnet group* alone
16. Select *Yes* for Public Access
17. Select *Choose existing* for VPC security group
18. Select *VPC security group* (You created)
19. Select *Password authentication* for Database authentication 
20. Select *Additional configuration*
21. Input *Initial database name*
22. Unselect *Enable automated backups*
23. Select **Create database**

#### w/ visualizations
1.  Go to home page 
2.  Find the search bar in top middle of the page ![Step 1 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Security_Group/create_security_group_step_1.jpg)
3.  Type in  **RDS** ![Step 2 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_2.jpg)
4.  Select  **RDS** ![Step 3 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_3.jpg)
5. Select **Create database** ![Step 4 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_4.jpg)
6. Select *Standard create* ![Step 5 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_5.jpg)
7. Select *MySQL* ![Step 6 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_6.jpg)
8. Select *Free tier* ![Step 7 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_7.jpg)
9. Input *database name* ![Step 8 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_8.jpg)
10. Input *Master username* ![Step 9 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_9.jpg)
11.  Input *Master password* ![Step 10 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_10.jpg)
12.  Leave *Instance configuration* alone ![Step 11 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_11.jpg)
13. Unselect *Storage autoscaling* ![Step 12 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_12.jpg)
14. Select *Connectivity* default VPC ![Step 13 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_13.jpg)
15. Leave *Subnet group* alone ![Step 14 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_14.jpg)
16. Select *Yes* for Public Access ![Step 15 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_15.jpg)
17. Select *Choose existing* for VPC security group ![Step 16 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_16.jpg)
18. Select *VPC security group* (You created) ![Step 17 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_17.jpg)
19. Select *Password authentication* for Database authentication ![Step 18 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_18.jpg)
20. Select *Additional configuration* ![Step 19 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_19.jpg)
21. Input *Initial database name* ![Step 20 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_20.jpg)
22. Unselect *Enable automated backups* ![Step 21 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_21.jpg)
23. Select **Create database** ![Step 22 of creating a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Create_Database/create_database_step_22.jpg)

### How to connect Database?
1. Find the search bar in top middle of the page
2.  Type in  **Databases**
3.  Select  **Databases in RDS**
4. Select **Database**
5.  Get *Endpoint & port information*
6. Download **open source database**
7. Select **+**
8. Input *connection name*
9. Select *Standard*
10. Copy *End point* information from step 5
11.  Paste *End point* information
12. Input *username* (username you input in RDS database)
13. Select **Test connection**
14. Input *password*
15. If successful, select **Ok**. If unsuccessful, repeat **Create Security group** and **Create database** again
16. Select **Ok**

#### w/ visualizations
1.  Find the search bar in top middle of the page ![Step 1 of connecting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_connect_database/how_to_connect_database_step_1.jpg)
2.  Type in  **Databases**
3.  Select  **Databases in RDS** ![Step 3 of connecting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_connect_database/how_to_connect_database_step_2.jpg)
4. Select **Database** ![Step 4 of connecting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_connect_database/how_to_connect_database_step_4.jpg)
5.  Get *Endpoint & port information* ![Step 5 of connecting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_connect_database/how_to_connect_database_step_5.jpg)
6. Download **open source database** ![Step 6 of connecting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_connect_database/how_to_connect_database_step_6.jpg)
7. Select **+** ![Step 7 of connecting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_connect_database/how_to_connect_database_step_7.jpg)
8. Input *connection name* ![Step 8 of connecting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_connect_database/how_to_connect_database_step_8.jpg)
9. Select *Standard* ![Step 9 of connecting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_connect_database/how_to_connect_database_step_9.jpg)
10. Copy *End point* information from step 5 ![Step 10 of connecting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_connect_database/how_to_connect_database_step_10.jpg)
11.  Paste *End point* information ![Step 11 of connecting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_connect_database/how_to_connect_database_step_11.jpg)
12. Input *username* (username you input in RDS database) ![Step 12 of connecting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_connect_database/how_to_connect_database_step_12.jpg)
13. Select **Test connection** ![Step 13 of connecting a database]((https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_connect_database/how_to_connect_database_step_13.jpg)
14. Input *password* ![Step 14 of connecting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_connect_database/how_to_connect_database_step_14)
15. If successful, select **Ok**. If unsuccessful, repeat **Create Security group** and **Create database** again
16. Select **Ok** ![Step 16 of connecting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_connect_database/how_to_connect_database_step_16.jpg)

### How to delete database? 
1. Find the search bar in top middle of the page
2. Type in  **Databases**
3.  Select  **Databases in RDS**
4. Select *database icon*
5. Select *Actions*
6. Select Delete
7. Unselect *Create final snapshot?*
8. Select *I acknowledge..."
9. Input "delete me"
10.  Select **Delete**
11. Wait until you receive successful message

#### w/ visualizations
1. Find the search bar in top middle of the page ![Step 1 of deleting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_delete_database/how_to_delete_database_step_1.jpg)
2. Type in  **Databases** ![Step 2 of deleting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_delete_database/how_to_delete_database_step_2_and_3.jpg)
3.  Select  **Databases in RDS** ![Step 3 of deleting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_delete_database/how_to_delete_database_step_2_and_3.jpg)
4. Select *database icon* ![Step 4 of deleting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_delete_database/how_to_delete_database_step_4.jpg)
5. Select *Actions* ![Step 5 of deleting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_delete_database/how_to_delete_database_step_5.jpg)
6. Select Delete ![Step 6 of deleting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_delete_database/how_to_delete_database_step_6.jpg)
7. Unselect *Create final snapshot?* ![Step 7 of deleting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_delete_database/how_to_delete_database_step_7.jpg)
8. Select *I acknowledge..." ![Step 8 of deleting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_delete_database/how_to_delete_database_step_8.jpg)
9. Input "delete me" ![Step 9 of deleting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_delete_database/how_to_delete_database_step_9.jpg)
10.  Select **Delete** ![Step 10 of deleting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_delete_database/how_to_delete_database_step_10.jpg)
11. Wait until you receive successful message ![Step 11 of deleting a database](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/How_to_delete_database/how_to_delete_database_step_11.jpg)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/samuelroiz/1af49ec9eea365bc845ba04c5071a976) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Samuel Roiz** - *Author* - [GitHub](https://github.com/samuelroiz)

See also the list of [contributors](https://github.com/samuelroiz) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://gist.github.com/samuelroiz/1af49ec9eea365bc845ba04c5071a976) file for details

## Acknowledgments

* Backspace
* Backspace Udemy
* Sunstone Secure
* CSUN Mathematics

## Test Section

<details>
    <summary>CocoaPods</summary>
    Add the following line to your `Podfile`:
    
    ```ruby 
    pod 'YourAwesomeLibrary'
    ```
</details>
<details>
    <summary>Carthage</summary>
    Add the following line to your `Cartfile`:
    
    ```swift
    github "YourUsername/YourAwesomeLibrary"
    ```
</details>
<details>
    <summary>Manual</summary>
    Clone the repo and drag and drop the files into your project.
</details>
