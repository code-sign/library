$( function() {
   
    $('#sortable').sortable({
      axis: 'y',
      containment: 'parent',
      animation: 200,
        start:function(event,list){
          list.item.addClass('move');
          sortingNumReset();
        },
        stop:function(event,list){
          list.item.removeClass('move');
          sortingNumReset();   
        },
        change: function(event,list){
          sortingNumReset(); 
        },
        update: function(event, list) { 
          updateIdx = list.item.index()+1;
          list.item.find('.num').text(updateIdx);
        }
      });
      $( "#sortable" ).disableSelection();
     
     
     
     //sortingNumReset
     function sortingNumReset(){
       $('#sortable > li').each(function(){
         var listIdx = $(this).index()+1;
         $(this).find('.num').text(listIdx);
       });
     }
     
     //up down control
      $('.sort_up').click(function(){
          var current = $(this).closest('li');
          current.prev().before(current);
          sortingNumReset();   
      });
     
      $('.sort_down').click(function(){
          var current = $(this).closest('li');
          current.next().after(current);
          sortingNumReset();
      });
     
     
    });