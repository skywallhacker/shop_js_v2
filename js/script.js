import arr from './database.js'
import data from './database.js'
const shop_card = document.querySelector('.shop_card')
const show_five = document.querySelector('.five')
const show_all = document.querySelector('.all')
const change = document.querySelector('.change')
let cart_model = document.querySelector('.cart')
let cart_icon = document.querySelector('.cart_icon')
let cart_cont = document.querySelector('.conatainer_cart')
let cart_sect = document.querySelector('.cart')
let model_windov = document.querySelector('.model_windov')
let close = document.querySelector('.close')
let model_cart = document.querySelector('.model_cart')
let id
let total_sum = 0
let xamro = 0
let cart = []
let total_price = document.querySelector('.total_price')
let total_s = document.querySelector('.total')
let total_sum_new = 0
let count_num = 1
let item_price


total_price.innerHTML = 0
total_s.innerHTML = 0

show_five.onclick = () => {
    reload(data.slice(0, 5))
}

show_all.onclick = () => {
    reload(data)
}

change.innerHTML = cart.length




function reload(arr) {
    shop_card.innerHTML = ""

    for (let item of arr) {
        // create
        let shop_item = document.createElement('div')
        let item_img = document.createElement('div')
        let img = document.createElement('img')
        let item_text = document.createElement('div')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')
        let item_info = document.createElement('div')
        let info_elem_d = document.createElement('div')
        let img_d = document.createElement('img')
        let span_d = document.createElement('span')
        let info_elem_s = document.createElement('div')
        let img_s = document.createElement('img')
        let span_s = document.createElement('span')
        let info_elem_o = document.createElement('div')
        let img_o = document.createElement('img')
        let span_o = document.createElement('span')
        let item_button = document.createElement('div')
        let buttons = document.createElement('button')

        // styling

        shop_card.classList.add('shop_card')
        shop_item.classList.add('shop_item')
        item_img.classList.add('item_img')
        item_text.classList.add('item_text')
        item_info.classList.add('item_info')
        info_elem_d.classList.add('info_elem')
        info_elem_s.classList.add('info_elem')
        info_elem_o.classList.add('info_elem')
        item_button.classList.add('item_button')



        img.src = item.image
        h2.innerHTML = item.category
        p.innerHTML = item.description.slice(0, 150) + "..."
        img_d.src = 'img/dollar.svg'
        span_d.innerHTML = item.price
        img_s.src = 'img/star.svg'
        span_s.innerHTML = item.rating.rate
        img_o.src = 'img/object.svg'
        span_o.innerHTML = item.rating.count
        buttons.innerHTML = 'В избранное'

        // append

        shop_card.append(shop_item)
        shop_item.prepend(item_img, item_text, item_info, item_button)
        item_img.prepend(img)
        item_text.prepend(h2, p)
        item_info.prepend(info_elem_d, info_elem_s, info_elem_o)
        info_elem_d.prepend(img_d, span_d)
        info_elem_s.prepend(img_s, span_s)
        info_elem_o.prepend(img_o, span_o)
        item_button.prepend(buttons)


        // functions
        buttons.onclick = () => {
            buttons.classList.toggle('active_btn')
            if (buttons.classList.contains('active_btn')) {
                buttons.innerHTML = 'Добавлено'
            } else {
                buttons.innerHTML = 'В избранное'
            }
            if (cart.includes(item.id)) {
                cart = cart.filter(el => el !== item.id)
            } else {
                cart.push(item)
                // cartAdd()
                reload_cart()
            }
            change.innerHTML = cart.length
            total()
            console.log(cart);
        }



    }
}

let price_new = 0


reload(data)

function reload_cart() {
    model_cart.innerHTML = ''
    for (let item of cart) {
        // create

        let model_item = document.createElement('div')
        let cart_image = document.createElement('div')
        let cart_img = document.createElement('img')
        let items = document.createElement('div')
        let model_elem_one = document.createElement('div')
        let h4 = document.createElement('h4')
        let remove = document.createElement('div')
        let delet_img = document.createElement('img')
        let delet = document.createElement('span')
        let model_elem_two = document.createElement('div')
        let saller = document.createElement('span')
        let fk_box = document.createElement('div')
        let item_elem = document.createElement('div')
        let count_box = document.createElement('div')
        let minus = document.createElement('button')
        let schet = document.createElement('div')
        let count = document.createElement('span')
        let plus = document.createElement('button')
        let price_elem = document.createElement('div')
        let price = document.createElement('h5')
        let sale_price = document.createElement('span')
        let line = document.createElement('div')
        item_price = item.price
        item.price_new = 0

        // styling

        model_item.classList.add('model_item')
        cart_image.classList.add('cart_image')
        cart_img.classList.add('cart_img')
        items.classList.add('items')
        model_elem_one.classList.add('model_elem_one')
        h4.classList.add('h4')
        remove.classList.add('remove')
        delet_img.classList.add('delet_img')
        delet.classList.add('delet')
        model_elem_two.classList.add('model_elem_two')
        saller.classList.add('saller')
        item_elem.classList.add('item_elem')
        count_box.classList.add('count_box')
        minus.classList.add('minus')
        schet.classList.add('schet')
        count.classList.add('count')
        plus.classList.add('plus')
        price_elem.classList.add('price_elem')
        price.classList.add('price')
        sale_price.classList.add('sale_price')
        line.classList.add('line')
        fk_box.classList.add('fk_box')

        cart_img.src = item.image
        h4.innerHTML = item.category
        saller.innerHTML = 'Продавец: Daler aka'
        price.innerHTML = item.price + '$'
        minus.innerHTML = '-'
        plus.innerHTML = '+'
        count.innerHTML = '1'
        delet_img.src = 'img/delete.png'
        delet.innerHTML = 'Удалить'
        count.innerHTML = count_num



        // append

        model_cart.append(model_item, line)
        model_item.append(cart_image, items)
        cart_image.append(cart_img)
        items.append(model_elem_one, model_elem_two)
        model_elem_one.append(h4, remove)
        remove.append(delet_img, delet)
        model_elem_two.append(saller, fk_box)
        fk_box.append(item_elem, price_elem)
        item_elem.append(count_box)
        count_box.append(minus, schet, plus)
        schet.append(count)
        price_elem.append(price, sale_price)

        // function 

        minus.onclick = () => {
            price_new = item_price * count_num
            item.price_new = price_new


            count_num -= 1
            count.innerHTML = count_num

            price.innerHTML = price_new + '$'

            total()
            console.log(cart);

        }

        plus.onclick = () => {
            if (count_num >= 10) {
                count_num = 10
            }
            count_num += 1
            count.innerHTML = count_num
            price_new = item_price * count_num
            price.innerHTML = price_new + '$'
            item.price_new = price_new
            total()
        }

        remove.onclick = () => {
            id = item.id
            cart = cart.filter(el => el.id !== id)
            reload_cart()
            total()
        }
    }
}

function total() {
    total_sum = cart.reduce((a, b) => {
        return a + b.price
    }, 0)
    total_sum_new = cart.reduce((a, b) => {
        return a + b.price_new
    }, 0)
    xamro = total_sum_new + total_sum
    total_price.innerHTML = xamro + '$'
    total_s.innerHTML = (total_sum * count_num) + '$'
}









cart_icon.onclick = () => {
    model_windov.style.display = 'contents'
    setTimeout(() => {
        cart_sect.style.opacity = '1'
    }, 300)
}

close.onclick = () => {
    cart_sect.style.opacity = '0'
    setTimeout(() => {
        model_windov.style.display = 'none'
    }, 400)
}