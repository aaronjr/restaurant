import './style.css';
import {main} from './loadMain';
import {showPage} from './changePage';

document.addEventListener('DOMContentLoaded', () => {

    // build nav and main page layout - from .loadMain
    main()

    // start on home page
    showPage("Home")
    
    // find nav list, add event listeners then load correct page
    let list = document.querySelectorAll('.list-item')
    list.forEach(item => {
        item.addEventListener("click", () => {
            // pass through the wanted page
            showPage(item.textContent)
        })
    })
})