import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";
import TweenMax from 'gsap';

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

function popInTech(){
	let controller = new ScrollMagic.Controller();

	let techIn = new TweenMax.staggerFrom('.tech-item',0.2,{
		autoAlpha: 0,
		scale: 1.3
	},0.1);

	let techScroll = new ScrollMagic.Scene({
		triggerElement: '#technologies',
		duration: 300,
		reverse: false
	})
	.setTween(techIn)
	.addIndicators()
	.addTo(controller);

}

export { initHeaderScroll, popInTech };