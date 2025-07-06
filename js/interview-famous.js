// interview-famous.js
document.addEventListener('DOMContentLoaded', function () {
const swiper = new Swiper('.interview-swiper', {
  direction: 'vertical',
  loop: true,
slidesPerView: 3,
spaceBetween: 10,
  speed: 300,
  navigation: {
      nextEl: '.interview-content .swiper-button-next',
      prevEl: '.interview-content .swiper-button-prev',
    },
});

});
