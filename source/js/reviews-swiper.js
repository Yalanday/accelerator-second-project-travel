import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';


export const reviewsSwiper = new Swiper('.reviews__swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 1.19,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 1.6,
      spaceBetween: 120
    }
  },
  navigation: {
    nextEl: '.reviews__swiper-button-next',
    prevEl: '.reviews__swiper-button-prev',
  },

});
