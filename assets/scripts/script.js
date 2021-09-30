const slider = document.querySelector(".home-slider")
const points = Array.from(document.getElementsByClassName('home-pointer-point'))
const slidesSpan = Array.from(document.querySelectorAll('.home-slider-slide-area span'))
console.log(points)

function changeSlideAuto(){
  setInterval(()=>{
    let spanActive = document.querySelector('div.home-pointer-point.active')
    let activePosition = points.indexOf(spanActive)
    activePosition == points.length-1 ? activePosition = -1 : 
    console.log(activePosition)
    removeActiveClass()
    addActiveClass(activePosition+1)
    changeSliderMargin(activePosition+1)
  }, 6000)
}

changeSlideAuto()

function changeSlide(value) {
  changeSliderMargin(value)
  removeActiveClass()
  addActiveClass(value)
}

function changeSliderMargin(value){
  let sliderMarginValue = value * 100;
  let sliderMarginTxt = `-${sliderMarginValue}vw`
  slider.style.marginLeft = sliderMarginTxt
}

function removeActiveClass(){
  //removing 'active' class of all points and spans
  points.forEach((item) =>{
    item.classList.remove('active')
  })
  slidesSpan.forEach((item)=>{
    item.classList.remove('active')
  })
}

function addActiveClass(index){
  //adding 'active' class to the clicked point and span
  points[index].classList.add('active')
  slidesSpan[index].classList.add('active')
}

