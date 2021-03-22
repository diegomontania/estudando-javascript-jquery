// lista de eventos de javascript
// https://developer.mozilla.org/pt-BR/docs/Web/Events
// https://www.w3schools.com/js/js_events.asp

// evento de keydown na página como um todo
document.onkeydown = function(){
    console.log('você apertou a tecla: ', KeyboardEvent.onkeydown);
}

// onclick, pegando elemento pelo id, 
// retornando o objeto do botao e atribuindo uma funcao
document.getElementById('meuBotao').onclick = function() {
    console.log("clicou no botao pelo dom!");
};

// mouseover
document.getElementById('meuBotao').onmouseover = function() {
    console.log("passou sobre o botao!");
};

// chamando pelo onClick no HTML, via atributo
function minhaFuncaoDeClick(){
    console.log("clicou no botão pelo 'onClick'");
}