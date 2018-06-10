
 var $view = $('.view');
 var $circle = $('.circle');
 var $ripple = $('.ripple');

 $circle.click(function(){
   $('.nav').toggleClass('on');
   $('.ripple').toggleClass('off');
   
   setTimeout(function(){
            $('.circle').toggleClass('big');
   },300);
   
 });

