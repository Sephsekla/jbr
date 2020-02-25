import './sass/style.scss';
import createEasterEgg from './js/easteregg';
import initNav from './js/nav';
import { loadWipe, unloadWipe } from './js/preloader';



createEasterEgg();

initNav();

loadWipe();
unloadWipe();






window.onload = function() {
    const picture = $('.banner').find('picture img')[0].currentSrc;
    console.log(picture);

    let bannerStyle = document.createElement('style');

bannerStyle.innerHTML = `

@supports(background-clip: text) or (-webkit-background-clip: text){

.banner .inner h1::before {
background-image: url(${picture});
opacity: 0.4;
}

@supports(filter: opacity(0.4)) {

    .banner .inner h1::before {
        opacity: 1;
    filter: opacity(0.6);
        }
}

}
`;
document.head.appendChild(bannerStyle);

  }