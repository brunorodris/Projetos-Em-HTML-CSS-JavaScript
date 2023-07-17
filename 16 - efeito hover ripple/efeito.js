
var btn = document.querySelector(".button");

btn.onmousemove = function(e){
    var x = e.pageX - btn.offsetLeft;
    var y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--eixoX', x + 'px')
    btn.style.setProperty('--eixoY', y + 'px')
}