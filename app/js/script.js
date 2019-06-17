
    
    var swiper = new Swiper('.home .swiper-container', {
     
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


      
    var swiper = new Swiper('.news .swiper-container', {
      slidesPerView: 3,
      direction: 'horizontal',
      freeMode: true,
      freeModeSticky: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      mousewheel: {
          enable: true
      },
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
        },
       
    });

    var swiper = new Swiper('.media-press .swiper-container', {
      slidesPerView: 2.4,
      direction: 'horizontal',
      spaceBetween: 0,
      loopFillGroupWithBlank: true,
      freeMode: true,
      freeModeSticky: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      mousewheel: {
          enable: true
      },
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
        },
    });

    var swiper = new Swiper('.team .swiper-container', {
      slidesPerView: 3.5,
      direction: 'horizontal',
      spaceBetween: 30,
      // loop: true,
      loopFillGroupWithBlank: true,
      freeMode: true,
      freeModeSticky: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      mousewheel: {
          enable: true
      },
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
        },
    });