// escopo

// variavel de escopo global (visivel em todo script)
var nome = 'diego';

function minhaFuncao(){
    var meuNome = 'patricia';
    console.log(meuNome);
}

//console.log(meuNome); // <- erro! meuNome é visivel apenas dentro da funcao 'minhaFuncao'   

// interessante :
// ao utilizar LET para definir variavel local, qualquer outro if, for, estrutura que tenha {},
// a variavel será local, dentro dessas chaves.

var meuArray = [];

// index aqui é uma variavel dentro dese escopo
for (let index = 0; index < meuArray.length; index++) {
    
    // index aqui também é outra variavel dentro desse escopo!
    for (let index = 0; index < meuArray.length; index++) {     
        //do your thing
    }  
}