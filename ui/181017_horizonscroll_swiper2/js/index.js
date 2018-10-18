
var gutter = 20;

// swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2.5,
    spaceBetween: gutter,
    freeMode: true,
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
    var isOpen = false;

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

    TweenMax.fromTo( e.find('.contbox'), 1, 
        {y:100, scale:.5, opacity:0},
        {y:0, scale:1, opacity:1}
     );

    $('.nano').nanoScroller(); //show nona scroll init!

    e.find('.close').show();
    $('.swiper-pagination').hide();

    swiper.mousewheel.disable();
    swiper.allowTouchMove = false;

    swWrapperLeft = $('.swiper-wrapper').offset().left;

    // console.log(swWrapperLeft);
}

// slideHide
function slideHide(e){
    isOpen = false;

    e.parent().find('.contbox').css('display','none');
    TweenMax.fromTo( e.parent().find('.contbox'), .5, 
        {y:0, scale:1, opacity:1},
        {y:-300, scale:.3, opacity:0}
     );

    $('.swiper-wrapper').css('transform','translate3d('+ swWrapperLeft +'px, 0, 0)');

    // close motion timeout remove
    setTimeout(function(){
        $('.sw_wrap').removeClass('widemotion');
    },400);

    $('body').removeClass('hidex');

    $('.close').hide();
    $('.swiper-pagination').show();

    swiper.mousewheel.enable();
    swiper.allowTouchMove = true;
    
}

// nanoscroll
$('.nano').nanoScroller();
