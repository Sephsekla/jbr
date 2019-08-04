import './sass/style.scss';
import {
    Prism,
} from 'prismjs';


$ = jQuery;

$('.toggle-nav').click(function () {
    $('body').toggleClass('nav-open');
})