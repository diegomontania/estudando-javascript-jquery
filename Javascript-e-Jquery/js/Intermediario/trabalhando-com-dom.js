// manipulando objetos do dom

// seleciona objeto pela ID e armazena seu conteudo em uma variavel
var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;
console.log(conteudo_caixa);

// muda o conteudo diretamente de um elemento
document.getElementById("caixa_amarela").innerHTML = conteudo_caixa;

// mudando um elemento, inserindo html diretamente em um elemento do dom
document.getElementById("caixa_amarela").innerHTML = '<h1>' + conteudo_caixa + '</h1>'