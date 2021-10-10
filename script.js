if(localStorage.getItem('Cart')){
    let items = JSON.parse(localStorage.getItem('Cart'));
    let cart = new Cart(items);
    let cartWrapper = document.querySelector('.wrapper-cart');
    cartWrapper.innerHTML = ''
    cartWrapper.append(cart.render())

    cartWrapper.addEventListener('click', (event) =>{
        let target = event.target;
        console.log(target)

        if(target.classList.contains('minus-button')){

            cart.goodsMinus(target.dataset['article']);
            cartWrapper.innerHTML = '';
            cartWrapper.append(cart.render());
            localStorage.setItem('Cart', JSON.stringify(cart.items));

        }else if(target.classList.contains('plus-button')){

            cart.goodsPlus(target.dataset['article']);
            cartWrapper.innerHTML = '';
            cartWrapper.append(cart.render())
            localStorage.setItem('Cart', JSON.stringify(cart.items))

        }else if(target.classList.contains('delete-button')){
            cart.goodsDelete(target.dataset['article']);
            cartWrapper.innerHTML = '';
            cartWrapper.append(cart.render());
            localStorage.setItem('Cart',JSON.stringify(cart.items));
        }

    })
}

