'use strict';

const AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient();

module.exports.getDeviceByEmployee = async (event) =>{
  
    var result="";
    var params = {
      TableName : "devices",
      IndexName: "SecondIndex",
      KeyConditionExpression: "#empl = :nn",
      ExpressionAttributeNames:{
          "#empl": "employee_id"
      },
      ExpressionAttributeValues: {
          ":nn": event.queryStringParameters.employee_id
      },
      select: "ALL_ATTRIBUTES"
    };
    
    return new Promise(function(accept, reject) {
      docClient.query(params, function(err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        } else {
            console.log("Query succeeded.");
            data.Items.forEach(function(item) {
                console.log(" -", item.employee_id + ": " + item.device_id);
            });
            result =data;
        }
        accept({
          statusCode: 200,
          body: JSON.stringify({
          message: result,
          }, null, 2),
          });
    });
  });
  }