import { createEle, createImg, loop } from './createElement';
import yafo from './Yafo.png'

// create home page
const mainSections = [
    ["div", 'imgHolder'],
    ["div", 'textHolder'],
]

export function home(){
    
    // find content section of page
    const content = document.querySelector('.content')

    // make main container for homepage
    const homeContainer = createEle('div','homeContainer')

    // add to home screen
    content.append(homeContainer)

    // add sections to page
    loop(mainSections, homeContainer)

    // find these areas to add items
    let imgHolder = document.querySelector(".imgHolder")
    let textHolder = document.querySelector(".textHolder")

    // create and add main logo
    imgHolder.append(createImg('hero', yafo, "YAFO logo"))

    // add address
    let text = createEle("p", "textMain", "238 North Street \r\n Southville BS3 1JD")
    textHolder.append(text)
}
