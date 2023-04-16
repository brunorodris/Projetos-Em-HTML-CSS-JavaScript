const cookies = document.getElementById('cookies')

function lgpd(){
    localStorage.msgCookies = 'sim'
    cookies.classList.remove('mostrar')
}

if(localStorage.msgCookies == 'sim'){
    cookies.classList.remove('mostrar')
}else{
    cookies.classList.add('mostrar')
}
