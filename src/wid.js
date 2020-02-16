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

let currentString;


let options = {
  
  typeSpeed: 10,
  smartBackspace: true,
  shuffle: true,
  loop: false,
  strings: [],
  onReset: function(self) { self.strings[0] = currentString },

 
};

let typed = false;



$('.expertise .item').mouseenter(
    function(){
       

        if(!typed){
            options.strings[0] = $(this).find('.slideout').text();
            typed = new Typed('#expand', options);
            console.log('initial');
        }
        else{

            currentString = $(this).find('.slideout').text();
            //typed.options.stringsElement = `#${$(this).find('.slideout').attr('id')}`;

           // typed.options.strings = ['test'];

        typed.reset(true);
        }

       

        

        console.log(typed);
        

    }

   
);