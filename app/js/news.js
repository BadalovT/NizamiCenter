
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        direction: 'horizontal',
        // spaceBetween: 30,
        // slidesPerGroup: 3,
        // loop: true,
        // loopFillGroupWithBlank: true,
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
