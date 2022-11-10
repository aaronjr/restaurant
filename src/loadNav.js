import { createEle, loop } from './createElement';

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
    loop(forNav, nav)

    // fill list
    const list =  document.querySelector('.nav-list')
    loop(navList,list)
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
    loop(forFoot, footer)

    // fill list
    const list =  document.querySelector('.foot-list')
    loop(footList, list)
}