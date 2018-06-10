
/*
function animate1(){
	var wave = $('.water');
	TweenMax.from(wave, 3, {y:50, yoyo:true, repeat:-1, ease:Elastic.easeOut } );

}
animate1();
*/
$('.audio_area').css({opacity:0});
var isSel = false;
$('.play').on('click', function(){

	$('.play').toggleClass('on');
	$('.wave').toggleClass('on');

    if(isSel == false){
        isSel = true;
        $(this).animate({opacity:'0.7',marginTop:'20px'});
        $('.music_control .tit').animate({fontSize:'35px'});
        $('.waves').animate({bottom:'-80px'});
		//play trigger
		$('.play-pause').find('.play').trigger('click');

        console.log("aa");
    } else {
        isSel = false;
        $(this).animate({opacity:'1',marginTop:'0'});
        $('.music_control .tit').animate({fontSize:'25px'});
        $('.waves').animate({bottom:'-150px'});
		//play trigger
		$('.play-pause').find('.pause').trigger('click');
        console.log("bb");

    }
  
});