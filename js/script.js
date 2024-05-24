let cardOverflow = document.querySelector(".card__overflow")
let cartMenu = document.querySelector(".cart__menu")
let html = document.querySelector("html")

cartMenu.addEventListener("click", ()=>{
    cardOverflow.classList.toggle("display")
    html.classList.toggle("overflow")
})