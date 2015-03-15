var spark = require('spark'),
    turn = require('./turn.js'),
    express = require('express'),
    cors = require('cors'),
    app = express(),
    server;

var accessToken = process.env.ACCESS_TOKEN,
    deviceId = process.env.DEVICE_ID;

spark.login({accessToken: accessToken}).then(
  function(token){
    console.log('API call completed on promise resolve: ', token);
  },
  function(err) {
    console.log('API call completed on promise fail: ', err);
  }
);

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

app.post('/*', function (req, res) {
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

server = app.listen(3000, function () {
  var ip = server.address().address
  var port = server.address().port
  console.log('I control the Spark Device')
  console.log("I am up and running on http://" + ip + ":" + port);
})




