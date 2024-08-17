
const sliders = document.querySelectorAll(".slider")


sliders.forEach((slider)=>{

const slides = slider.querySelectorAll(".slider__list-item");
const controllers = slider.querySelectorAll(".slider__controller");
let currentPosition = 0;
let previous = 0;
let numSlides = slides.length - 1;


controllers.forEach((button) => {
    button.addEventListener("click", handler);
  });


slides.forEach((slide, i) => {
    if (currentPosition * -1 == i) {
     slide.style.transform = `scale3d(1,1,1) translateX(${(i + currentPosition) * 180}%)`;
    } else {
      slide.style.transform = `scale3d(0.8,0.8,0.8) translateX(${i * 180}%)`;
    }
  });


  function handler(evt) {

    evt.stopPropagation();
    const id = evt.currentTarget.dataset.id;
  
  
    if (id == "next" && currentPosition < numSlides) {
      currentPosition += 1;
      move(-currentPosition);
    } else if (id == "prev" && currentPosition > 0) {
      currentPosition -= 1;
  
      move(-currentPosition);
    }
  
    function move(currentPosition) {
      slides.forEach((slide, i) => {
        if (currentPosition * -1 == i) {
          slide.style.transform = `scale3d(1,1,1) translateX(${(i + currentPosition) * 180}%)`;
        } else {
          slide.style.transform = `scale3d(0.8,0.8,0.8) translateX(${(i + currentPosition) * 180}%)`;
        }
      });
    }
  }
  
  

})



// ====================
// FORM
//=====================

const actions = document.querySelectorAll(".action-js")

actions.forEach((action)=>{
  let counter = 0
  const minusButton = action.querySelector(".button--minus")
  const plusButton = action.querySelector(".button--plus")
  const amountField = action.querySelector(".amount")
  const formInput = action.querySelector(`input[type="hidden"]`)

  counter = parseInt(amountField.innerHTML)


  minusButton.addEventListener("click",()=>{
    counter = counter > 1 ? counter -= 1 : 1 
    amountField.innerHTML = counter
    formInput.value = counter
  })
  plusButton.addEventListener("click",()=> {
    counter < 50 ? counter += 1 : 1 
    amountField.innerHTML = counter
    formInput.value = counter
  } )
})