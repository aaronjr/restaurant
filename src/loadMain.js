import { createEle } from './createElement';
import {nav, footer} from './loadNav';

const toCreate = [
    ["nav", "nav"],
    ["div", "content"],
    ["footer", "footer"],
]

export function main (){
    const container = document.querySelector('.container')

    // create 3 main sections
    for(let element in toCreate){
        container.appendChild(
            createEle(
                toCreate[element][0],
                toCreate[element][1],
                toCreate[element][2]))
    }

    // add nav and footer to page
    nav()
    footer()
}