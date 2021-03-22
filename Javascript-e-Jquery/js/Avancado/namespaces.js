// https://desenvolvimentoparaweb.com/javascript/javascript-module-pattern-padrao-modulo/

// namespaces não existem em javascript (baseado no que o instrutor disse)
// logo, existem alguns comportamentos que podem ser 'simulados' para chegar
// em um resultado igual a de um namespace comum em qualquer outra linguagem de programação

// criando um objeto e chamando suas propriedades a partir dele
// ou seja, criando um namespace 'objeto.propriedade'
var meuWebAppObjeto = {

    'nome': 'diego',

    'ver_nome': function(){
        console.log(meuWebAppObjeto.nome);
    }

}
console.log(meuWebAppObjeto.ver_nome());

// criando uma funcao para criar namespaces
// utilizando padrão de modulos a vantagem é que ao utilizar uma funcao,
// você faz uma especie de 'encapsulamento' nas propriedades dentro dessa funcao
var meuWebAppFuncao = (function(){

    var nome = "Felipe";

    return{
        'get_nome': function () { 
            return nome;
        },
        'set_nome': function (novo_nome) {  
            nome = novo_nome;
        }
    }

})();

// meuWebAppFuncao.nome = 'teste' // <- isso aqui não funciona, pois seria necessario chamar o metodo
console.log('meu nome é', meuWebAppFuncao.get_nome());
meuWebAppFuncao.set_nome('diego');
console.log('meu nome é', meuWebAppFuncao.get_nome());