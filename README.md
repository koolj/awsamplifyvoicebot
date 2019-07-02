This is web-based voice bot chat for retailer/online shops project, was built on AWS Amplify + ReactJS + NodeJS

Video demo: https://www.youtube.com/watch?v=6NIfswU61Gc

Trial test (pls use FireFox - Chrome now having problem in authenticating audio with Lex): http://awsvoicebot-reactjs.s3-website-us-east-1.amazonaws.com/

(u/p = koolj@testerpro.org/123456789)

## PreInstall
You should have AWS IAM, CLI, Amplify, which have right to build AWS Amplify to push, update or publish, DynamoDB to read write, Lambda to execution, and S3 to deploy web app.

Of course you should have npm, node, react-app installed.

### Install local

Clone this git, then install run:
### `npm install`

Test on local:3000
### `npm start`

## Deploy to S3 
(account should have right to read/write/access/execute to AWS S3, Amplify, Lex post text and talk, Polly to talk, Lambda, Dynamodb, Cognito)
### `amplify publish`

----------------------------------------
## Intro
AWS Amplify + AWS Lex + AWS Dynamodb + AWS Lambda + AWS Cognito to build voice bot chat for retailer/online shops

This version for: timesheet checkins for shop workers, and booking/ordering products for shop customer.

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

----------------------------------------
## Solution by cases
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
- Use Cognito & Amplify to login
- Use Lex to have intent and action reply
- Use Lambda for DB queryig reply, and check double found checkin.
- User DynamoDB for storing records.
- Can be scaled with EC2 loadbalancing, and CDN for content delivery



Case3: 
- To automatically do booking/ordering product for customer. Example a Samsung TV one.

Solution:
- Use Cognito & Amplify to login
- Use Lex to have intent and action reply
- Use Lambda for DB queryig reply, and store order
- User DynamoDB for storing records
- Can be scaled with EC2 loadbalancing, and CDN for content delivery


Case4: Next version
- To automatically do analytics customer's complaint & analyze potential customers.

Solution:
- Use Java & AWS EC3 loadbalancing, to to build data crawlers (social network data), store data to DynamoDB/ Elastic Cache
- Use Lambda for DB queryig reply data for analytic questions
eg:
1. How many people like or dislike this product in day?
2. How many people/potential customers, who are they, which record said that they are potential?
3. Classify potential customer, return the ratio?


Any comments are appreciated.

KJ

TesterPRO.org/deepdata

testerpro.org/admincv
