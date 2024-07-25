/**
 * Usage:
 *
 * Step 1: Somewhere in JS...
 *   import Alpine from "alpinejs";
 *   import headroom from "./gallery";
 *   Alpine.data('gallery', gallery);
 *   Alpine.start();
 *
 * Step 2: Somewhere in markup...
 *   <div x-data="gallery()" />
 *
 * @param selector
 * @returns {{init(): void, el: null, selector: null}}
 */

import Glightbox from 'glightbox';

export default () => ({

    lightbox: null,

    init() {
        this.lightbox = Glightbox({
            'width': '1280px',
            'height': '720px',
            'videosWidth': '1200px',
        });
    },

});