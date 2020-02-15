import ScrollMagic from 'scrollmagic';
import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";

$ = jQuery;

function initHeaderScroll(){

let controller = new ScrollMagic.Controller();

	// build scenes
let headerScroll = new ScrollMagic.Scene({
    offset: 150
})
					.setClassToggle("#header-main", "scrolled") // add class toggle
					//.addIndicators() // add indicators (requires plugin)
                    .addTo(controller);
                    
}

export { initHeaderScroll };