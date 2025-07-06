// interview-famous.js
document.addEventListener('DOMContentLoaded', function () {
const swiper = new Swiper('.interview-swiper', {
  direction: 'vertical',
  loop: true,
slidesPerView: 2.5,
spaceBetween: 10,
breakpoints: {
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  speed: 300,
  navigation: {
      nextEl: '.interview-content .swiper-button-next',
      prevEl: '.interview-content .swiper-button-prev',
    },
});

});
