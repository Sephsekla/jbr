import './sass/style.scss';
import Prism from 'prismjs';
 
Prism.highlightAll();

$ = jQuery;

$('.toggle-nav').click(function () {
    $('body').toggleClass('nav-open');
})

setTimeout(() => {
    Prism.highlightAll();
}, 0);