$(document).ready(function(){

    function nextTick(callback) {
        setTimeout(callback);
      }
      
      function CardZoomer({ context, overlay }, target, options) {
        const elements = typeof target === `string`
          ? context.querySelectorAll(target)
          : target;
        
        if (elements.length > 1) {
          return [].slice.call(elements).map(element => new CardZoomer(
            { context, overlay },
            element
          ));
        }
        
        this.context = context;
        this.element = elements[0] || elements;
        this.overlay = overlay;
        this.options = Object.assign({
          transitionDuration: 500,
        }, options);
        
        this.element.addEventListener('click', (e) => {
          e.preventDefault();
          
          if (e.target.classList.contains('card__close')) {
            this.zoomOut();
          } else {
            this.zoomIn();
          }
      
        });
        
        this.overlay.addEventListener('click', (e) => {
          e.preventDefault();
      
          this.zoomOut();
        });
      }
      
      CardZoomer.prototype.zoomIn = function() {
        if (this.element.classList.contains('is-zoomed')) return;
        console.log('zoom in');
        this.element.style.width = `${this.element.clientWidth}px`;
        this.element.style.height = `${this.element.clientHeight}px`;
        this.element.style.top = `${this.element.getBoundingClientRect().top}px`;
        this.element.style.left = `${this.element.getBoundingClientRect().left}px`;
        this.element.style.position = 'fixed';
      
        document.querySelector('body').style.overflow = 'hidden';
        this.overlay.classList.add('is-active');
        
        nextTick(() => {
          this.element.classList.add('is-zoomed');
        });

        $('.grid').css('overflow','hidden');

      };
      
      CardZoomer.prototype.zoomOut = function() {
        if (!this.element.classList.contains('is-zoomed')) return;
      
        this.element.classList.remove('is-zoomed');
      
        document.querySelector('body').style.overflow = 'visible';
        this.overlay.classList.remove('is-active');
        console.log(this.overlay);
        setTimeout(() => {
          this.element.style.width = 'auto';
          this.element.style.height = 'auto';
          this.element.style.top = 'auto';
          this.element.style.left = 'auto';
          this.element.style.position = 'static';
        }, this.options.transitionDuration);

        $('.grid').css('overflow','auto');

      };
      
      function cardZoomer(target, options) {
        return new CardZoomer({
          context: document,
          overlay: document.querySelector('.zoomer-overlay'),
        }, target, options);
      }
      
      cardZoomer('.card');
      
      
      
      
      // mobile close minheight 포지션 흔들림방지'
      var gridHeight = $('.grid > div').outerHeight();
      
      $(window).on('resize', function(){
        gridHeight = $('.grid > div').outerHeight();
      });
      $('.card').on('click', function(){
        $(this).parent('div').css('min-height',gridHeight+'px');
      })
      
      
      
      

});