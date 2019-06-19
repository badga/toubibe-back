'use strict';

const AWS = require("aws-sdk");



var dynamodb = new AWS.DynamoDB();


module.exports.putTable = async (event) =>{

  var result;
 /* const { id } = event.queryStringParameters;
  const { type } = event.queryStringParameters;
  var params ={
    TableName: "dynamodbDevices",
    Item: {
      'id' : {S: id }, 
      'type' : {S: type}
    }
  }

  dynamodb.putItem(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else{
      
       console.log(data);           // successful response
       result = data
    }
  });
*/
 // const data = JSON.parse(event.body.message);
  return {
    headers: { 'Content-Type': 'application/json'},
    statusCode: 200,
    body: JSON.stringify({
    message: event.body,
     }, null, 2),
    };

}