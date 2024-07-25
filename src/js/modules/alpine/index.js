import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse'
import swiper from "./parts/swiper";
import productswiper from "./parts/productswiper";
import testimonialswiper from './parts/testimonialswiper';
import glightbox from "./parts/glightbox";
 
Alpine.plugin(collapse);

// @TODO - Integrate AlpineJS with Swipers
Alpine.data("swiper", swiper);
Alpine.data("productswiper", productswiper);
Alpine.data("testimonialswiper", testimonialswiper);
Alpine.data("glightbox", glightbox);

window.Alpine = Alpine;
Alpine.start();