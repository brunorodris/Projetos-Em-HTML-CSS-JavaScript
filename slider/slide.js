
//Vairiáveis
var radio = document.querySelector('.manual-btn'); //pega os botões para a navegação manual
let count = 1; //contador de slide

document.getElementById('radio1').checked = true; //marca como verificado os input tipo radio

// intervalo entre uma imagem e outra
setInterval(()=>{
    nextImage();
},5000)

// função que faz a rolagem da imagem
function nextImage(){
    count++;
    if (count > 3){
        count = 1;
    }
    // marca o radio responsável pela imagem
    document.getElementById('radio'+count).checked = true;
}
