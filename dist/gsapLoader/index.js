'use strict';

gsap.set('.splashScreen__dot', {
  opacity: 0,
  y: -50
});

const tl = gsap.timeline({
  repeat: 0, // アニメーションの繰り返し回数。-1で無限回
});

tl.to('.splashScreen__dot',
  { opacity: 1, y: 0, duration: 0.8, delay: 0.8, stagger: { amount: 0.5, from: "start", ease: 'power4.inOut' } }
).to('.splashScreen__dot',
  { opacity: 0, delay: -0.3, stagger: { amount: 0.5, from: "start", ease: 'power4.inOut' } }
).to('.splashScreen', {y: '100%' },'+=0.5')