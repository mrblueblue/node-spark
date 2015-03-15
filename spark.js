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

controller.use(express.static(__dirname + '/public'));
controller.use(express.static(__dirname + '/bower_components'));
// controller.get('/', function (req, res) {
//    res.status(200).sendfile('index.html')
// })

controller.post('/*', function (req, res) {

  var command = req.url.substring(1);
  var isValidFunction = turn.hasOwnProperty(command);

  if(isValidFunction) {
    spark.getDevice(deviceId, turn[command])
    res.status(201).send(command);
  } else {
    console.log('invalid command received');
    res.status(404).send('invalid command. try again');
  }
});

server = controller.listen(3000, function () {
  var ip = server.address().address
  var port = server.address().port
  console.log('I control the Spark Device')
  console.log("I am up and running on http://" + ip + ":" + port);
})




