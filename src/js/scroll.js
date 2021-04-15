import {
  gsap
} from 'gsap';

$ = jQuery;
import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function initHeaderScroll() {

  ScrollTrigger.create({
    trigger: 'body',
    start: 150,
    //markers: true,
    toggleClass: {
      targets: '#header-main',
      className: 'scrolled'
    },
  });


}


function popInStagger(items, trigger, duration = 0, triggerPos = '50%') {

  new gsap.timeline({

      scrollTrigger: {
        trigger: trigger,
        once: true,
        start: `top ${triggerPos}`,
        //markers: true,
        end: '80% 70%',
        scrub: 1,

      }
    }, 5)

    .from(items, {
      autoAlpha: 0,
      scale: 2,
      stagger: 0.2,
      duration: duration,
    }, 0.001);

}



export {
  initHeaderScroll,
  popInStagger
};
