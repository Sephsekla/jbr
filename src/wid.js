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

let i = 0;


let options = {
  
  typeSpeed: 30,
  smartBackspace: true,
  shuffle: true,
  loop: false,
  strings: ['123'],
  onReset: function(self) { self.strings[0] = 'test'+i; i++; },

 
};

let typed = false;
typed = new Typed('#expand', options);

let currentId = 'test'


$('.expertise .item').mouseenter(
    function(){
       

        if(!typed){
            //options.stringsElement = `#${$(this).find('.slideout').attr('id')}`;
            //typed = new Typed('#expand', options);
        }
        else{
            //typed.options.stringsElement = `#${$(this).find('.slideout').attr('id')}`;

           // typed.options.strings = ['test'];

        typed.reset(true);
        }

       

        

        console.log(typed);
        

    }

   
);