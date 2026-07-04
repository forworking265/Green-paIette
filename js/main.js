const swiper = new Swiper('.reviews__slider', {

  slidesPerView: 2,

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 2,
        fill: 'row'
      },
      navigation: {
        nextEl: '.reviews__item-prev',
        prevEl: '.reviews__item-next',
      },
    loop: true, 
    spaceBetween: 22,
    },

    640: {
      slidesPerView: 2,
    }
  },


});

const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu--open')
});


const accordeonTitle = document.querySelectorAll('.accordeon__title');

accordeonTitle.forEach(item => {
  item.addEventListener('click', () => {

    const parent = item.parentNode;

    if (parent.classList.contains('accordeon__item--active')) {
      parent.classList.remove('accordeon__item--active')
    } else {

      accordeonTitle.forEach(element => {
        element.parentNode.classList.remove('accordeon__item--active')
      });

      parent.classList.add('accordeon__item--active')
    }

  })
});

