import {home} from './loadHome';
import {contact} from './loadContact';
import {menu} from './loadMenu';

export function showPage(page){
    // find content
    const content = document.querySelector('.content')

    // remove each child to avoid duplication
    while(content.firstChild){
        content.removeChild(content.lastChild)
    }

    // load correct page
    if(page == "Home"){
        home()
    }
    else if(page == "Contact"){
        contact()
    }
    else{
        menu()
    }
}