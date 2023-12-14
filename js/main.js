


const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.counter-right',
    prevEl: '.counter-left',
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    1070: {
      slidesPerView: 4,
      spaceBetween: 32
    }
    }
});

let inputs = document.querySelector('.form__number');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);