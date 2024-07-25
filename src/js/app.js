// Required for dev hot reload
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("HMR")
  });
}

import initShop from './modules/shop.js';
import { mobileMenu } from './modules/mobileMenu';
import { searchBar } from './modules/searchBar';
import { showAll } from './modules/showAll.js';
import { initModals } from './modules/modals.js';
import { faqsWithCats } from './modules/faqs.js';

// Ported to Alpine component - saving for later
// import { chips } from './modules/chips';
// chips();

mobileMenu();
searchBar();
initShop();
showAll();
initModals();
faqsWithCats();

import './modules/alpine/index';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import '../css/app.css';
import 'virtual:svg-icons-register';