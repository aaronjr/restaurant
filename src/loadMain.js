import { loop } from './createElement';
import {nav, footer} from './loadNav';

const toCreate = [
    ["nav", "nav"],
    ["div", "content"],
    ["footer", "footer"],
]

export function main (){
    const container = document.querySelector('.container')

    // add list to container
    loop(toCreate, container)

    // add nav and footer to page
    nav()
    footer()
}