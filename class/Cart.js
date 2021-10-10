class Cart{

    constructor(items,
                cartClass = 'cart',
                deleteClass = 'delete-button',
                 minusClass = 'minus-button',
                plusClass = 'plus-button',
                currency
               ){
                this.items = items;
                this.cartClass = cartClass;
                this.deleteClass = deleteClass;
                this.minusClass = minusClass;
                this.plusClass = plusClass;
                this.currency = 'UAH'
        }

    goodsPlus(art){
        this.items[art]['count']++;
    }

    goodsMinus(art){
        if(this.items[art]['count'] - 1 === 0){
            this.goodsDelete(art)
        }else{
            this.items[art]['count']--
        }
    }

    goodsDelete(art){
        delete this.items[art]
    }

    getTotal(){
        let total = 0;

        for(let key in this.items){
            total += this.items[key]['count'] * this.items[key]['price']
        }

        return total
    }


    render(){
        let cart = document.createElement('div');
        cart.classList.add(this.cartClass);
        let cartItem = '';

        for(let key in this.items){
            let goods = this.items[key];
            cartItem += `
            <div class="cart__item">
                <div class="cart__item-cell">
                    <button class="cart__button-delete ${this.deleteClass}" data-article="${key}">X</button>
                </div>
                <div class="cart__item-cell cart__item-image cart-image">
                    <img src="${goods.image}" class="cart__item-image" alt="watch">
                </div>
                <div class="cart__item-cell">
                    <h2 class="cart__item-title cart-title">Мужские часы Casio EF-527D-1AVEF</h2>
                </div>
                <div class="cart__item-cell">
                    <button class="cart__button-minus ${this.minusClass}" data-article="${key}">-</button>
                </div>
                <div class="cart__item-cell">
                    <span class="cart__item-count ">${goods.count}</span>
                </div>
                <div class="cart__item-cell">
                    <button class="cart__button-plus ${this.plusClass}" data-article="${key}">+</button>
                </div>
                <div class="cart__item-cell">
                    <span class="cart__item-total">${goods.count * goods.price} ${this.currency}</span>
                </div>
            </div>
            `
            cart.innerHTML = cartItem
        }

        let totalSum = document.createElement('div');
        totalSum.classList.add('cart__total-sum');
        totalSum.innerHTML = `<b>Total:</b><span>${this.getTotal()}</span><span class="currency">${this.currency}</span>`;
        cart.append(totalSum);
      
        return cart
    }



    

        
}