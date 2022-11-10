import './style.css';
import {main} from './loadMain';
import {showPage} from './changePage';

// import Icon from './icon.png';
// Add the image to our existing div.
// const myIcon = new Image();
// myIcon.src = Icon;


document.addEventListener('DOMContentLoaded', () => {
    // build nav and main page layout - from .loadMain
    main()
    
    // find list, add event listeners and load correct page
    let list = document.querySelectorAll('.list-item')
    list.forEach(item => {
        item.addEventListener("click", () => {
            // pass through the wanted page
            showPage(item.textContent)
        })
    })

})