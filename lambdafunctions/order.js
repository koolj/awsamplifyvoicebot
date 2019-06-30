let AWS = require('aws-sdk');
let docClient = new AWS.DynamoDB.DocumentClient();
exports.handler = async (event) => {
    
	var pdid = Math.floor(Math.random() * (999999999 - 1) + 1);
	var params = {
		TableName:"order2",
		Item:{
			"orid": pdid.toString(),
			"ordercontent": event.currentIntent.slots.nameTV,
			"ordertvsize": event.currentIntent.slots.sizeTV,
			"cuslocation": event.currentIntent.slots.Location,
			"cusphonenum": event.currentIntent.slots.phonetonumber,
			"customername": event.currentIntent.slots.customername
		}
		
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
           "content": "OK, Mr/Ms " +event.currentIntent.slots.customername+ ". Your order for: " + event.currentIntent.slots.nameTV + " has been confirmed! Including: " + event.currentIntent.slots.sizeTV + " inch, ship to " + event.currentIntent.slots.Location + ", phone number contact to: " +event.currentIntent.slots.phonetonumber +". Thank you for choosing our service"
        },    
     } 
    };

    return new Promise(function(resolve, reject) {
        docClient.put(params, function(err, data) {
            if (!err) {
                return resolve(lambda_response);
            } else {
                return resolve(console.log(err));
            }
        });

    })
   
};