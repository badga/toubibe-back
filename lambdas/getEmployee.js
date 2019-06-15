'use strict';

const AWS = require("aws-sdk");
var dynamodb = new AWS.DynamoDB();

module.exports.getEmployee = async (event) =>{
  var result;
  var params = {
    Key: {
    "manager_id": {
      S: event.queryStringParameters.manager_id
      }, 
    },
    TableName: "managers"
  };

  return new Promise(function(accept, reject) {
    dynamodb.getItem(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else{    ;
        console.log(data);
        result = data.Item.employes_id;
      }           // successful response
      
      accept({
        statusCode: 200,
        body: JSON.stringify({
        message: result,
         }, null, 2),
        });
    });  
  });

}




