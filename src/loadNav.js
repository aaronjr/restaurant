import { createEle } from './createElement';

const forNav = [
    ["h1", 'logo', "Restaurant"],
    ["ul", 'nav-list'],
]

const navList = [
    ['li', 'list-item', 'Home'],
    ['li', 'list-item', 'Menu'],
    ['li', 'list-item', 'Contact']
]

export function nav (){
    // create nav with logo and list
    const nav = document.querySelector('.nav')
    for(let element in forNav){
        nav.appendChild(
            createEle(
                forNav[element][0],
                forNav[element][1],
                forNav[element][2]))
    }

    // fill list
    const list =  document.querySelector('.nav-list')
    for(let element in navList){
        list.appendChild(
            createEle(
                navList[element][0],
                navList[element][1],
                navList[element][2]))
    }
}