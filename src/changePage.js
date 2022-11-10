import {home} from './loadHome';
import {contact} from './loadContact';
import {menu} from './loadMenu';

// change which page loads in main content
// file:///Users/AaronRichards_/code/repos/restaurant/dist/index.html

export function showPage(page){
    // find content
    const content = document.querySelector('.content')

    // remove each child to avoid duplication
    while(content.firstChild){
        content.removeChild(content.lastChild)
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