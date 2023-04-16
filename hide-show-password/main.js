function mostrar(){
    let showSenha = document.getElementById('senha')
    let btnSenha = document.getElementById('btn-senha')

    if(showSenha.type === 'password'){
        showSenha.setAttribute('type','text')
        btnSenha.classList.replace('bi-eye', 'bi-eye-slash')
    }else{
        showSenha.setAttribute('type','password')
        btnSenha.classList.replace('bi-eye-slash','bi-eye')
    }
}