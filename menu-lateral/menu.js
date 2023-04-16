
const list = document.querySelectorAll('.list')
const expandList = document.querySelector('#expandir')
const menu = document.querySelector('.navigation')

expandList.addEventListener('click',function(){
    menu.classList.toggle('expand')
})

function ativaLink(){
    list.forEach((item)=>
    item.classList.remove('ativo'))
    this.classList.add('ativo')
}

list.forEach((item)=>
    item.addEventListener('click',ativaLink))
