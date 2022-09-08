const swiper = new Swiper('.swiper', {
  loop: true,

  autoplay: {
    delay: 2000,
  },

  pagination: {
    el: '.swiper-pagination',
  },
});

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
