/**
 * Usage:
 *
 * Step 1: Somewhere in JS...
 *   import Alpine from "alpinejs";
 *   import spine from "./swiper";
 *   Alpine.data('swiper', swiper);
 *   Alpine.start();
 *
 * Step 2: Somewhere in markup...
 *   <div x-data="...swiper({
            slidesPerView:1,
            ...etc
            })}" />
 *
 * @returns {{init(): void, el: null, selector: null}}
 */

import Swiper from 'swiper';

// import 'swiper/swiper-bundle.min.css';
import {Pagination, Navigation, Manipulation} from 'swiper/modules';

// initialize any additional classes such as { Pagination }

export default (opts = {}) => ({

    options: {
        modules: [Navigation, Pagination, Manipulation],
        ...opts
    },
    swiper: null,
    
    init() {
        if (this.swiper !== null) {
            return;
        }
        let el = this.$refs.swiper ?? this.$el;
        this.swiper = new Swiper(el, this.options);
        this.swiper.init();

    }

});
