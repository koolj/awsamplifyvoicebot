This project was built on AWS Amplify + ReactJS

Demo: https://www.youtube.com/watch?v=6NIfswU61Gc

Trial test: http://awsvoicebot-reactjs.s3-website-us-east-1.amazonaws.com/

(u/p = koolj@testerpro.org/123456789)

## PreInstall
You should have AWS IAM, CLI, which have right to build AWS Amplify, DynamoDB read write, Lambda execution, and S3 deploy web

### Install local

Clone and install run:
### `npm install`

Test on local:3000
### `npm start`

## Deploy to S3
### `amplify publish`

----------------------------------------
## Intro
AWS Amplify + AWS Lex + AWS Dynamodb + AWS Lambda + AWS Cognito to build voice bot chat for retailer/online shops

This version for: timesheet checkins for shop workers, and booking/ordering products.

Next version for: analytic customer's need, report administrative tasks

## Technologies:
- AWS Amplify + ReactJS + NodeJS to build webbased app
- AWS Lex to build bot chat for: timesheet checkin for shop worker, and booking product order
- AWS Dynamodb to store order, reports, and timesheet checkin records
- AWS Lambda to action to reply what human said
- AWS Cognito for user pool
- AWS S3 for hosting
- AWS EC2 for loadbalancing
- AWS CDN for content delivery



Case1:
There are so many small, and online retail shops, that they need some kind of voice bot chat to:
- automatic reply timesheet checkin for worker
- next: automatic reply reports for managers
- automatic order/booking product for customers
- next: automatic gathering customer's claim/complaint

Solution:
- Here come bookworm aws chat bot



Case2: 
- To automatically do timesheet checkins for workers

Solution:
- Use Lex to have intent and action reply
- Use Lambda for DB queryig reply, and check double found checkin.
- User DynamoDB for storing records.
- Can be scaled with EC2 loadbalancing, and CDN for content delivery



Case3: 
- To automatically do booking/ordering product for customer. Example a Samsung TV one.

Solution:
- Use Lex to have intent and action reply
- Use Lambda for DB queryig reply, and store order
- User DynamoDB for storing records
- Can be scaled with EC2 loadbalancing, and CDN for content delivery


Case4: Next version
- To automatically do analytics customer's complaint & analyze potential customers.

Solution:
- Use Java & AWS EC3 to to build data crawlers, store data to DynamoDB
- Use Lambda for DB queryig reply data for analytic questions
eg:
1. How many people like or dislike this product
2. How many people/potential customers, who are they, which record said that they are potential?


Any comments are appreciated.

KJ

testerpro.org/admincv
