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
5. Select <b> Buckets <b> ![Step 3 of to S3](https://github.com/samuelroiz/AWS_Overview/blob/main/Images/Bucket/Upload/basic_steps_to_s3_buckets_step_3.png)
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
