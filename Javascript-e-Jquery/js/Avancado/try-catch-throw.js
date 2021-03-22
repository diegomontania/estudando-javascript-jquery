// cria um objeto
var usuario = {
    'nome' : 'João'
};

// aguarda X segundos para executar o que está aqui dentro
// ou seja, simulando apenas um algum "processamento"
function chamar_usuario(minhaFuncaoCallBack){

    window.setTimeout(function(){  
       
        // apos o processamento chama a funcao callback que foi passada
        minhaFuncaoCallBack(usuario);

    }, 2000); // aguarda 2 segundos
}

// passando uma funcao callback, ou seja, irá executar o console após o termino da funcao
// "chamar usuario"
try {

    //throw pode ser utilizado para lançar exceção antes de executar
    if(user.nome == ''){
        throw 'mensagem de erro, nome em branco!';
    }

    chamar_usuario(function(user){ 
        console.log('olá', user.nome, '!'); 
    });
} 
catch (error) {
    console.log(error); // error recebe a string que for recebida pelo throw

} 
finally { // executa sempre ao final tendo erro ou não
    console.log("comando sempre será executado!");
}



