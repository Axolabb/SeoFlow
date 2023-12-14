const head = document.querySelector('.header');
const main = document.querySelector('.main');
const burger = document.querySelector('.burger')
const burger_container = document.querySelector('.burger__container')
const burger_wrapper = document.querySelector('.burger__wrapper')
const burger_item = document.querySelector('.burger__nav-item')
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    head.classList.add('blur');
    main.classList.add('blur');
    body.style.overflowY = 'hidden';
    burger_wrapper.style.left = '0%'
});
burger_wrapper.addEventListener('click', () => {
    head.classList.remove('blur');
    main.classList.remove('blur');
    body.style.overflowY = 'visible';
    burger_wrapper.style.left = '100%'
})




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