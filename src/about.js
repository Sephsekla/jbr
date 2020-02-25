import Flickity from 'flickity';

let slider = new Flickity( // Create a flickity slider on the about page
    '.slider', {
        cellAlign: 'center',
        wrapAround: true,
        autoPlay: true,
        pageDots: false
    }

)