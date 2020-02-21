import Prism from 'prismjs';

Prism.highlightAll(); // Hightlight all code with prismjs

setTimeout(() => {
    Prism.highlightAll();
}, 0);

import {
    magnificPopup
} from 'magnific-popup';

// We will loop through each item in the gallery linked to on a mfp-gallery link


$('.mfp-gallery').each(function () {

   let galleryLink = this; // Set this to galleryLink to avoid confusion later.

    console.log(galleryLink);

    const id = $(galleryLink).attr('href'); // Find the href from the id
    console.log(id);

    let imgs = [];

    $(id).find('img').each(function () {
        imgs.push(

            {
                src: $(this).attr('src')
            }

            // Add an object to the imgs array with the img src



        );
    });


    $(galleryLink).magnificPopup({ // Create an mfp instance for the image.
        type: 'image',
        items: imgs,
        gallery: {
            enabled: true
        }

    });

})