import {
    magnificPopup
} from 'magnific-popup';


/**
 *  Create setup for individual gallery
 *
 * @param {*} galleryLink jQuery object (link that a user will click for the gallery)
 */
function prepareGallery(galleryLink) {

    const id = $(galleryLink).attr('href'); // Find the href from the id

    let imgs = [];

    $(id).find('img').each(function () { // Loop through each image inside the linked container
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

}


/**
 * Add gallery popup functionality
 */
function initGalleryPopups() {

    $('.mfp-gallery').each(function () { // We will loop through each item in the gallery linked to on a mfp-gallery link

        prepareGallery(this);

    })

}

export default initGalleryPopups;