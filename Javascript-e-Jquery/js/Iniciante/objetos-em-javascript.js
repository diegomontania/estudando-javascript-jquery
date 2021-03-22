console.log("#################### objetoEmJS.js ####################");

// https://www.w3schools.com/js/js_object_constructors.asp
// https://klauslaube.com.br/2011/10/23/javascript-constructor-function-object-literal.html

//definindo um objeto simples (objeto literal)
var meuObjeto = {
    'nome' : 'diego',
    'idade' : 12,
    'altura' : 1.85,
    'estaTrabalhando' : true
};

// mostra todos as propriedades do objeto
console.log('exibe propriedades do objeto:', meuObjeto);

// formas diferentes de pegar uma propriedade um objeto
console.log('acessando de maneira padrao: ', meuObjeto.nome);
console.log('usando chaves: ', meuObjeto['nome']);

// mudando os valores das propriedades de um objeto
meuObjeto.nome = 'carlos';
meuObjeto.idade = 25;
console.log('exibe propriedades do objeto após mudança:', meuObjeto);

//##################### OBJETOS E CONSTRUTORES ##################### 

// Então, quando você tiver um tipo que possuirá várias instâncias, 
// utilize 'constructor functions'. Quando quiser criar objetos “estáticos”, 
// que não sofrerão alterações no decorrer de uma execução, 
// (como o exemplo do namespace) utilize object literal.

// objeto com construtor geralmente SE CRIA uma nova instancia
// objeto literal JÁ É uma instancia do javascript

//definindo objeto com construtor
var meuObjetoComConstrutor = {

    //construtor function com valores padrao nas propriedades
    meuObjetoComConstrutor: function(nome = 'diego', idade = 26){
        this.nome = nome;
        this.idade = idade;
    }
};

// exibe no console
var instanciaObjeto = new meuObjetoComConstrutor.meuObjetoComConstrutor();
console.log('objeto c/ constructor function: ', instanciaObjeto);

//----------------------------------------

// construtor literal
var meuObjetoComConstrutorLiteral = {

    // não possui nenhum tipo de declaracao apenas as propriedades direto no objeto
    'nome' : 'diego',
    'idade' : 26
};

// exibe no console
console.log('objeto c/ constructor literal: ', meuObjetoComConstrutorLiteral);