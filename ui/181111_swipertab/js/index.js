'use strict';

var $activeBar = $('#tabActiveBar');
var barW = 20; // barW，px
var btnW = 70; // btnW，px
var slideAmount = 10; // slideAmount

var colors = ['#04a5c1', '#f298e7', '#846ef4', '#f45509', '#cf396f', '#04a5c1', '#f298e7', '#846ef4', '#f45509', '#cf396f'];

$(document).ready(function () {
  var tabNavSwiper = new Swiper('.tab-nav', {
    slidesPerView: 'auto'
  });

  var tabContentSwiper = new Swiper('.tab-content', {
    onProgress: function onProgress(swiper, progress) {
      $activeBar.css('transition-duration', '0s');

      var slideFullProgress = 1 / (slideAmount - 1); // slideFullProgress
      var slideProgress = progress % slideFullProgress / slideFullProgress; // slideProgress[0,1]
      var willActiveIndex = Math.floor(progress / slideFullProgress); // willActiveIndex

      if (progress >= 0 && progress <= 1) {
        if (slideProgress <= 0.5) {
          $activeBar.css('width', barW + btnW * slideProgress * 2);
        } else {
          $activeBar.css({
            'left': btnW * willActiveIndex + btnW * (slideProgress - 0.5) * 2,
            'width': barW + btnW - btnW * (slideProgress - 0.5) * 2
          });
        }
      }
    },
    onSetTransition: function onSetTransition(swiper) {
      $activeBar.css('transition-duration', '0.25s');
      $activeBar.css({
        'left': btnW * swiper.activeIndex,
        'width': barW
      });
    },
    onSlideChangeStart: function onSlideChangeStart(swiper) {
      $('#tabNav .active').removeClass('active');
      $('#tabNav .swiper-slide[data-slide-index=' + swiper.activeIndex + ']').addClass('active');
      if (swiper.previousIndex < swiper.activeIndex) {
        tabNavSwiper.slideTo(swiper.activeIndex - 2);
      } else {
        tabNavSwiper.slideTo(swiper.activeIndex - 1);
      }
      $activeBar.css('background-color', colors[swiper.activeIndex]);
    }
  });

  $('#tabNav .swiper-slide').on('click', function (event) {
    tabContentSwiper.slideTo($(this).data('slide-index'));
  });
});

