import './sass/style.scss';

import Parallax from 'parallax-js';
 

$ = jQuery;

$('.toggle-nav').click(function () {
    $('body').toggleClass('nav-open');
})




var scene = document.getElementById('parallax');
/*var parallaxInstance = new Parallax(scene,{
    limitX: 10,
    limitY: 10,
    scalarX: 2,
    scalarY: 2,
});
*/


console.log(`Ah, you have opened the console.

I too like to live dangerously.


       *(((((((((((((((((((((((((((((((((((((((((((((((((                       
         (((((((((((((((((((((((((((((((((((((((((((((((((/                     
          ((((((((((((((((((((((((((((((((((((((((((((((((((                    
           (((((       ((((((                   ((((((((     @@@@@@@@@@@@@@     
            ((((       ((((((                     /(((((      @@@@@@@@@@@@@@@@  
              ((       ((((((      (((((((((.      (((((       (        @@@@@@@ 
               (       ((((((      ((((((((((       ((((       ((        @@@@@@.
                       ((((((      (((((((((*      (((((       (((       @@@@@@ 
                &      ((((((                    (((((((       ((((,   @@@@@@@# 
                &@%    ((((((                    (((((((             @@@@@@@@   
                &@@@   ((((((      (((((((((       (((((              @@@@      
                &@@@@  ((((((      (((((((((((      ((((       (((((   @@@@     
*@@@@@@         @@@@@@ ((((((      (((((((((((      ((((       ((((((    @@@    
@@@@@@@       @@@@@@@ ,(((((      (((((((((        ((((       ((((((((   @@@&  
 @@@@@@@@@@@@@@@@@@&    ((((                     ((((((       (((((((((   @@@@ 
    @@@@@@@@@@@@%        (((                  (((((((((       ((((((((((   @@@@
                          (((((((((((((((((((((((((((((((((((((((((((((((((((  
                           /(((((((((((((((((((((((((((((((((((((((((((((((((( 



`);

window.addEventListener('beforeunload', function(event) {
    $('.loader').addClass("active");
  });

  window.addEventListener('DOMContentLoaded', function(event) {
    $('.loader-2').removeClass("active");
  }); 


import { initHeaderScroll } from './js/scroll.js';

initHeaderScroll();