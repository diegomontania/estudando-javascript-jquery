// evento ready do ajax
$(document).ready(function () {

    // insere os dados da api no html
    function RecebeDados(resposta) {
        $('#id_usuario').html(resposta.id);
        $('#title_usuario').html(resposta.title);
        $('#completed_usuario').html(resposta.completed.toString());
    }

    //criando uma requisição ajax com o jquery
    $.ajax({

        // propriedades do ajax para a requisição
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/todos/1",
        dataType: "json",

        // funcoes de retorno de resposta
        success: function (response) {

            // envia os dados para a funcao
            RecebeDados(response);

            console.log(response.id);
            console.log('propriedade do retorno javascript', response.title);
        },
        error: function (error) {
            console.log(error);
        }
    });

    // outra forma, utilizando metodos em cadeia 
    // .done : ao finalizar tem a resposta 
    // .fail : se falhar também retorna a resposta
    $.ajax({

        // propriedades do ajax para a requisição
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/todos/10",
        dataType: "json",
    
    // funcoes de retorno de resposta
    }).done(function (response) {
        console.log(response);
        console.log('propriedade do retorno javascript', response.title);
    }).fail(function (error) {
        console.log(error);
    });

});