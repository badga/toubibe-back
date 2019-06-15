'use strict';

const AWS = require("aws-sdk");
var dynamodb = new AWS.DynamoDB();

module.exports.putManagers = async (event) =>{

    var params ={
      TableName: "managers",
      
      Item: {
        manager_id: {S: "1"},
        employee_id: {S: "3"}, 
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
      body: JSON.stringify({
      message: params,
       }, null, 2),
      };
  
  }