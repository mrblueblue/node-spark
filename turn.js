

var red = function(err,device){ 
  device.callFunction('allLedsOn', 'red', function(err, data) {
	  if (err) {
	    console.log('An error occurred:', err);
	  } else {
	    console.log('Function called succesfully:', data);
	  }
	});
};

var blue = function(err,device){ 
  device.callFunction('allLedsOn', 'blue', function(err, data) {
	  if (err) {
	    console.log('An error occurred:', err);
	  } else {
	    console.log('Function called succesfully:', data);
	  }
	});
};

var off = function(err,device){
  device.callFunction('allLedsOff', 'off', function(err, data) {
	  if (err) {
	    console.log('An error occurred:', err);
	  } else {
	    console.log('Function called succesfully:', data);
	  }
	});
}


module.exports.red = red;
module.exports.blue = blue;
module.exports.off = off;