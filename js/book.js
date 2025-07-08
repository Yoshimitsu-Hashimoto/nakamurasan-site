document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.bookshelf-swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      980: {
        slidesPerView: 3.5,
      },
      1024: {
        slidesPerView: 4,
      },
            1280: {
        slidesPerView: 6,
      },
    },
    speed: 10000,
    autoplay: {
      delay: 0,
    },
    // navigation: {
    //   nextEl: '.bookshelf-container .swiper-button-next',
    //   prevEl: '.bookshelf-container .swiper-button-prev',
    // },
  });
});
