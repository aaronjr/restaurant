import './style.css';
// import Icon from './icon.png';
// Add the image to our existing div.
// const myIcon = new Image();
// myIcon.src = Icon;

import myName from './load';
console.log(myName('Cody'))

document.addEventListener('DOMContentLoaded', () => {
    function component() {
        const element = document.createElement('div');
      
        // use your function!
        element.textContent = myName('Cody');
        return element;
      }
      
      const body = document.querySelector('body')
      body.appendChild(component())
      console.log(body)
})
