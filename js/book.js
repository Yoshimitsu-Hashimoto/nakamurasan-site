document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.bookshelf-swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      980: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
    speed: 8000,
    autoplay: {
      delay: 0,
    },
    navigation: {
      nextEl: '.bookshelf-container .swiper-button-next',
      prevEl: '.bookshelf-container .swiper-button-prev',
    },
  });
});
