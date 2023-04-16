
let menuBox = document.querySelectorAll('.item-menu')

function page(){
    menuBox.forEach((item)=>
    item.classList.remove('ativo'))
    this.classList.add('ativo')
}

menuBox.forEach((item) =>
item.addEventListener('click',page))



let expBtn = document.querySelector('#expandir-btn')
let menuLateral = document.querySelector('.menu-lateral')

expBtn.addEventListener('click', function(){
    menuLateral.classList.toggle('expand')
})
