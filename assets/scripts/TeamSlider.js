const pointer = document.querySelector('.team-content-pointer')
const teamContent = document.querySelector('.team-content')
const slide = document.querySelector('.team-content-slider-slide')
const Teamslider = document.querySelector('.team-content-slider')


pointerGenerate()
window.onresize = pointerGenerate
slidePass()

function pointerGenerate(){
    let slideWidth = slide.scrollWidth+20
    pointer.innerHTML = ''
    let pointsAmount = 0
    if(teamContent.offsetWidth <= slideWidth){
        pointsAmount = 9
    }else if(teamContent.offsetWidth <= 2*slideWidth){
        pointsAmount = 5
    }else{
        pointsAmount = 3
    }
    createPoint(pointsAmount)
    return pointsAmount
}

function createPoint(amount){
    for (let i = 0; i < amount; i++){
        let point = document.createElement('div')
        point.classList.add('team-content-pointer-point')
        pointer.appendChild(point)
    }
}

function catchPointsAmout(){
    
    let pointsAmount = pointsArray.length
    return pointsAmount
}

function slidePass(){
    let pointsArray = Array.from(document.getElementsByClassName('team-content-pointer-point'))
    console.log(pointsArray[0])
    let pointsAmount = pointerGenerate()
    console.log(pointsAmount)
    let c = 1;
    window.setInterval(()=>{
        Teamslider.style.marginLeft = `-${(slide.scrollWidth+20)*c}px`
        pointsArray[c].classList.add('active')
        c == pointsAmount-1 ? c = 0 : c++
    },5000)
}

