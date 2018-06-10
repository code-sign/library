// $('.forms').on('focus', function(){
//   console.log('aaa');
//   $('#card').addClass('back');
// });

// $('.forms').on('blur', function(){
//   $('#card').removeClass('back');
// });
//  console.log('1');





 $('.input-cart-number').on('keyup change', function(){
  $t = $(this);
  
  if ($t.val().length > 3) {
    $t.next().focus();
  }
  
  var card_number = '';
  $('.input-cart-number').each(function(){
    card_number += $(this).val() + ' ';
    if ($(this).val().length == 4) {
      $(this).next().focus();
    }
  })
  
  $('#card .number').html(card_number);
});

$('#card-holder').on('keyup change', function(){
  $t = $(this);
  $('#card .card-holder div').html($t.val());
});

$('#card-holder').on('keyup change', function(){
  $t = $(this);
  $('#card .card-holder div').html($t.val());
});

$('#card-expiration-month, #card-expiration-year').change(function(){
  m = $('#card-expiration-month option').index($('#card-expiration-month option:selected'));
  m = (m < 10) ? '0' + m : m;
  y = $('#card-expiration-year').val().substr(2,2);
  $('.card-expiration-date div').html(m + '/' + y);
})

$('#card-ccv').on('focus', function(){
  $('#card').addClass('hover');
}).on('blur', function(){
  $('#card').removeClass('hover');
}).on('keyup change', function(){
  $('.ccv div').html($(this).val());
});


/*--------------------
CodePen Tile Preview
--------------------*/
setTimeout(function(){
  $('#card-ccv').focus().delay(1000).queue(function(){
    $(this).blur().dequeue();
  });
}, 500);

$('.color input').on('change', function(){
  colorIdx = $(this).val();
  console.log(colorIdx); 
  $('#card, .container').css('background-color',colorIdx);
  // $('#card').css('background-color',colorIdx);

});