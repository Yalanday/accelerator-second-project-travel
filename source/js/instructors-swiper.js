import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';


export const instructorsSwiper = new Swiper('.instructors__swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      initialSlide: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
  navigation: {
    nextEl: '.instructors__swiper-button-next',
    prevEl: '.instructors__swiper-button-prev',
  },
});
