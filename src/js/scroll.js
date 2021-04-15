
//import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
//import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";
import {gsap} from 'gsap';
//import ScrollMagic from 'scrollmagic';
//import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

$ = jQuery;
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function initHeaderScroll(){

	ScrollTrigger.create({
		trigger: 'body',
		start: 150,
		//markers: true,
		toggleClass: { targets: '#header-main', className: 'scrolled' },
	  });

                    
}
/*
function popInStagger(items,trigger, duration=0, triggerPos=0.5){
	let controller = new ScrollMagic.Controller();

	let techIn = new gsap.staggerFrom(items,0.2,{
		autoAlpha: 0,
		scale: 2
	},0.1);

	let techScroll = new ScrollMagic.Scene({
		triggerElement: trigger,
		duration: duration,
		reverse: false,
		triggerHook: triggerPos,
	})
	.setTween(techIn)
	//.addIndicators()
	.addTo(controller);

}

*/

export { initHeaderScroll, /*popInStagger */};