import { createEle } from "./createElement";
import { loop } from "./createElement";

// create manu page

export function menu(){
    // add section for menu items
    const content = document.querySelector('.content')
    const menuMain = createEle('div', 'menuMain')
    content.append(menuMain)

    // create one box
    let box = ['div','box','']

    // create menu items
    let bigList = [[
        ['p','info','Zaatar Flatbread with tomato fil-fel h’arr, & labneh'],
        ['p','info-price','£7.50']
    ],[
        ['p','info','Yafo Authentic Falafels served with tahini sauce'],
        ['p','info-price','£8.50']
    ],[
        ['p','info','Grilled Sweet & Spicy Peppers served with infused hard Ricotta cheese, zaatar & fresh oregano'],
        ['p','info-price','£10.50']
    ],[    
        ['p','info','Heritage Roasted Carrots spiced with our homemade harissa & maple syrup, served on labneh'],
        ['p','info-price','£5,95']
    ],[
        ['p','info','Corn Ribs Infused in Middle Eastern spices, black garlic, pilpelchuma & dill yogurt'],
        ['p','info-price','£5,45']
    ],[
        ['p','info','Lachmagine authentic flatbread with spiced vegan mince & pine- nut puree, topped with Yafo salad, fried aubergine and drizzled with ambe & tahini'],
        ['p','info-price','£7,45']
    ],[
        ['p','info','Pan Fried Chestnut Mushrooms with black garlic, white wine, sweet pickled chilli, pistachio crumbs & micro coriander'],
        ['p','info-price','£9,45']
    ],[
        ['p','info','Yafo Trayserved with seasoned pitta chips, tahini, preserved lemon mayo & tomato fil-fel h’arr'],
        ['p','info-price','£3,45']
    ],[
        ['p','info','Siikh marinated vegan kebabs, served with roasted aubergine salad & tatbila dressing'],
        ['p','info-price','£5,66']
    ],[
        ['p','info','Sambousek Middle Eastern pastry stuffed with Balkan cheese, kale & potato, served with beetroot puree & spiced pomegranate molasses'],
        ['p','info-price','£12,45']
    ]

]
    // add title to page
    let title = createEle('h1', 'title', "Our small plates")
    menuMain.append(title)

    // make as many boxes as needed
    for(let i in bigList){
        menuMain.append(
            createEle(
                box[0],
                box[1],
                box[2]))
    }

    // get back boxes from page, to add content
    const boxes = document.querySelectorAll('.box')

    // add menu items to boxes
    for(let i in bigList){
        loop(bigList[i],boxes[i])
    }
}