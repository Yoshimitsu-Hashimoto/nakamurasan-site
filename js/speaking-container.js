document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.speaking-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      980: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    speed: 800,
    navigation: {
      nextEl: '.speaking-container .swiper-button-next',
      prevEl: '.speaking-container .swiper-button-prev',
    },
  });
});
