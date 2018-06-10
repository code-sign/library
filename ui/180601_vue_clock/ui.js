  // songsvue render
  var songsvue = new Vue({
    el: '#app',
    data: {
      appTitle: 'Songs Clock',
      hour: '--',
      hourDeg: '0deg',
      mins: '--',
      minsDeg: '0deg',
      secs: '--',
      secsDeg: '0deg'
    },
    created(){
      this.updateClock();
    },
    methods: {
      updateClock(){
        var ctx = this;
        setInterval(function(){
          var date = new Date(), 
              hour = date.getHours(),
              min = date.getMinutes(),
              sec = date.getSeconds();
          
          // Set Display
          ctx.hour = (hour < 10) ? '0' + hour : hour;
          ctx.mins = (min < 10) ? '0' + min : min;
          ctx.secs = (sec < 10) ? '0' + sec : sec;
          
          // Set Analog
          var analogHour = (hour > 12) ? hour - 12 : hour,
              analogMins = min,
              analogSecs = sec;
          
          ctx.hourDeg = (analogHour * 30) + 'deg';
          ctx.minsDeg = (analogMins / 60 * 360) + 'deg';
          ctx.secsDeg = (analogSecs / 60 * 360) + 'deg';
        }, 1000);  
      } 
    }
  });