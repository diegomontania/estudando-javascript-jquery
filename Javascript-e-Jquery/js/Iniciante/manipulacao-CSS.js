console.log("################# manupulacaoCSS.js #################");

// https://www.w3schools.com/jsref/prop_style_transform.asp

// clica no botão e altera seu próprio estilo
document.getElementById('meuBotaoAlteraCSS').onclick = function() {
    // propriedades que possuam : - devem ser chamadas com colchetes
    // o 'this' substitui o 'document.get...' quando você está referenciando o elemento do dom que tem a funcao
    this.style['background-color'] = "red";
    this.style.transform = 'rotate(180deg)';
};

// ##########  SELECIONA PEGANDO PELA TAGNAME DO HTML ########## 
// tags : h1, p, body, title, img, etc..

document.getElementById('botaoAlteraBackground').onclick = function(){

    // pega classe css aqui
    document.getElementsByTagName('BODY')[0].style['background-color'] = "purple";
}

// ##########  SELECIONA PEGANDO PELA CLASSE CSS ########## 

// retorna um array de elementos html pela classe css
var elementoComClasseCss = document.getElementsByClassName('minha-classe-css');
console.log(elementoComClasseCss);

// para referenciar um elemento em especifico, pode trabalhar como se fosse um array
console.log('pegando o texto na posicao 0 do "array de elementos html": ', elementoComClasseCss[0].innerHTML);