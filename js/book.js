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
        slidesPerView: 5,
      },
    },
    speed: 9000,
    autoplay: {
      delay: 0,
    },

  });
});

// 表示数-1で自動スライドスタートします。それ以下にするとスライドしない。
