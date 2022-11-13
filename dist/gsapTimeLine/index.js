// timelineを作成
const tl = gsap.timeline({
  repeat: -1, // アニメーションの繰り返し回数。-1で無限回
  repeatDelay: 0.3, // ループとループの間の時間
  defaults: { duration: 0.5, ease: "power4.out" }, // tweenのデフォルトの値
});

// アニメーションを実行
tl.from(".box", {
  scale: 0,
})
  .to(".box1", {
    left: 50,
  })
  .to(
    ".box2",
    {
      right: 50,
    },
    "<"
  )
  .to(".box", {
    scale: 0,
  });


gsap.set("#demo", { scale: 0.7 });
gsap.timeline()
    .from("#demo", { duration: 1, opacity: 0 })
    .from(".demo__title", { opacity: 0, scale: 0, ease: "back" })
    .from(".demo__subTitle", {opacity: 0, y: '100px', stagger: 0.1, duration: 0.8, ease: "back" })
    .from(".demo__figure", { opacity: 0, xPercent: -100, duration: 0.2 })