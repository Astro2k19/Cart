const cart = {
    "p92779": {
        "name": "Мужские часы CASIO G-2900F-8VER",
        "url": "#",
        "image": "./images/casio-g-2900f-8ver_images_1650372917.jpg",
        "price": 1720.00
    },
    "p93039": {
        "name": "Мужские часы CASIO AE-1000W-1AVEF",
        "url": "#",
        "image": "./images/casio-ae-1000w-1avef_images_1675943357.jpg",
        "price": 872.00
    },
    "p63553250": {
        "name": "Наручные часы Casio W-800H-1AVES",
        "url": "#",
        "image": "./images/63553250_images_9154502355.jpg",
        "price": 484.00
    },
    "p93127": {
        "name": "Мужские часы CASIO EF-552-1AVEF",
        "url": "#",
        "image": "./images/casio-ef-552-1avef_images_1583730891.jpg",
        "price": 2880.00
    },
    "p79946990": {
        "name": "Мужские часы Casio EF-527D-1AVEF",
        "url": "#",
        "image": "./images/79946990_images_11571324122.jpg",
        "price": 4238.00
    },
    "p6533206": {
        "name": "Мужские часы CASIO SGW-100-2BER",
        "url": "#",
        "image": "./images/6533206_images_1657626044.jpg",
        "price": 2416.00
    },
}

let goods = document.querySelector('.goods');

let out = ``;

let data = {};

for(let key in cart){
out+= `<div class="goods__col">
         <div class="good__item">
             <h2 class="good__title">${cart[key].name}</h2>
             <div class="good__img">
                  <img src="${cart[key].image}" alt="">
             </div>
             <div class="good__price">${cart[key].price} UAH</div>
            <a class="good__btn btn" data-article="${key}" href="">в корзину</a>
          </div>
     </div>`
}

goods.innerHTML = out;


goods.addEventListener('click', (event) =>{
    event.preventDefault()
    if(event.target.classList.contains('good__btn')){
        let article = event.target.dataset['article'];
        if(data[article]){
            data[article].count++;
        }else{
            data[article] = cart[article]
            cart[article].count = 1;
        }
    }

    localStorage.setItem('Cart', JSON.stringify(data))
})

function Person(name, gender){
    this.name = name;
    this.gender = gender;
}

function  Teacher(name, gender){
    Person.call(this, name, gender);
}

let teach = new Teacher()

console.log(teach)