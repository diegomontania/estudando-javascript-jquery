// metodo que exibe as informações
function mostrar_informacoes_usuario(dados) {
    // convertendo os dados recebidos em json para um objeto javascript
    var dados_obj = JSON.parse(dados);

    // exibindo as informações
    // ou seja, se não passar parametro de busca por um usuário, mostre tudo
    if(dados_obj.id == undefined) {
        console.log(dados_obj);
    }
    else {
        console.log('o id do usuário é : ', dados_obj.id);
        console.log('o titulo do usuário é : ', dados_obj.title);
    }
}

// cria uma funcao que faz o request
function RequesitaInformacoes(callback, idUsuario = "") {

    // fazendo requisição ajax e enviando
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/" + idUsuario);
    xhttp.send();

    // recebendo a resposta, se status for 4 e resposta ok
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            //retona a resposta para uma outra funcao (callback)
            callback(this.responseText); 
        }
    };
}

// chama metodo que faz requisição que por sua vez
// irá retornar um metodo 'callback' para a funcao que de fato
// vai exibir as informações para o usuário
RequesitaInformacoes(mostrar_informacoes_usuario);



