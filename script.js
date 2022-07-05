
let freshBurgerPrice = 20500;
let product = {
    plainBurger: {
        name: 'Гамбургер простой',
        price: 10000,
        kcall: 400,
        amount: 0,
        descr: 'Встречайте простой ГАМБУРГЕР. Он не сочный и не сытный за то дешевый',
        img: 'images/product2.jpg',
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    },

    freshBurger: {
        name: 'Гамбургер FRESH',
        price: 20500,
        kcall: 800,
        amount: 0,
        descr: 'Встречайте Фрешмена FAS FOOD`а. Он набрал в себя всё самое старое.',
        img: 'images/product1.jpg',
        get SUMM() {

            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 1100,
        amount: 0,
        descr: 'FRESH и Картошка фри. Тот же самый FRESH и Фри объяденились.',
        img: 'images/product3.jpg',
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    },

    BestBurger: {
        name: 'Самый лучший бургер',
        price: 40900,
        kcall: 2000,
        amount: 0,
        descr: 'Самый топовый бургер в Ташкенте',
        img: 'https://images6.alphacoders.com/831/thumb-1920-831475.jpg',
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    },

    BestBurger: {
        name: 'Самый лучший бургер',
        price: 40900,
        kcall: 2000,
        amount: 0,
        descr: 'Самый топовый бургер в Ташкенте',
        img: 'https://images6.alphacoders.com/831/thumb-1920-831475.jpg',
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    },

    BestBurger: {
        name: 'Смыйа лучший бургер',
        price: 40900,
        kcall: 2000,
        amount: 0,
        descr: 'Самый топовый бургер в Ташкенте',
        img: 'https://images6.alphacoders.com/831/thumb-1920-831475.jpg',
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    },

    BestBurger: {
        name: 'Самый лучший бургер',
        price: 40900,
        kcall: 2000,
        amount: 0,
        descr: 'Самый топовый бургер в Ташкенте',
        img: 'https://images6.alphacoders.com/831/thumb-1920-831475.jpg',
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    },

    tBurger: {
        name: 'Самый лучший FREAH COMBO',
        price: 79000,
        kcall: 2000,
        amount: 0,
        descr: 'Самый топовый FRESH COMBO с картошкой и pepsi',
        img: 'https://sillburger.ee/wp-content/uploads/2021/04/sillburger_product91.jpg',
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    },

    Buger: {
        name: 'Самый отличный FRESH',
        price: 90990,
        kcall: 2000,
        amount: 0,
        descr: 'Самый топовый FRESH в Ташкенте',
        img: 'https://i.ytimg.com/vi/GwLCdlCOKiE/maxresdefault.jpg',
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    }


}

let extraProduct = {
    doubleMayonnaise: {
        name: 'Двойной майонез',
        price: 2000,
        kcall: 100,
        amount: 0
    },
    lettuce: {
        name: 'Салатный лист',
        price: 4000,
        kcall: 20,
        amount: 0
    },
    cheese: {
        name: 'Сыр',
        price: 5000,
        kcall: 130,
        amount: 0
    },
}







let result = '';

function createProduct() {
    let main = document.querySelector('.main');
    for (let key in product) {
        let {
            name,
            price,
            descr,
            img
        } = product[key];
        result += `<article class="main__product" id="${key}">
        <div class="main__product-preview">
            <div class="main__product-info">
                <img src="${img}" alt="" class="main__product-img">
                <h2 class="main__product-title">${name}
                    <span class="main__product-many">${price} сум</span>
                </h2>
            </div>
            <p class="main__product-descr">
                ${descr}
            </p>
        </div>
        <div class="main__product-extra">
            <div class="main__product-number">
                <a class="main__product-btn fa-reg minus" data-symbol="-"></a>
                <output class="main__product-num">0</output>
                <a class="main__product-btn fa-reg plus" data-symbol="+"></a>
            </div>
            <div class="main__product-price"><span>0</span> сум</div> 
        </div>
        <div class="main__product-extraProduct">`;
        for (let newKey in extraProduct) {
            result += ` <label class="main__product-label">
                <input type="checkbox" class="main__product-checkbox" data-extra="${newKey}">
                <span class="main__product-check"></span>
                ${extraProduct[newKey].name}
            </label>`;
        }
        result += `</div>
                    <div class="main__product-kcall"><span>0</span> калорий</div> 
                    </article>`;
    }

    main.innerHTML = result
    let productItems = document.querySelectorAll('.main__product-info');
    let view = document.querySelector(".view");
    productItems.forEach((item) => {
        item.addEventListener("dblclick", () => {
            let productImageSrc = item.querySelector(".main__product-img").getAttribute('src')
            view.querySelector('.view__image').setAttribute("src", productImageSrc)
            view.classList.add("active");
        })
    })
    let viewClose = document.querySelector(".view__close");
    viewClose.addEventListener("click", () => {
        view.classList.remove("active");
    })
    logic()
}

setTimeout(() => createProduct(), 5000);

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function logic() {

    let btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
        checkExtraProduct = document.querySelectorAll('.main__product-checkbox'),
        addCart = document.querySelector('.addCart'),
        receipt = document.querySelector('.receipt'),
        receiptWindow = document.querySelector('.receipt__window'),
        receiptOut = document.querySelector('.receipt__window-out'),
        receiptBtn = document.querySelector('.receipt__window-btn');

    btnPlusOrMinus.forEach((btn) => {
        btn.addEventListener('click', function () {
            plurOrMinus(this)
        })
        let interval = 0;
        btn.addEventListener('mouseup', function () {
            clearInterval(interval)
        })

        btn.addEventListener('mousedown', function () {
            interval = setInterval(() => plurOrMinus(this), 100)
        })
    })

    function plurOrMinus(element) {
        // closest() - подключаеться к ближайшему заданому родителю
        // getAttribute() - берет значение указаного атрибута
        let parentId = element.closest('.main__product').getAttribute('id')
        let amount = element.closest('.main__product').querySelector('.main__product-num');
        let price = element.closest('.main__product').querySelector('.main__product-price span');
        let kcall = element.closest('.main__product').querySelector('.main__product-kcall span');

        if (element.getAttribute('data-symbol') == '+') {
            product[parentId].amount++
        } else if (element.getAttribute('data-symbol') == '-' && product[parentId].amount > 0) {
            product[parentId].amount--
        }

        amount.innerHTML = product[parentId].amount
        price.innerHTML = numberWithSpaces(product[parentId].SUMM);
        kcall.innerHTML = product[parentId].KCALL
    }

    checkExtraProduct.forEach(product => {
        product.addEventListener('click', function () {
            addExtraProduct(this)
        })
    })

    function addExtraProduct(el) {
        let parent = el.closest('.main__product');
        let parentId = parent.getAttribute('id');
        let amount = el.closest('.main__product').querySelector('.main__product-num');
        product[parentId][el.getAttribute('data-extra')] = el.checked;

        let price = parent.querySelector('.main__product-price span');
        let kcall = parent.querySelector('.main__product-kcall span');
        let elData = el.getAttribute('data-extra');

        if (product[parentId][elData] == true) {
            product[parentId].price += extraProduct[elData].price
            product[parentId].kcall += extraProduct[elData].kcall
            product[parentId].amount += extraProduct[elData].amount
        } else {
            product[parentId].price -= extraProduct[elData].price
            product[parentId].kcall -= extraProduct[elData].kcall
            product[parentId].amount -= extraProduct[elData].amount
        }
        price.innerHTML = numberWithSpaces(product[parentId].SUMM);
        kcall.innerHTML = numberWithSpaces(product[parentId].KCALL);
        price.innerHTML = numberWithSpaces(product[parentId].price);
        // console.log(product[parentId].price);
    }
    



    let korzina = [],
        totalName = '  ',
        totalAmount = 0,
        totalPrice = 0,
        totalKcall = 0;

    addCart.addEventListener('click', () => {
        for (let key in product) {
            let burgers = product[key]
            if (burgers.amount > 0) {
                korzina.push(burgers)
                for (let newKey in burgers) {
                    if (burgers[newKey] === true) {
                        // '\n' - Экранирование он переносит наш элемент на след строку
                        burgers.name.amount += '\n' + extraProduct[newKey].name.amount
                        //    burgers.amount +=  + extraProduct[newKey].amount
                    }
                }
            }
            burgers.price = burgers.SUMM;
            burgers.kcall = burgers.KCALL;
            //    burgers.output = burgers.amount;
        }

        korzina.forEach(item => {
            totalName += '\n' + item.name;
            totalAmount += Number(item.amount)
            totalPrice += item.price
            totalKcall += item.kcall
            // totalOutput +=  '\n' + item.amount ;
        })

        receipt.style.display = 'flex';
        setTimeout(() => receipt.style.opacity = '1', 100);
        setTimeout(() => receiptWindow.style.top = '0', 200);
        receiptOut.innerHTML += `<h4 class ="you ">Ваш заказ:
        </h4>`;

        // receiptOut.innerHTML = `Ваш заказ:`+` <h5 class = "result"> \n  <span>${totalName}</span>${totalAmount} штук \n  </h5>` + `Каллорийность: ${totalKcall} Общая сумма: ${totalPrice}сумм`;
        // receiptOut.innerHTML += `
        // let massiv = ['Гамбургер простой','Гамбургер FRESH','FRESH COMBO','Самый лучший бургер',]
        let indMas = [1, 2, 3, 4, 5, 6, 7];

        korzina.forEach((item, index) => {
            receiptOut.innerHTML += `<p class = "Out"><b class = "name">${indMas[index]}.</b> ${item.name}.<br><b class = "piege">Кол-во: </b> ${item.amount} <b class = "price"> сумма: </b>  ${numberWithSpaces(item.price)}
            </p>`

        })
        receiptOut.innerHTML += `\n<p class = "total"><b class = "das">Калорийность:</b> ${numberWithSpaces(totalKcall)}kal.<br><b class = "das">Общая сумма:</b> ${numberWithSpaces(totalPrice)}сум</p>`
        let amount = document.querySelectorAll('.main__product-num'),
            price = document.querySelectorAll('.main__product-price span'),
            kcall = document.querySelectorAll('.main__product-kcall span');

        for (let i = 0; i < amount.length; i++) {
            amount[i].innerHTML = 0;
            price[i].innerHTML = 0;
            kcall[i].innerHTML = 0;
        }
    })


    receiptBtn.addEventListener('click', () => location.reload())

    let lvl = document.querySelector('.header__timer-extra');

    function timer() {
        if (lvl.innerHTML < 100) {
            lvl.innerHTML++
            setTimeout(() => timer(), 200)
        }
    }
    timer()
}