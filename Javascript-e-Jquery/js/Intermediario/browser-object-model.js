console.log("#################### browserObjectModel.js ####################");

// Browser Object Model, representa a janela do browser.
// Utilizado basicamente para interagir com o navegador e suas propriedades.
// ex : tamanho e posição de janela, barra de rolagem, etc

// https://www.w3schools.com/js/js_window.asp
// https://www.todoespacoonline.com/w/2014/04/bom-em-javascript/

// promp é um alert que recebe valores digitados pelo usuário
// console.log(prompt('meh'))

// largura e altura da tela
console.log('altura: ', window.innerHeight, 'largura: ', window.innerWidth);

// pega posição do mouse com o event.
//  porem esse 'event' poderia ser qualquer outra coisa.
window.onmousemove = function(event) {
    //console.log('posicao do mouse X: ', event.pageX);
    //console.log('posicao do mouse Y: ', event.pageY);
}