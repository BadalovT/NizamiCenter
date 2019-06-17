
    
    var swiper = new Swiper('.swiper-container', {
     
        // effect: 'fade',
        direction: 'horizontal',
        slidesPerView: 1,
        freeMode: true,
        freeModeSticky: true,
        mousewheel: {
          enable: true,
      },

        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });
