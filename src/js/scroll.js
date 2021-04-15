
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

function popInStagger(items,trigger, duration=0, triggerPos='50%'){

	const techIn = new gsap.timeline({
		scrollTrigger: {
			trigger: trigger,
			once: true,
			start: `top ${triggerPos}`,
			markers: true,
			end: 300,

		}
	},0.1);

techIn.from(items,{
		autoAlpha: 0,
		scale: 2,
		duration: duration,
		stagger: 0.2,
	},0.1);

}



export { initHeaderScroll, popInStagger};