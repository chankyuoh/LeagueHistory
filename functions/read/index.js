console.log('starting function read');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region:'us-east-2'});

exports.handle = function(e, ctx, callback) {
  console.log('starting function read inside exports handle');
  let scanningParameters = {
    TableName: 'Match',
    Limit: 100
  }
  docClient.scan(scanningParameters, function(err,data) {
    if (err) {
      callback(err,null);
    }
    else {
      callback(null,data);
    }
  });


  /*
  var params = {
    TableName: 'guestbook',
    Key: {
      "data":1497383210056
    }
  }

  docClient.get(params, function(err,data) {
    if (err) {
      callback(err,null);
    }
    else {
      callback(null,data);
    }
  });
  */
}
