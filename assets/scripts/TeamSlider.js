const pointer = document.querySelector('.team-content-pointer')
const teamContent = document.querySelector('.team-content')
const slide = document.querySelector('.team-content-slider-slide')
const TeamSlider = document.querySelector('.team-content-slider')
var pointsArray = Array.from(document.getElementsByClassName('team-content-pointer-point'))

var sliderObj = {
    points:undefined,
}

slidePassAuto()

function setSlide(value){
    let slideWidth = catchSlideWidth()
    TeamSlider.style.marginLeft = `-${slideWidth*value}px`
}

function slidePass(value){
    TeamSlider.classList.remove('animation')
    changeActivePoints(value)
    setSlide(value)
    TeamSlider.classList.add('animation')
}

function catchSlideWidth(){
    return slide.offsetWidth+20 
}

function catchTeamContentWidth(){
    return teamContent.offsetWidth
}



function slidePassAuto(){
    // let teamContentWidth = 0
    // if(pointsNeeded == 9){
    //     teamContentWidth = 280
    // }else if(pointsNeeded == 5){
    //     teamContentWidth = 560
    // }else{
    //     teamContentWidth = 840
    // }
    setInterval(()=>{
        TeamSlider.classList.remove('animation')
        let pointActive = document.querySelector('.team-content-pointer-point.active')
        let c = pointsArray.indexOf(pointActive)+1
        if(c > 8){c = 0}
        slidePass(c)
        TeamSlider.classList.add('animation')
        
    },6000)
}

function changeActivePoints(c){
    pointsArray.map((item =>{
        item.classList.remove('active')
    }))
    pointsArray[c].classList.add('active')
}

// function countPointsNeeded(){
//     let slideWidth = catchSlideWidth()
//     let teamContentWidth = catchTeamContentWidth()
//     let pointsNeeded
//     if(teamContentWidth <= slideWidth){
//         pointsNeeded = 9
//     }else if(teamContentWidth <= 2*slideWidth){
//         pointsNeeded = 5
//     }else{
//         pointsNeeded = 3
//     }
//     console.log(pointsNeeded)
//     return pointsNeeded
// }


// function hidePoints(){
//     let pointsNeeded = countPointsNeeded()
//     pointsArray.map((item)=>{
//         item.classList.remove('hidden')
//         item.classList.add('visible')
//     })
//     if (pointsArray.length != pointsNeeded){
//         for(let i = 8; i >= pointsNeeded; i--){
//             pointsArray[i].classList.remove('visible')
//             pointsArray[i].classList.add('hidden')
//         }
//     }
//     return pointsNeeded
// }