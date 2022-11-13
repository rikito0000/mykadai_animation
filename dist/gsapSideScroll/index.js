'use strict';

const sideScrollWrap = document.querySelector(".sideScrollWrap");
const sideScrollList = document.querySelector(".sideScrollList");
gsap.to(sideScrollList, {
  x: () => -(sideScrollList.clientWidth - sideScrollWrap.clientWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".sec02",
    start: "top top",
    end: () => `+=${sideScrollList.clientWidth - sideScrollWrap.clientWidth}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
  },
});
