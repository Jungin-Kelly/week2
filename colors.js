var Links = {
    setColor:function (color) {
    $('a').css('color',color);
    }    
  }

  var Body = {
    setColor:function (color) {
    //   document.querySelector('body').style.color = color;
    $('body').css('color',color);
    } ,  
    setBackgroundColor: function (color){
    $('body').css('bakcGroundcolor',color);
    }
  }
  function nightDayHandler(self){
    var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

  Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('white');
    self.value = 'night';

    Links.setColor('blue'); 
  }
  }