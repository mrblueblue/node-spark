

var red = function(err,device){ 
  device.callFunction('allLedsOn', 'red', function(err, data) {
    if (err) {
      console.log('An error occurred:', err);
    } else {
      console.log('red rum:', data);
    }
  });
};

var blue = function(err,device){ 
  device.callFunction('allLedsOn', 'blue', function(err, data) {
    if (err) {
      console.log('An error occurred:', err);
    } else {
      console.log('blue moon:', data);
    }
  });
};

var green = function(err,device){ 
  device.callFunction('allLedsOn', 'green', function(err, data) {
    if (err) {
      console.log('An error occurred:', err);
    } else {
      console.log('blue moon:', data);
    }
  });
};

var white = function(err,device){ 
  device.callFunction('allLedsOn', 'white', function(err, data) {
    if (err) {
      console.log('An error occurred:', err);
    } else {
      console.log('blue moon:', data);
    }
  });
};

var rainbow = function(err,device){
  device.callFunction('allLedsOn', 'rainbow', function(err, data) {
    if (err) {
      console.log('An error occurred:', err);
    } else {
      console.log('rainbow gathering:', data);
    }
  });
}

var off = function(err,device){
  device.callFunction('allLedsOff', 'off', function(err, data) {
    if (err) {
      console.log('An error occurred:', err);
    } else {
      console.log('off kilter:', data);
    }
  });
}

module.exports.off = off;
module.exports.red = red;
module.exports.blue = blue;
module.exports.green = green;
module.exports.white = white;
module.exports.rainbow = rainbow;
