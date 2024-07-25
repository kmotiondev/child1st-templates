import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

export const initModals = () => {

    const lightbox = GLightbox({
        selector: '.glightbox',
        autoplayVideos: true,
        closeButton: true,
        videosWidth: '1200px',
        zoomable: false,
        openEffect: 'fade',
        closeEffect: 'fade',
        skin: 'clean'
    });
    
}