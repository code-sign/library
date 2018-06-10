var swiper = new Swiper('.swiper-container.type1', {
    effect: 'coverflow',
    // freeMode: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 380,
        modifier: 1,
        slideShadows : true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    loop:true,
    spaceBetween: 30,
});



$('.img_box').on('click', function(e){
    var _thisBox = $(this);
    var thisImg = $(this).find('.img');
    var allImgBox = $('.img_box .img');

    if($(this).hasClass('active')){
        TweenMax.to(thisImg, .5, {width:'150px',height:'150px'} );
        setTimeout(function(){
            _thisBox.removeClass('active');
        },500);
        // $(this).removeClass('active');
        
    } else {
        TweenMax.to(allImgBox, .5, {width:'150px',height:'150px'} );
        TweenMax.to(thisImg, .5, {width:'100%',height:'300px'} );
        $(this).addClass('active').siblings('a').removeClass('active');
        
    }
    e.preventDefault();
    e.stopPropagation();
    
});



var navLi = $('.nav_mn > li');


$('#menuOpen').click(function(){
    TweenMax.staggerFrom(navLi, 0.5, {
    opacity:0,
    y:20,
    ease:Power2.easeInOut
    }, 0.2);

    TweenMax.fromTo('.nav_mn',0.5,{
    xPercent:-100},
        {xPercent:0, display:'block',ease: Power2.easeInOut}
    );

});





  // scroll event
  //기존 포지션 저장
  var topInfoH = $('.top_info').outerHeight();
  var dfPosR = 0;
  var proPosT = 40;
  var dfScale = 70;
  var dfFont = 30;
  var dfOpa1 = 1;
  var dfOpa0 = 0;
  var menuPosT = -20;


$(window).scroll(function(){
  var winSc = $(window).scrollTop();

  //일정 높이 까지만 실행
  if(winSc < 100){
    $('.top_info').css('height',topInfoH-winSc/1.4+'px');
    $('.df_ico').css('right',dfPosR+winSc/2+'px');
    $('.profile').css({
      'top':proPosT-winSc/1.9+'px',
      'width':dfScale-winSc/3.5+'px',
      'height':dfScale-winSc/3.5+'px',
      'right':dfPosR-winSc/5+'px'
    });

    $('.top_info .tit').css({
      'fontSize':dfFont-winSc/10+'px',
      'opacity': dfOpa1-winSc/70
    });

    $('.menu').css({
      'opacity':dfOpa0+winSc/100,
      'top':menuPosT+winSc/2.5
    });

  }

  if(winSc > 0){
    $('.top_info').addClass('fix');
  } else {
    $('.top_info').removeClass('fix');
  }

});