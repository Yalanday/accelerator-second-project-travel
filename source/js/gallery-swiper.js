import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';


export const gallerySwiper = new Swiper('.gallery__swiper', {
  modules: [Navigation],
  slidesPerView: 2,
  spaceBetween: 5,
  breakpoints: {
    320: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 5
    },
    768: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 5,
    },
    1440: {
      enabled: false,
      slidesPerView: 5,
      spaceBetween: 5
    }
  },
  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },

});
