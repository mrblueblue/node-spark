var url = 'http://localhost:3000/'

$('.red').on('click', function(){
  $.ajax({
    type: 'POST',
    url: url + 'red',
    success: function(){
      console.log('red')
    },
    error: function(){
      console.log('fail')
    }
  });
});

$('.blue').on('click', function(){
  $.ajax({
    type: 'POST',
    url: url + 'blue',
    success: function(){
      console.log('blue')
    },
    error: function(){
      console.log('fail')
    }
  });
});

$('.green').on('click', function(){
  $.ajax({
    type: 'POST',
    url: url + 'green',
    success: function(){
      console.log('green')
    },
    error: function(){
      console.log('fail')
    }
  });
});

$('.white').on('click', function(){
  $.ajax({
    type: 'POST',
    url: url + 'white',
    success: function(){
      console.log('white')
    },
    error: function(){
      console.log('fail')
    }
  });
});

$('.rainbow').on('click', function(){
  $.ajax({
    type: 'POST',
    url: url + 'rainbow',
    success: function(){
      console.log('rainbow')
    },
    error: function(){
      console.log('fail')
    }
  });
});

$('#off').on('click', function(){
  $.ajax({
    type: 'POST',
    url: url + 'off',
    success: function(){
      console.log('off')
    },
    error: function(){
      console.log('fail')
    }
  });
});

$('#shock').on('click', function(){
  $.ajax({
    type: 'POST',
    url: url + 'shock',
    success: function(){
      console.log('shocker')
    },
    error: function(){
      console.log('fail')
    }
  });
});