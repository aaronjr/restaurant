import { createEle } from "./createElement";

// contact details
const contactList = [
    ["li", 'contact-list', "0117 3790477"],
    ["li", 'contact-list', "info@restaurant.com"],
    ["li", 'contact-list', "238 North Street Southville BS3 1JD"],
]
// create contact page
export function contact(){
    const content = document.querySelector(".content")

    let contactMain = createEle("div", "contactMain")
    let frame = createEle("iframe", "frame")

    content.append(contactMain)
    contactMain.append(frame)
    frame.outerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9947.795246890593!2d-2.6177216611723986!3d51.44073394364307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718c32fbfe1749%3A0xa3add59e9f04ba8f!2sNorth%20St%2C%20Bristol!5e0!3m2!1sen!2suk!4v1668089312689!5m2!1sen!2suk"style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    
    let ContactHolder =  createEle("div", "ContactHolder")
    let listContact =  createEle("ul", "contactList")
    createEle("div", "ContactHolder")

    contactMain.append(ContactHolder)
    ContactHolder.append(listContact)

    const list = document.querySelector('.contactList')
    for(let element in contactList){
        list.appendChild(
            createEle(
                contactList[element][0],
                contactList[element][1],
                contactList[element][2]))
    }
}