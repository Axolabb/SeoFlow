


const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
      },
    breakpoints: {
        250: {
            slidesPerView: 1.2
        },
       850: {
            slidesPerView: 1.5,
        },
        1100: {
            slidesPerView: 3,
        }
        }
});

let inputs = document.querySelector('.form__number');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);