var circle = $('.circle');
var circleWid = circle.innerWidth();
var circleHid = circle.innerHeight();
var isMove = false;
var isCircle = false;
var tsX;
var tsY;
var teXm;
var teYm;


$(document).on('mousedown touchstart', function (e){
    isMove = true;

    if(e.type == 'mousedown'){
        tsX = Math.floor(e.pageX);
        tsY = Math.floor(e.pageY);
        // console.log('start pc',tsX,tsY);

    } else if(e.type == 'touchstart'){
        tsX = Math.floor(e.originalEvent.touches[0].pageX);
        tsY = Math.floor(e.originalEvent.touches[0].pageY);
        // console.log('start mobile',tsX,tsY);
    }


    $(document).on('mousemove touchmove', function (e){

        // console.log(e.type);

        if(isMove){
            if(e.type == 'mousemove'){
                var posX = Math.floor(e.pageX);
                var posY = Math.floor(e.pageY);
                // console.log('move pc',posX,posY);

            } else if(e.type == 'touchmove'){
                var posX = Math.floor(e.originalEvent.touches[0].pageX);
                var posY = Math.floor(e.originalEvent.touches[0].pageY);
                // console.log('move mobile',posX,posY);

                //save end pos
                teXm = posX;
                teYm = posY;
            }

            // Direction Check
            // start 기준
            // 1.상하, 좌우 차이가 큰 쪽 판단
            // 2.방향 판별

            // console.log(
            //     '상하:',Math.abs(tsY-posY),
            //     '좌우:',Math.abs(tsX-posX)
            // );

            var dirVer = Math.abs(tsY-posY);
            var dirHor = Math.abs(tsX-posX);

            if(dirVer > dirHor){
                // console.log('vetical');
                if(tsY > posY){
                    // console.log('up');
                } else {
                    // console.log('down');
                }
            } else if(dirVer < dirHor) {
                // console.log('horizon');
                if (tsX > posX){
                    // console.log('left');
                } else {
                    // console.log('right');
                }
            }

            if(isCircle){
                circle.css({
                    top:posY - circleWid/2,
                    left:posX - circleHid/2,
                    right:'inherit',
                    bottom:'inherit'
                });
            }


        }
      
    });
});

$(document).on('mouseup touchend', function (e){
    isMove = false;
    // console.log('end');

    if(e.type == 'mouseup'){
        var teX = Math.floor(e.pageX);
        var teY = Math.floor(e.pageY);
        // console.log('end pc',teX,teY);

    } else if(e.type == 'touchend'){
        // console.log('end mobile',teXm,teYm);
    }
});


// circle
circle.on('mousedown touchstart', function(){
    isCircle = true;
    circle.addClass('active');
});
circle.on('mouseup touchend', function(){
    isCircle = false;
    circle.removeClass('active');
});

