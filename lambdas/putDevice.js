'use strict';

const AWS = require("aws-sdk");
var dynamodb = new AWS.DynamoDB();

module.exports.putDevice = async (event) =>{

    var params ={
      TableName: "devices",
      
      Item: {
        device_id: {S: "1"},
        details: {S: "Computer, T480"}, 
      },
    }
  

    dynamodb.putItem(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else{
         console.log(data);           // successful response
      }
    });

    
  
    return {
      statusCode: 200,
      evente:event,
      body: JSON.stringify({
      message: params,
       }, null, 2),
      };
  
  }