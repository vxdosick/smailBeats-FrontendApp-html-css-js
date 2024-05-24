let cardOverflow = document.querySelector(".card__overflow")
let cartMenu = document.querySelector(".cart__menu")
let html = document.querySelector("html")
let mainContainer = document.querySelector(".main__container")

cartMenu.addEventListener("click", ()=>{
    cardOverflow.classList.toggle("display")
    html.classList.toggle("overflow")
})
beats.forEach((elem)=> {
    mainContainer.innerHTML += `
    <div class="main__item">
        <center>
            <img class="main__img" src=${elem.img} alt="shop product">
        </center>
        <div class="main__header">
            <h2 class="main__title">${elem.name}</h2>
            <p>max ${elem.max}</p>
        </div>
        <p class="main__info">${elem.subtitle}</p>
        <div class="main__footer">
            <div class="main__interaction">
                <i class="fa-solid fa-heart"></i>
                <i onClick="addToCart(${elem.id})" class="fa-solid fa-cart-shopping"></i>
            </div>
            <p class="main__footer-price">${elem.price}$</p>
        </div>
    </div>
    `
})

let cardMain = document.querySelector(".card__main")

let shopCart = []
function addToCart(id) {
    let findElem = shopCart.find((elem)=> elem.id == id)
    if(findElem) {
        findElem.count++
    } else {
        let element = beats.find((el)=> el.id == id)
        shopCart.push({
            ...element,
            count: 1
        })
    }
    console.log(shopCart);
    updateCart()
}
function updateCart() {
    cardMain.innerHTML = ''
    shopCart.forEach((element)=> {
        cardMain.innerHTML += `
        <div class="card__main-item">
            <button class="card__close">&#10006;</button>
            <div class="card__main-header">
                <img src=${element.img} alt="cart image">
                <h3 class="card__main-title">${element.name}</h3>
            </div>
            <p class="card__main-subtitle">${element.subtitle}</p>
            <div class="card__amount">
                <button onClick="changeCount('-', ${element.id})">-</button>
                <p class="card__count">${element.count}</p>
                <button onClick="changeCount('+', ${element.id})">+</button>
            </div>
        </div>
        `
    })
}
function changeCount(action, id) {
    let item = shopCart.find((elem)=> elem.id == id)
    if(action == "-" && item.count > 1) {
        item.count--
    } else if(action == "+" && item.count < item.max) {
        item.count++
    }
    updateCart()
}
let headerSearch = document.querySelector(".header__search input")

window.addEventListener("resize", ()=> {
    if (window.innerWidth < 500) {
        headerSearch.placeholder = ""
    } else if (window.innerWidth > 500) {
        headerSearch.placeholder = "Enter beats name"
    }
})
