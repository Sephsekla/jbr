import Prism from 'prismjs';

Prism.highlightAll();

setTimeout(() => {
    Prism.highlightAll();
}, 0);

import { magnificPopup } from 'magnific-popup';

$('.mfp-gallery').magnificPopup({
    type: 'image',
    items: [
        {
            src: 'http://jbr.local/wp-content/uploads/2020/02/optimisation-chrome-1.png'
        },
        {
            src: 'http://jbr.local/wp-content/uploads/2020/02/optimisation-chrome-2.png'
        }
    ],
    gallery: {
        enabled: true
    }
    // other options
  });