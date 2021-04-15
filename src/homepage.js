import homeType from './js/hometype.js';

import {
    initHeaderScroll,
popInStagger
} from './js/scroll.js';

$ = jQuery;


homeType();

initHeaderScroll();

popInStagger('.link-wrapper','#links',0.2,'80%');