
let sections = gsap.utils.toArray(".sec");

function changeSection(i) {
  gsap.to(window, {
    scrollTo: { y: i * innerHeight, autoKill: false, ease: "easeInOut" },
    duration: 0.85
  });
}

console.log(window.innerHeight);


sections.forEach((item, i) => {
  ScrollTrigger.create({
    trigger: item,
    onEnter: () => changeSection(i)
  });

  ScrollTrigger.create({
    trigger: item,
    start: "bottom bottom",
    onEnterBack: () => changeSection(i)
  });
});