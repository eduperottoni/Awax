const pointer = document.querySelector('.team-content-pointer')
const teamContent = document.querySelector('.team-content')
const slide = document.querySelector('.team-content-slider-slide')
const Teamslider = document.querySelector('.team-content-slider')

var sliderObj = {
    points:undefined,
}

countPointsNeeded()
window.onresize = (countPointsNeeded)


function cleanPointer(){
    pointer.innerHTML=''
}

function catchSlideWidth(){
    return slide.offsetWidth+20 
}

function catchTeamContentWidth(){
    return teamContent.offsetWidth
}

function countPointsNeeded(){
    let slideWidth = catchSlideWidth()
    let teamContentWidth = catchTeamContentWidth()
    let pointsNeeded
    if(teamContentWidth <= slideWidth){
        pointsNeeded = 9
    }else if(teamContentWidth <= 2*slideWidth){
        pointsNeeded = 5
    }else{
        pointsNeeded = 3
    }
    sliderObj.points = pointsNeeded
    console.log(sliderObj.points)
}