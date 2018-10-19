
var gutter = 15;
var isOpen = false;

// swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1.3,
    spaceBetween: gutter,
    // freeMode: true,
    centeredSlides:true,
    pagination: {
    //   el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    loop:true
});


//  freemode scroll smooth by mousewheel
swiper.on('touchStart', function(){
    // console.log('move');
    $('.swiper-wrapper').removeClass('wheel');
});


$(window).on('mousewheel', function(){
    // console.log('scscsc');
    $('.swiper-wrapper').addClass('wheel');
});


// swiper event
$('.swiper-slide').each(function(){
    var allSlide = $('.swiper-slide');
    var winWid = $(window).outerWidth();
    var sldWid = allSlide.width();
    var speed = 1;
    var slideWid = sldWid+gutter;
    var swWrapper = $('.swiper-wrapper');
    var swWrapperLeft = ''

    $(this).on('click', function(){

        TweenMax.to( $(this), speed, { width:winWid } );
        
        // move left
        var thisIdx = $(this).index();
        $('.sw_wrap').addClass('widemotion');
        $('body').addClass('hidex');
        $('.swiper-wrapper').css('transform','translate3d('+ -slideWid*thisIdx +'px, 0, 0)');

        // TweenMax.to( swWrapper, speed, { left:-slideWid*thisIdx} );

        if(!isOpen){
            isOpen = true;
            slideShow($(this));
        }
    });

    $('.close').on('click', function(e){

        TweenMax.to( $(this).parent('.swiper-slide'), speed, { width:sldWid } );

        if(isOpen){
            isOpen = false;
            slideHide($(this));
        }

        e.stopPropagation();

    });
});

// resizing issue / 열려있다면 stop change width ... ?
$(window).on('resize', function(){
    console.log('zzzz');
    

});

// slideShow
function slideShow(e){

    // none block 트윈맥스로 사용시 nano scroll 안보이므로 css로 설정
    e.find('.contbox').css('display','block');

    TweenMax.fromTo( e.find('.contbox'), .6, 
        {y:100, scale:.8, opacity:0},
        {y:0, scale:1, opacity:1}
     );

    $('.nano').nanoScroller(); //show nona scroll init!

    e.find('.close').show();
    TweenMax.to(e.find('.close'), .5, {scale:1, opacity:1, delay:.5});

    $('.swiper-pagination').hide();

    swiper.mousewheel.disable();
    swiper.allowTouchMove = false;

    swWrapperLeft = $('.swiper-wrapper').offset().left;

    // console.log(swWrapperLeft);
}

// slideHide
function slideHide(e){
    isOpen = false;
    
    TweenMax.fromTo( e.parent().find('.contbox'), .4, 
        {y:0, opacity:1},
        {y:30, opacity:0}
     );

    $('.swiper-wrapper').css('transform','translate3d('+ swWrapperLeft +'px, 0, 0)');

    // close motion timeout remove
    setTimeout(function(){
        $('.sw_wrap').removeClass('widemotion');
        e.parent().find('.contbox').css('display','none');
    },400);

    $('body').removeClass('hidex');

    // $('.close').hide();
    TweenMax.to($('.close'), .5, {scale:0, opacity:0});
    $('.swiper-pagination').show();

    swiper.mousewheel.enable();
    swiper.allowTouchMove = true;
    
}

// nanoscroll
$('.nano').nanoScroller();
