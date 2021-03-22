console.log("################# metodosEmObjetos.js #################");

//declara um OBJETO LITERAL com funcao
var meuObjetoLiteralComMetodo = {

    'nome' : 'diego',
    'idade' : 12,

    // declarando metodo sem retorno
    'meuMetodo' : function() {
        console.log('metodo chamado');
    },

    // declarando metodo com retorno
    'meuMetodoComRetorno' : function() {
        var meuValor = 'valor retornado do metodo';
        return meuValor;
    },

    // declarando metodo com retorno
    'meuMetodoComParametro' : function(numero1, numero2) {
        var resultado = numero1 + numero2;
        return resultado;
    },

    'meuMetodoQueRetornaPropriedade' : function(){
        var nomeIdade = 'nome : ' + this.nome + ' idade: ' + this.idade;
        return nomeIdade
    }
};

//chamando metodo sem retorno
console.log(meuObjetoLiteralComMetodo.meuMetodo());
// metodo com retorno
console.log(meuObjetoLiteralComMetodo.meuMetodoComRetorno());
// metodo com parametros e retorno
console.log(meuObjetoLiteralComMetodo.meuMetodoComParametro(25, 28));
// metodo com retono de propriedades
console.log(meuObjetoLiteralComMetodo.meuMetodoQueRetornaPropriedade());

//declara um OBJETO COM CONSTRUTOR
var meuObjetoConstrutor = {

    meuConstrutor: function(nome, idade){
        this.nome = nome;
        this.idade = idade;
    },

    'meuMetodoComParametro' : function(numero1, numero2) {
        var resultado = numero1 + numero2;
        return resultado;
    }
}
// metodo com parametros e retorno
var instancia = meuObjetoConstrutor.meuMetodoComParametro(85, 22);
console.log(instancia);
