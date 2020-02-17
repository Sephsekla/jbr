// Can also be included with a regular script tag
import Typed from 'typed.js';
import he from 'he';

/*const typestrings = [
    '<section>Hola</section>',
    '<section>Iawn</section>'
    
];

const stringMap = typestrings.map( x => he.encode(x));
*/

$ = jQuery;

let currentString ='123';


let options = {
  
  typeSpeed: 2,
  smartBackspace: false,
  shuffle: false,
  backDelay: 0,
  loop: true,
  strings: ['123','456'],
  preStringTyped: function(arrayPos, self) { self.strings[arrayPos] = currentString; },
  onStringTyped: function(arrayPos, self){
      console.log(self);
      self.stop();
  }


 
};

let typed = false;



$('.expertise .item').mouseenter(
    function(){
       

        if(!typed){
            options.strings[0] = $(this).find('.slideout').text();
            typed = new Typed('#expand', options);
        }
        else{
            typed.start();
            currentString = $(this).find('.slideout').text();
            
 
        }

       

        

        console.log(typed);
        

    }

   
);