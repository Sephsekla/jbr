import Parallax from 'parallax-js';


$ = jQuery;


var scene = document.getElementById('parallax'); // Create parallax scene inside #parallax div
var parallaxInstance = new Parallax(scene, {
    limitX: 10,
    limitY: 10,
    scalarX: 2,
    scalarY: 2,
});