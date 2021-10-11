const aList = Array.from(document.getElementsByClassName('menu-list-item-link'))
console.log(aList)

function goTo(index){
    document.querySelector('header').addEventListener('click',(e)=>{
        e.preventDefault()
    })
    let elementUrl = aList[index].href
    let elementSelector = elementUrl.replace('http://127.0.0.1:5500/index.html','')
    let sectionElement = document.querySelector(`section${elementSelector}`)
    let offsetTop = elementSelector == '#home' ? 0 : sectionElement.offsetTop
    console.log(`Vou andar ${offsetTop}`)
    window.scrollTo({
        top:offsetTop,
        behavior:'smooth'
    })
}