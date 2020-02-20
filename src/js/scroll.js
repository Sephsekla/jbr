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

function popInStagger(items,trigger, duration=0, triggerPos=0.5){
	let controller = new ScrollMagic.Controller();

	let techIn = new TweenMax.staggerFrom(items,0.2,{
		autoAlpha: 0,
		scale: 1.3
	},0.1);

	let techScroll = new ScrollMagic.Scene({
		triggerElement: trigger,
		duration: duration,
		reverse: false,
		triggerHook: triggerPos,
	})
	.setTween(techIn)
	.addIndicators()
	.addTo(controller);

}

export { initHeaderScroll, popInStagger };