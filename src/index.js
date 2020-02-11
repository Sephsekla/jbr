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

// Can also be included with a regular script tag
import Typed from 'typed.js';
import he from 'he';

/*const typestrings = [
    '<section>Hola</section>',
    '<section>Iawn</section>'
    
];

const stringMap = typestrings.map( x => he.encode(x));
*/

const gitMessage = `git clone joebr.git
\`Cloning into 'joebr'...\`
\`remote: Enumerating objects: 148, done.\`
\`remote: Counting objects: 100% (148/148), done.\`
\`remote: Compressing objects: 100% (107/107), done.\`
\`remote: Total 1652 (delta 55), reused 113 (delta 36), pack-reused 1504\`
\`Receiving objects: 100% (1652/1652), 2.77 MiB | 4.39 MiB/s, done.\`
\`Resolving deltas: 100% (920/920), done.\`

\`Hover over the site to see what's going on!\``;

let options = {
  strings: [gitMessage,gitMessage],
  typeSpeed: 30,
  smartBackspace: true,
  shuffle: true,
  loop: false,
  onComplete: function(){
      initialComplete = true;
  }
};

let initialComplete = false;

let typed = new Typed('#home-screen', options);

$('section, div').mouseenter(
    function(){
        if(initialComplete){
        options.strings = [he.encode($(this).html())];
        options.typeSpeed = 5;

        typed.destroy();

        typed = new Typed('#home-screen', options);
        }

    }
);

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