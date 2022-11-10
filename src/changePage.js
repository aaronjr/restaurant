import {home} from './loadHome';
import {contact} from './loadContact';
import {menu} from './loadMenu';

// change which page loads in main content

export function showPage(page){
    // find content
    const content = document.querySelector('.content')

    // remove each child to avoid duplication
    if(content.lastChild){
        content.remove(content.lastChild)
    }

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