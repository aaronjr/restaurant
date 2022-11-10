import { createEle } from './createElement';
import yafo from './Yafo.png'

// create home page
const mainSections = [
    ["div", 'imgHolder'],
    ["div", 'textHolder'],
]

export function home(){
    // find content section of page
    const content = document.querySelector('.content')

    const homeContainer = createEle('div','homeContainer')

    content.append(homeContainer)

    // 
    for(let element in mainSections){
        homeContainer.appendChild(
            createEle(
                mainSections[element][0],
                mainSections[element][1],
                mainSections[element][2]))
    }

    let imgHolder = document.querySelector(".imgHolder")
    let textHolder = document.querySelector(".textHolder")
    let img = new Image();
    img.className = "hero"
    img.src = yafo
    // myIcon.src = Icon;
    imgHolder.append(img)

    let text = createEle("p", "textMain", "238 North Street \r\n Southville BS3 1JD")
    textHolder.append(text)
}
