let AWS = require('aws-sdk');
let docClient = new AWS.DynamoDB.DocumentClient();
exports.handler = async (event) => {
    
	
	var params = {
		TableName:"timesheet2",
		Item:{
			"tsid": event.currentIntent.slots.ID
		},
		ConditionExpression : "#i <> :val",
		ExpressionAttributeNames: {"#i" : "tsid"},
        ExpressionAttributeValues: {":val" : event.currentIntent.slots.ID}
		
	}
   let lambda_response = {     
   "sessionAttributes": {
      "amount":  event.currentIntent.slots.ID
    },   
    "dialogAction": {     
        "type": "Close",
        "fulfillmentState": "Fulfilled",
        "message": {       
           "contentType": "PlainText",
           "content": "Your ID is " + event.currentIntent.slots.ID + " has been confirmed!"
        },    
     } 
    };
    
	
   let lambda_response_failed = {     
   "sessionAttributes": {
      "amount":  event.currentIntent.slots.ID
    },   
    "dialogAction": {     
        "type": "Close",
        "fulfillmentState": "Fulfilled",
        "message": {       
           "contentType": "PlainText",
           "content": "Not Correct! This ID " + event.currentIntent.slots.ID + " has submitted before! Try another one."
        },    
     } 
    };
    return new Promise(function(resolve, reject) {
        docClient.put(params, function(err, data) {
            if (!err) {
                //console.log("Added item:", JSON.stringify(data, null, 2));
                //return lambda_response;
                return resolve(lambda_response);
            } else {
                //console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
                //return lambda_response_failed;
                return resolve(lambda_response_failed);
            }
        });

    })
   
};