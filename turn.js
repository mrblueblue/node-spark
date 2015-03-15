

module.exports.red = function(err,device){ 
  device.callFunction('allLedsOn', 'red', function(err, data) {
    if (err) {
      console.log('An error occurred:', err);
    } else {
      console.log('red rum:', data);
    }
  });
};

module.exports.blue = function(err,device){ 
  device.callFunction('allLedsOn', 'blue', function(err, data) {
    if (err) {
      console.log('An error occurred:', err);
    } else {
      console.log('blue moon:', data);
    }
  });
};

module.exports.green = function(err,device){ 
  device.callFunction('allLedsOn', 'green', function(err, data) {
    if (err) {
      console.log('An error occurred:', err);
    } else {
      console.log('blue moon:', data);
    }
  });
};

module.exports.white = function(err,device){ 
  device.callFunction('allLedsOn', 'white', function(err, data) {
    if (err) {
      console.log('An error occurred:', err);
    } else {
      console.log('blue moon:', data);
    }
  });
};

module.exports.rainbow = function(err,device){
  device.callFunction('allLedsOn', 'rainbow', function(err, data) {
    if (err) {
      console.log('An error occurred:', err);
    } else {
      console.log('rainbow gathering:', data);
    }
  });
}

module.exports.off = function(err,device){
  device.callFunction('allLedsOff', 'off', function(err, data) {
    if (err) {
      console.log('An error occurred:', err);
    } else {
      console.log('off kilter:', data);
    }
  });
}

module.exports.shock = function(err,device){
  device.callFunction('shockBiff', 'shock', function(err, data) {
    if (err) {
      console.log('An error occurred:', err);
    } else {
      console.log('shock top:', data);
    }
  });
}
