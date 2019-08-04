import './sass/style.scss';
import Prism from 'prismjs';

import Parallax from 'parallax-js';
 
Prism.highlightAll();

$ = jQuery;

$('.toggle-nav').click(function () {
    $('body').toggleClass('nav-open');
})

setTimeout(() => {
    Prism.highlightAll();
}, 0);


var scene = document.getElementById('parallax');
/*var parallaxInstance = new Parallax(scene,{
    limitX: 10,
    limitY: 10,
    scalarX: 2,
    scalarY: 2,
});
*/
