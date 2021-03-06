var $play = $('.play'),
    $detail  = $('.detail'),
    $card = $('.card', $detail),
    $close = $('.close');

$('.cardbox .card').click(function(){
  $card.html($(this).html());
  $play.appendTo($card);

  $poster = $('.poster', this).addClass('active');

  $('.poster', $detail).css({
    top: $poster.position().top,
    left: $poster.position().left,
    width: $poster.width(),
    height: $poster.height()
  }).data({
    top: $poster.position().top,
    left: $poster.position().left,
    width: $poster.width(),
    height: $poster.height()
  })

  $detail.show();

  $('.poster', $detail).delay(10).queue(function(next) {
    $detail.addClass('ready');

    next();
  }).delay(100).queue(function(next){
    $(this).css({
      top: '-5%',
      left: '-5%',
      width: 266,
      height: 400
    });
    next();
  })
})


/*--------------------
Close
--------------------*/
function close(){
  $p = $('.detail .poster');
  // console.log($p)
  $p.css({
    top: $p.data('top'),
    left: $p.data('left'),
    width: $p.data('width'),
    height: $p.data('height'),
  })
  $detail.removeClass('ready').delay(500).queue(function(next){
    $(this).hide();
    $poster.removeClass('active');
    next();
  });
}

$close.click(close);
$('body').click(function(e){
  $p = $(e.target).parents();
  if ($p.is('.container')){
    return false;
  } else {
    close();
  }
})


/*--------------------
CodePen Thumbnail
--------------------*/
// setTimeout(function(){
//   $('.card:eq(0)').click();
// }, 300);
// setTimeout(function(){
//   close();
// },1700);