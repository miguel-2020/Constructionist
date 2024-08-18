document.addEventListener("DOMContentLoaded", (event) => {
  // const clip_right = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";
  // const clip = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
  var tl = gsap.timeline({ defaults:{duration:1,ease: "power1.out"}});
  tl.fromTo(".slide-from-left", { opacity: 0, x: -200 }, { opacity: 1.2, x: 0});
  tl.fromTo(".slide-from-right", { opacity: 0, x: 200 }, { opacity: 1, x: 0 }, "<");
  gsap.set(".site-header",{attr:{"data-state":"play"}})

//   SCROLL ANIMATIONS
   gsap.registerEffect({
    name:"counter",
    extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
    defaults:{ //defaults get applied to any "config" object passed to the effect
      end:0,
    ease: "power2.out",
      duration:1,
      increment:1
    },
    effect:(targets,config)=>{
      let tl = gsap.timeline()
      tl.to(targets,{
        duration:config.duration,
        ease:config.ease,
        innerText:config.end,

        modifiers:{
          /**
           * 
           * @param {number | string} innerText  The about-to-be-applied value
           * @returns the new value for the innerText property
           */
         
          innerText:function(innerText){
            return gsap.utils.snap(config.increment,innerText)
          }

         
        }

      })

      return tl

      
    }


   })


  //  run effect directly
  //  gsap.effects.counter(".animated-number",{end:100})



   gsap.registerPlugin(ScrollTrigger) 

   
    const tlSectionOne = gsap.timeline({
     defaults:{
      duration:2.5,
      ease: "power2.out",
     },
      scrollTrigger: {
          trigger: "#section-1",
          start:"0%",
          end:"100%"
         
     
      
        
       
      }
     });

      tlSectionOne.counter(".animated-number-1",{end:100},"<10%")
      tlSectionOne.counter(".animated-number-2",{end:23},"<10%")
 tlSectionOne.counter(".animated-number-3",{end:15},"<10%")
    tlSectionOne.fromTo("h4",{opacity:0,"clip-path":"polygon(0 0, 10% 0, 10% 100%, 0% 100%)"},{opacity:1,"clip-path":"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",duration:2.5,ease: "back.out(1.7)"})
    tlSectionOne.fromTo(".site-advantages-slide-from-left",{ opacity: 0, x: 200}, { opacity: 1, x: 0},"<")
    tlSectionOne.fromTo(".site-advantages-slide-from-top",{ opacity: 0, y: -200}, { opacity: 1, y: 0},"<")
    tlSectionOne.fromTo(".site-advantages-lide-from-right",{ opacity: 0, x: 500}, { opacity: 1, x: 0},"<")
    tlSectionOne.fromTo(".site-advantages-slide-from-bottom",{ opacity: 0, y: 200}, { opacity: 1, y: 0},"<40%")
  






   
// scrollTl.fromTo(".onScroll-slide-from-right",{ opacity: 0, x: 200}, { opacity: 1, x: 0})





  
 





// END
   })
