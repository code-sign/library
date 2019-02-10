
var interve = 5000;
var speed = 800;
var speed2 = 300;

function lineAnim(){
    $(".st13").velocity({ "stroke-dashoffset": 0, opacity:1 }, { duration: speed, delay: 200});
    $(".st11").velocity({ "stroke-dashoffset": 0, opacity:1 }, { duration: speed, delay: 600 });
    $(".st10").velocity({ "stroke-dashoffset": 0, opacity:1 }, { duration: speed, delay: 1000 });
    $(".st9").velocity({ "stroke-dashoffset": 0, opacity:1 }, { duration: speed, delay: 1400 });
    $(".st8").velocity({ "stroke-dashoffset": 0, opacity:1 }, { duration: speed2, delay: 1800 });
    $(".st7").velocity({ "stroke-dashoffset": 0, opacity:1 }, { duration: speed, delay: 2200 });
    $(".st6").velocity({ "stroke-dashoffset": 0, opacity:1 }, { duration: speed, delay: 2600 });
    $(".st5").velocity({ "stroke-dashoffset": 0, opacity:1 }, { duration: speed, delay: 3000 });
    $(".st4").velocity({ "stroke-dashoffset": 0, opacity:1 }, { duration: speed2, delay: 3400 });
    $(".st3").velocity({ "stroke-dashoffset": 0, opacity:1 }, { duration: speed, delay: 3800 });

    setTimeout(function(){
        $('path').velocity({
            'stroke-dashoffset':1000,
            'opacity':'.1'
        },{duration:speed});
    },4600)
}

lineAnim();

setInterval(function(){
    lineAnim();
},interve);

