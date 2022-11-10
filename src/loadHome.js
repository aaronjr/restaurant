import { createEle } from './createElement';
import { createImg } from './createElement';

// create home page
const mainSections = [
    ["div", 'imgHolder'],
    ["div", 'textHolder'],
]

export function home(){
    // find content section of page
    const content = document.querySelector('.content')

    // 
    for(let element in mainSections){
        content.appendChild(
            createEle(
                mainSections[element][0],
                mainSections[element][1],
                mainSections[element][2]))
    }

    let imgHolder = document.querySelector(".imgHolder")
    let img = createImg("hero", "https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=1380" ,"main logo of restaurant")
    imgHolder.append(img)
}
