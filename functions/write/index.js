console.log('starting function write');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region:'us-east-2'});

exports.handle = function(e, ctx, callback) {
  console.log('processing event: %j', e);
  console.log('e.body is: ', e.body);
  var params = {
    Item: {
      gameId:e.body.gameId,
      message: e.body
    },
    TableName: 'Match'
  };

  docClient.put(params,function(err,data) {
    if (err) {
      callback(err,null);
    }
    else {
      callback(null,data);
    }
  });

}
