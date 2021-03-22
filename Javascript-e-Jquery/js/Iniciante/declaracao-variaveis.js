// tipos de mensagem alert e console
// alert("Mensagem enviada pelo alert");
console.log("Hello world");

// definindo variaveis
var nome = 'diego';
var sobreNome = 'montania'
var idade = 12;
var altura = 1.85;
var estaChovendo = true;

console.log(nome, sobreNome, idade, altura, estaChovendo);

// pegando um caractere de uma string em uma posicao
console.log('pegando a primeira letra da variavel "nome" : ' , nome[0]);
console.log('pegando o tamanho de uma string : ', nome.length);

// operações matematicas
var num1 = 25;
var num2 = 40;
var media = (num1 + num2) * 2;
console.log(media);

// utilizando objeto math
console.log(Math.pow(2, 4));

// iguais 
// == : compara os valores
// === : compara os valores e o tipo das variaveis

// typeof : chega o tipo da variavel 
var minhaVariavel = 'olá eu sou uma string';
console.log(typeof minhaVariavel);

// undefined : se uma variavel é criada mas não possui nenhum tipo
// ou também indica algo que não existe, seja uma posição de array, propriedade de um objeto, etc
var minhaVariavelSemTipo;
console.log(minhaVariavelSemTipo);

// null : indica ausencia de algum valor, ou utilizada para zerar um valor de variavel
var minhaVariavelNula = null;
console.log(minhaVariavelNula);

