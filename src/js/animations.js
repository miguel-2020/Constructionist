document.addEventListener("DOMContentLoaded", (event) => {
  const clip_right = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";
  const clip = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
  var tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
  tl.fromTo(".slide-from-left", { opacity: 0, x: -200 }, { opacity: 1.2, x: 0, duration: 1 });
  tl.fromTo(".slide-from-right", { opacity: 0, x: 200 }, { opacity: 1, x: 0, duration: 1 }, "<");


//   SCROLL ANIMATIONS
   // start the animation when "site-advantages-section" enters the viewport (once)
});
