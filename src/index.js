import './sass/style.scss';
import createEasterEgg from './js/easteregg';
import initNav from './js/nav';
import { loadWipe, unloadWipe } from './js/preloader';



createEasterEgg();

initNav();

loadWipe();
unloadWipe();