import { createEle } from './createElement';

// create Nav
// list to pass through createEle function
const forNav = [
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

// create footer
const forFoot = [
    ["ul", 'foot-list'],
]

const footList = [
    ['li', 'list-item-foot', '2022'],
    ['li', 'list-item-foot', 'aaronjr']
]

export function footer(){
    // create footer with info
    const footer = document.querySelector('.footer')
    for(let element in forFoot){
        footer.appendChild(
            createEle(
                forFoot[element][0],
                forFoot[element][1],
                forFoot[element][2]))
    }

    // fill list
    const list =  document.querySelector('.foot-list')
    for(let element in footList){
        list.appendChild(
            createEle(
                footList[element][0],
                footList[element][1],
                footList[element][2]))
    }
}