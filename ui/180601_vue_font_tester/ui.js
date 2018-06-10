  // songsvue render
  var songsvue = new Vue({
    el: '#app',
    data: {
      moveSize:40,
      count:0,
      letterSpacing:0,
      fontType:'',
      fontOpacity:1,
      renderTxt:'안녕'
    },
    methods:{
          addCnt: function(){
              return this.moveSize++;
          },
          dscCnt: function(){
              return this.moveSize--;
          }
      }
  })