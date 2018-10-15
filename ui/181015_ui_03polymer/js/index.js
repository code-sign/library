$(document).ready(function () {
  // document.querySelector('paper-icon-button')
  // .addEventListener('click', function() {
  // drawer.toggle();
  // });
  var navLi = $('.nav > li');
  $('paper-icon-button').on('click', function () {
    drawer.toggle();
    TweenMax.staggerFrom(navLi, 0.5, {
      opacity: 0,
      y: 20,
      ease: Power2.easeInOut
    }, 0.2);
    TweenMax.fromTo('.nav_mn', 0.5, {
      xPercent: -100
    }, {
      xPercent: 0,
      display: 'block',
      ease: Power2.easeInOut
    });
  });
});