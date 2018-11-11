'use strict';

var $activeBar = $('#tabActiveBar');
var btnW = 70; // btnW，px
var slideAmount = 10; // slideAmount
var gutter = 10;

var activeTab = '';
var activeTabW = '';
var activeTabXpos = '';
var colors = ['#04a5c1', '#f298e7', '#846ef4', '#f45509', '#cf396f', '#04a5c1', '#f298e7', '#846ef4', '#f45509', '#cf396f'];

//init set
btnW = $('#tabNav .active').innerWidth();
$activeBar.css({
  'left': gutter,
  'width': btnW
});

var tabNavSwiper = new Swiper('.tab-nav', {
  slidesPerView: 'auto'
});

var tabContentSwiper = new Swiper('.tab-content', {
  speed:400,
  onProgress: function onProgress(swiper, progress) {
    var slideFullProgress = 1 / (slideAmount - 1); // slideFullProgress
    var slideProgress = progress % slideFullProgress / slideFullProgress; // slideProgress[0,1]
    var willActiveIndex = Math.floor(progress / slideFullProgress); // willActiveIndex

    if (progress > 0 && progress <= 1) {
      if (slideProgress <= 0.5) {
        $activeBar.css({
          'width': activeTabW + activeTabW * slideProgress * 2
        });
      } else {
        $activeBar.css({
          'left': gutter + activeTabW * willActiveIndex + activeTabW * (slideProgress - 0.5) * 2,
          'width': activeTabW + activeTabW - activeTabW * (slideProgress - 0.5) * 2
        });
      }
    }
  },
  onSlideChangeStart: function onSlideChangeStart(swiper) {
    $('#tabNav .active').removeClass('active');
    $('#tabNav .swiper-slide[data-slide-index=' + swiper.activeIndex + ']').addClass('active');

    // tabNavSwiper Auto Move
    if (swiper.previousIndex < swiper.activeIndex) {
      tabNavSwiper.slideTo(swiper.activeIndex - 2);
    } else {
      tabNavSwiper.slideTo(swiper.activeIndex - 1);
    }

    activeTab = $('#tabNav .swiper-slide[data-slide-index=' + swiper.activeIndex + ']');
    activeTabW = activeTab.innerWidth();
    activeTabXpos = activeTab.position().left;

    $activeBar.css({
      'background-color': colors[swiper.activeIndex],
      'width': activeTabW,
      'left': gutter + activeTabXpos
    });
  },

});

$('#tabNav .swiper-slide').on('click', function (event) {
  tabContentSwiper.slideTo($(this).data('slide-index'));
});

