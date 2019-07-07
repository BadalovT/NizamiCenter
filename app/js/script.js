
    
    var swiper = new Swiper('.home .swiper-container', {
        direction: 'horizontal',
        slidesPerView: 1,
        effect:"fade",
        freeMode: true,
        freeModeSticky: true,
        autoplay:true,
      });

      var swiper = new Swiper('.leadersabout .swiper-container', {
        direction: 'horizontal',
        slidesPerView: 1,
        autoplay:true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });

    if(window.innerWidth > 768){
      var swiper = new Swiper('.news .swiper-container', {
        slidesPerView: 3,
        direction: 'horizontal',
        freeMode: true,
        autoWidth:true,
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
    }
      
    



    var swiper = new Swiper('.media-press .swiper-container', {
      slidesPerView: 2.6,
      direction: 'horizontal',
      freeMode: true,
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
      loopFillGroupWithBlank: true,
      freeMode: true,
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


    var swiper = new Swiper('.activity .swiper-container', {
      slidesPerView: 3,
      direction: 'horizontal',
      freeMode: true,
      autoWidth:true,
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
    var swiper = new Swiper('.leadersabout .swiper-container', {
      loop:true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


    var a = document.querySelectorAll('.carde-img-top');
    for(let x=0;x<a.length;x++){
      a[x].nextElementSibling.style.width=a[x].offsetWidth + "px";
    } 
    
      