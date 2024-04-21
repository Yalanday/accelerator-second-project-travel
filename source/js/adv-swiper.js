import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import { WIDTH_DESKTOP } from './nav';

const advSection = document.querySelector('.adv');
const advSectionSwiper = advSection.querySelector('.adv__swiper');
const advSwiperWrapper = advSection.querySelector('.adv__swiper-wrapper');
const advSlides = advSection.querySelectorAll('.adv__swiper-slide');
let reloadWindow = '';

window.onresize = function () {

  if (document.documentElement.clientWidth >= WIDTH_DESKTOP) {
    reloadWindow = function () {
      location.reload();
    };
  } else if (document.documentElement.clientWidth < WIDTH_DESKTOP && typeof (reloadWindow) === 'function') {
    location.reload();
    reloadWindow = '';
  }
};

const displayWindowSize = () => {
  const width = document.documentElement.clientWidth;
  return width;
};

window.addEventListener('resize', (displayWindowSize, startSwiper));
displayWindowSize();
startSwiper();

function startSwiper() {
  if (displayWindowSize() >= WIDTH_DESKTOP) {
    advSectionSwiper.classList.add('swiper');
    advSwiperWrapper.classList.add('swiper-wrapper');
    advSlides.forEach((slide) => slide.classList.add('swiper-slide'));
    // eslint-disable-next-line no-unused-vars
    const advSwiper = new Swiper('.adv__swiper', {
      modules: [Navigation],
      breakpoints: {
        320: {
          enabled: false,
          direction: 'vertical',
          slidesPerView: 5,
          spaceBetween: 15,
        },
        768: {
          direction: 'horizontal',
          enabled: false,
          slidesPerView: 5,
        },
        1440: {
          direction: 'horizontal',
          enabled: true,
          slidesPerView: 3,
          initialSlide: 1,
          spaceBetween: 30
        }
      },
      navigation: {
        nextEl: '.adv__swiper-button-next',
        prevEl: '.adv__swiper-button-prev',
      },
    });
  }
}


