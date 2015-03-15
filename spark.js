var spark = require('spark');
var turn = require('./turn.js')
var accessToken = process.env.ACCESS_TOKEN || '0fc47112a9191876ff0193170aaf3687b9a28557';
var deviceId = process.env.DEVICE_ID || '54ff6c066672524821281167';


spark.login({accessToken: accessToken}).then(
  function(token){
    console.log('API call completed on promise resolve: ', token);
  },
  function(err) {
    console.log('API call completed on promise fail: ', err);
  }
);

spark.getDevice(deviceId, turn.rainbow)


