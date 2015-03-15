var spark = require('spark'),
    turn = require('./turn.js'),
    express = require('express'),
    controller = express(),
    server;

var accessToken = process.env.ACCESS_TOKEN || '0fc47112a9191876ff0193170aaf3687b9a28557',
    deviceId = process.env.DEVICE_ID || '54ff6c066672524821281167';

spark.login({accessToken: accessToken}).then(
  function(token){
    console.log('API call completed on promise resolve: ', token);
  },
  function(err) {
    console.log('API call completed on promise fail: ', err);
  }
);

controller.get('/', function (req, res) {
  res.send('I control the Spark Device')
})

server = controller.listen(3000, function () {
  var ip = server.address().address
  var port = server.address().port
  console.log('I control the Spark Device')
  console.log("I am up and running on http://" + ip + ":" + port);
})




