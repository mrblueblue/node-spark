
// Declare modules and set variables
var spark = require('spark'),
    turn = require('./turn.js'),
    express = require('express'),
    cors = require('cors'),
    app = express(),
    server;

// Declare authentication variables
var accessToken = process.env.ACCESS_TOKEN,
    deviceId = process.env.DEVICE_ID;

// Log into Spark
spark.login({accessToken: accessToken}).then(
  function (token){
    console.log('API call completed on promise resolve: ', token);
  },
  function (err){
    console.log('API call completed on promise fail: ', err);
  }
);

// Setup middleware for CORS and static content
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

// Setup request-handler for POST calls
app.post('/*', function (req, res){
  var command = req.url.substring(1);
  var isValidFunction = turn.hasOwnProperty(command);

  if(isValidFunction){
    console.log('valid command received');
    spark.getDevice(deviceId, turn[command]);
    res.status(201).send(command);
  } else {
    console.log('invalid command received');
    res.status(404).send('invalid command. try again');
  }
});

// Setup server on correct port
server = app.listen(3000, function(){
  var ip = server.address().address;
  var port = server.address().port;
  console.log('I control the Spark Device');
  console.log("I am up and running on http://" + ip + ":" + port);
})




