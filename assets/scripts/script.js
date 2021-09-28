const slider = document.querySelector(".home-slider");
const slides = Array.from(document.getElementsByClassName("home-slider-slide"));
const points = Array.from(
  document.getElementsByClassName("home-pointer-point")
);

console.log(slider, slides, points);

function defineArrayIndexes(array) {
  array.forEach((item) => {
    item.setAttribute('value', array.indexOf(item));
    item.setAttribute('onclick','activePointer(value)')
  });
}

defineArrayIndexes(slides);
defineArrayIndexes(points);


function activePointer(value) {
    console.log(value)
}

