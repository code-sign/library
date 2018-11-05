$(document).ready(function(){

    var CardLeft, CardTop, CardWidth, CardHeight, Card, ScTop;

    // scrollBar check
    var body = $('body');
    var outerWidth = $(window).outerWidth();
    var innerWidth = $(window).innerWidth();
    var scrollWidth = outerWidth - innerWidth;
    var isScroll = outerWidth > innerWidth;

    $('.card-head').click(function() {
        Card = $(this).parents('.card');
        ScTop = $(window).scrollTop();

        if (!Card.hasClass('is-open')) {

            $('.is-open').scrollTop(0);
            
            CardLeft = Card.offset().left;
            CardTop = Card.offset().top - ScTop;
            CardWidth = Card.outerWidth();
            CardHeight = Card.outerHeight();

            // console.log(CardLeft,CardTop,CardWidth,CardHeight);

            Card.css({
                position:'fixed',
                zIndex: 3,
                left: CardLeft + 'px',
                top: CardTop + 'px',
                width: CardWidth + 'px',
                height: CardHeight + 'px'
                }).parents('.card-holder').css({
                height: CardHeight + 'px'
            });

            setTimeout(function(){
                Card.addClass('is-open');
                $('body').addClass('hidden');
                if(isScroll){
                    body.css({'paddingRight':scrollWidth+'px'});
                }
            }, 100);
        }
    });

    $('.close').click(function() {
        $('.card.is-open').removeClass('is-open')
        setTimeout(function(){
            Card.css({
            position:'relative',
            zIndex: 1,
            left: 'auto',
            top: 'auto',
            width: 'auto',
            height: 'auto'
            }).parents('.card-holder').removeAttr('style');
        }, 500);

        $('body').removeClass('hidden');
        if(isScroll){
            body.css({'paddingRight':0});
        }
    });

});