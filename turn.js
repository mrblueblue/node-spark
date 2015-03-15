

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

var off = function(err,device){
  device.callFunction('allLedsOff', 'off', function(err, data) {
	  if (err) {
	    console.log('An error occurred:', err);
	  } else {
	    console.log('off kilter:', data);
	  }
	});
}

var rainbow = function(err,device){
  device.callFunction('rainbow', 'rainbow', function(err, data) {
	  if (err) {
	    console.log('An error occurred:', err);
	  } else {
	    console.log('rainbow gathering:', data);
	  }
	});
}




module.exports.red = red;
module.exports.blue = blue;
module.exports.off = off;