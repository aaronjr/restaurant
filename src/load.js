import { createEle } from './createElement';

const toCreate = [
    ["nav", "nav"],
    ["div", "content"],
    ["footer", "footer"],
]

const forNav = [
    ["h1", 'logo', "Restaurant"],
    ["ul", 'nav-list'],
]

const navList = [
    ['li', 'list-item', 'home'],
    ['li', 'list-item', 'menu'],
    ['li', 'list-item', 'contact']
]

export function nav (){
    const container = document.querySelector('.container')

    // create 3 main sections
    for(let element in toCreate){
        container.appendChild(
            createEle(
                toCreate[element][0],
                toCreate[element][1],
                toCreate[element][2]))
    }

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