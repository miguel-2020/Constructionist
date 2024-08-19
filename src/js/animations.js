
const slideInFromRight = {
  start: { opacity: 0, x: 200 },
  end: { opacity: 1, x: 0 },
};

const slideInFromLeft = {
  start: { opacity: 0, x: -200 },
  end: { opacity: 1, x: 0 },
};

const slideInFromTop = {
  start: { opacity: 0, y: -200 },
  to: { opacity: 1, y: 0 },
};

const defaults = {
  duration: 2.5,
  ease: "power2.out",
};

const scrollTrigger = {
  trigger: ".site-header",
  start: "50%",
  end: "100%",
};


document.addEventListener("DOMContentLoaded", (event) => {
  var tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.out" } });
  tl.fromTo(".slide-from-left", slideInFromLeft.start, slideInFromLeft.end);
  tl.fromTo(".slide-from-right", slideInFromRight.start, slideInFromRight.end, "<");
  gsap.set(".site-header", { attr: { "data-state": "play" } });

  //   SCROLL ANIMATIONS
  gsap.registerEffect({
    name: "counter",
    extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
    defaults: {
      //defaults get applied to any "config" object passed to the effect
      end: 0,
      ease: "power2.out",
      duration: 1,
      increment: 1,
    },
    effect: (targets, config) => {
      let tl = gsap.timeline();
      tl.to(targets, {
        duration: config.duration,
        ease: config.ease,
        innerText: config.end,

        modifiers: {
          /**
           *
           * @param {number | string} innerText  The about-to-be-applied value
           * @returns the new value for the innerText property
           */

          innerText: function (innerText) {
            return gsap.utils.snap(config.increment, innerText);
          },
        },
      });

      return tl;
    },
  });

  //  run effect directly
  //  gsap.effects.counter(".animated-number",{end:100})

  // register scroll triggier pluggin
  gsap.registerPlugin(ScrollTrigger);

  const introTl = gsap.timeline({
    defaults,
    scrollTrigger,
  });
  introTl.fromTo(
    ".section-1-heading",
    { "clip-path": "polygon(0 0, 0 0, 0 100%, 0 100%)" },
    { "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
    "<"
  );
  introTl.fromTo(".section-1-paragraph-slide-from-right", slideInFromRight.start, slideInFromRight.end, "<");
  introTl.fromTo(".tile", { opacity: 0 }, { opacity: 1 }, "<50%");
  introTl.counter(".animated-number-1", { end: 100 }, "<");
  introTl.counter(".animated-number-2", { end: 23 }, "<");
  introTl.counter(".animated-number-3", { end: 15 }, "<");

  const advanceTl = gsap.timeline({
    defaults,
    scrollTrigger: {
      ...scrollTrigger,
      trigger: "#section-1",
    },
  });

  advanceTl.fromTo(".site-advantages-slide-from-left", slideInFromLeft.start, slideInFromLeft.end);
  advanceTl.fromTo(
    ".site-advantages-section__heading",
    { "clip-path": "polygon(0 0, 0 0, 0 100%, 0 100%)" },
    { "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
    "<60%"
  );
  advanceTl.fromTo(".site-advantages-slide-from-top", { opacity: 0, y: -200 }, { opacity: 1, y: 0 }, "<");
  advanceTl.fromTo(".site-advantages-slide-from-right", slideInFromRight.start, slideInFromRight.end, "<");
  advanceTl.fromTo(".site-advantages-slide-from-bottom", { opacity: 0, y: 200 }, { opacity: 1, y: 0 }, "<40%");
  // END
});


