// funcoes callback
// Uma funcão que é passada para outra funcao como argumento.
// As funcoes callbacks são executadas ao final da execução que a chamou.
// ou seja, garantindo que alguma coisa antes termine de fato, para executar outra.

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

// passando uma funcao callback
chamar_usuario(
    function(user){ 
        console.log('olá', user.nome, '!'); 
    }
);

//#region chamando sem funcao callback
// parte de chamar a funcao normalmente
// function saudarUsuario(user) {  
//     console.log('olá', user.nome, '!');
// }

// //chamando funcao normalmente
// chamar_usuario(saudarUsuario);
//#endregion

