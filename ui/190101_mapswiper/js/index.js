var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } var MapApp = function () {



  var layer1 = new google.maps.FusionTablesLayer({
    query: {
      select: 'kml_4326',
      from: '420419',
      where: "name_0 IN ('China')"
    },
    styles: [{
      polygonOptions: {
        fillColor: '#37ebff',
        fillOpacity: 0.3,
        strokeColor: '#ffffff',
        strokeWeight: 0,
        strokeOpacity: 0.1
      }
    }]
  });

  var layer2 = new google.maps.FusionTablesLayer({
    query: {
      select: 'kml_4326',
      from: '420419',
      where: "name_0 IN ('United States of America')"
    },
    styles: [{
      polygonOptions: {
        fillColor: '#37ebff',
        fillOpacity: 0.3,
        strokeColor: '#ffffff',
        strokeWeight: 0,
        strokeOpacity: 0.1
      }
    }]
  });

  var layer3 = new google.maps.FusionTablesLayer({
    query: {
      select: 'kml_4326',
      from: '420419',
      where: "name_0 IN ('France')"
    },
    styles: [{
      polygonOptions: {
        fillColor: '#37ebff',
        fillOpacity: 0.3,
        strokeColor: '#ffffff',
        strokeWeight: 0,
        strokeOpacity: 0.1
      }
    }]
  });

  var layer4 = new google.maps.FusionTablesLayer({
    query: {
      select: 'kml_4326',
      from: '420419',
      where: "name_0 IN ('Russia')"
    },
    styles: [{
      polygonOptions: {
        fillColor: '#37ebff',
        fillOpacity: 0.3,
        strokeColor: '#ffffff',
        strokeWeight: 0,
        strokeOpacity: 0.1
      }
    }]
  });

  var layer5 = new google.maps.FusionTablesLayer({
    query: {
      select: 'kml_4326',
      from: '420419',
      where: "name_0 IN ('China')"
    },
    styles: [{
      polygonOptions: {
        fillColor: '#37ebff',
        fillOpacity: 0.3,
        strokeColor: '#ffffff',
        strokeWeight: 0,
        strokeOpacity: 0.1
      }
    }]
  });

  var layer6 = new google.maps.FusionTablesLayer({
    query: {
      select: 'kml_4326',
      from: '420419',
      where: "name_0 IN ('Japan')"
    },
    styles: [{
      polygonOptions: {
        fillColor: '#37ebff',
        fillOpacity: 0.3,
        strokeColor: '#ffffff',
        strokeWeight: 0,
        strokeOpacity: 0.1
      }
    }]
  });

  var layer7 = new google.maps.FusionTablesLayer({
    query: {
      select: 'kml_4326',
      from: '420419',
      where: "name_0 IN ('Australia')"
    },
    styles: [{
      polygonOptions: {
        fillColor: '#37ebff',
        fillOpacity: 0.3,
        strokeColor: '#ffffff',
        strokeWeight: 0,
        strokeOpacity: 0.1
      }
    }]
  });

  var layer8 = new google.maps.FusionTablesLayer({
    query: {
      select: 'kml_4326',
      from: '420419',
      where: "name_0 IN ('New Zealand')"
    },
    styles: [{
      polygonOptions: {
        fillColor: '#37ebff',
        fillOpacity: 0.3,
        strokeColor: '#ffffff',
        strokeWeight: 0,
        strokeOpacity: 0.1
      }
    }]
  });

  var activeLayers = [layer1,layer2,layer3,layer4,layer5,layer6,layer7,layer8];


  MapApp.activeLayers = [];
  MapApp.activeLayers.push(activeLayers);

  var placeIdx;
  var placeLeng = 7;


  function MapApp() {
    var _this = this; 
    _classCallCheck(this, MapApp); 

    this.currentIndex = 2; 
    this.zoom = 3.3; 
    this.places = [
       { latLng: new google.maps.LatLng(34.0522, -118.2437) },
       { latLng: new google.maps.LatLng(40.73061, -73.935242) },
       { latLng: new google.maps.LatLng(48.864716, 2.349014) },
       { latLng: new google.maps.LatLng(55.7558, 37.6173) },
       { latLng: new google.maps.LatLng(31.2304, 121.4737) },
       { latLng: new google.maps.LatLng(35.6895, 139.6917) },
       { latLng: new google.maps.LatLng(-33.865143, 151.2099) },
       { latLng: new google.maps.LatLng(-36.8485, 174.7633) }
      ];

    var element = document.body.querySelector(".map-holder");
    var options = {
      zoom: this.zoom,
      center: this.places[this.currentIndex].latLng,
      disableDefaultUI: true,
      styles: theme,
      backgroundColor: "none"

      // googleMaps JS
    }; 
    this.map = new google.maps.Map(element, options);

    // init setMap - 프랑스
    activeLayers[2].setMap(this.map);

    // nolimits4web/swiper
    this.swiper = new Swiper(document.body.querySelector(".swiper-container"), {
      initialSlide: this.currentIndex,
      effect: "coverflow",
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 55,
      clickable: true,
      speed: 700,
      parallax: true,
      coverflowEffect: {
        rotate: 25,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      on: {
        init: function () {
          /* do something */
          // activeLayers[1].setMap(this.map);
        },
      }
    });


    this.swiper.on("slideChange", function () { 
      _this.slideChange(_this.swiper); 
    });
    
    this.swiper.on("slideChangeTransitionStart", function () { 
      _this.slideChangeTransitionStart(_this.swiper); 
    });
    
    this.swiper.on("slideChangeTransitionEnd", function () { 
      _this.slideChangeTransitionEnd(_this.swiper); 
    });

    $('.place-box').on('click', function(){
      placeIdx = $(this).parent('div').index();
      _this.slideClick(_this.swiper);
    });

  }
    


// //after 700ms remove setting
// setTimeout(function(){
//   activeLayers[swiper.activeIndex].setMap(null);
// },700);

// //next Layer null setting
// activeLayers[swiper.activeIndex+1].setMap(null);
          

    _createClass(MapApp, [
      {
        key: "slideChange", value: function slideChange(swiper) {

          this.currentIndex = swiper.activeIndex;
          this.panTo(this.places[swiper.activeIndex].latLng);

          // console.log('change');
         //next Layer null setting

         if(swiper.activeIndex > 0){
          activeLayers[swiper.activeIndex-1].setMap(null);
         }

         if(swiper.activeIndex > 0 && swiper.activeIndex < placeLeng){
          activeLayers[swiper.activeIndex+1].setMap(null);
         }

        }
      },
      {
        key: "slideChangeTransitionStart", value: function slideChangeTransitionStart(swiper) {

          // console.log('start');
  
          // before active null setting
          // activeLayers[swiper.activeIndex-1].setMap(null);
          // activeLayers[swiper.activeIndex+1].setMap(null);

          // active setMap
          activeLayers[swiper.activeIndex].setMap(this.map);

        }
      },
      {
        key: "slideChangeTransitionEnd", value: function slideChangeTransitionEnd(swiper) {

          // console.log('end');
          // activeLayers[swiper.activeIndex-1].setMap(null);

        }
      },
      {
        key: "slideClick", value: function slideClick(swiper) {

          // console.log('click', placeIdx);
          if(placeIdx > 0){
            activeLayers[placeIdx-1].setMap(null);
          }

          if(placeIdx > 0 && placeIdx < placeLeng){
            activeLayers[placeIdx+1].setMap(null);
          }

          this.panTo(this.places[placeIdx].latLng);
          activeLayers[placeIdx].setMap(this.map);

          swiper.slideTo(placeIdx);


        }
      },
      {
        key: "panTo", value: function panTo(
          place) {
          this.map.panTo(place);

        }
      }
    ]); return MapApp;
}();

new MapApp();