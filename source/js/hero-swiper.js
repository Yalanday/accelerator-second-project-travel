import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


export const heroSwiper = new Swiper('.hero__swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.hero__swiper-pagination',
    clickable: true,
  },
});
