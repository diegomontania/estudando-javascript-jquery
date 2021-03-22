$(document).ready(function () {

    //#region EXERCICIO 1
    function RecebePaises(response) {  
        // para cada objeto de resposta, popule o dropdownlist
        // chave : cada elemento 'i' do array response
        $.each(response, function(chave){
            // console.log('o elemento de indice :', chave, 'tem o valor de :', response[chave].name);
            $('#paises').append(new Option(response[chave].name));
        });

        // console.log(response[0].name);
    }

    //faz requisição para api utilizando ajax
    function RequisitaInformacoesPaises(callback){

        $.ajax({
            // propriedades do ajax para a requisição
            type: "GET",
            url: "https://restcountries.eu/rest/v2/all",
            dataType: "json",
    
            // funcoes de retorno de resposta
            success: function (response) {
    
                // envia os dados para a funcao
                // console.log('propriedade do retorno javascript', response);
                callback(response);
               
            },
            error: function (error) {
                console.log(error);
            }
        });

    }

    // requisita as informações da api -- o programa começa aqui
    RequisitaInformacoesPaises(RecebePaises);

    //#endregion

    //#region EXERCICIO 2
    var cursos = [
        {
            "titulo": "PHP",
            "aval": []
        },
        {
            "titulo": "Javascript",
            "aval": [5,5,4.5,4,5,5,5,4.5]
        },
        {
            "titulo": "Python",
            "aval": [5,5,4,4,5,3,5,4,4,5]
        },
        {
            "titulo": "Machine Learning",
            "aval": [5,5,4.5]
        }
    ];

    function calculaMediaPorCurso(listaDeCursos)
    {   
        // onde, chave: representa o i do for 
        $.each(listaDeCursos, function(i){
            
            // recebe o máximo de avaliações por curso
            todasAsAvaliacoes = listaDeCursos[i].aval.length;

            // soma todas as avaliações dadas até o momento
            somaDeTodasAsAvaliacoes = listaDeCursos[i].aval.reduce((a, b) => a + b, 0);

            // executa a média das avaliações
            mediaDeAvaliacoes =  somaDeTodasAsAvaliacoes / todasAsAvaliacoes;

            // console.log(todasAsAvaliacoes, somaDeTodasAsAvaliacoes, mediaDeAvaliacoes);
            // console.log(listaDeCursos[1].aval.length);
            
            try {
            
                if (listaDeCursos[i].aval.length == 0){
                    throw 'O curso ' + listaDeCursos[i].titulo + ' não possui avaliações.';
                } else if (listaDeCursos[i].aval.length < 5){
                    throw 'O curso ' + listaDeCursos[i].titulo + ' não possui avaliações suficientes';
                } else {
                    console.log('Média de avaliações do curso', listaDeCursos[i].titulo, ':', mediaDeAvaliacoes.toPrecision(2));
                }
    
            } catch (error) {
                console.log(error);
            } 
        });
    }

    // chama funcao
    calculaMediaPorCurso(cursos);

    //#endregion
    
    //#region EXERCICIO 3


    //#endregion

    //#region  EXERCICIO 4

    // armazena as informações da resposta da api e valor escolhido pelo usuário
    var informacoesAPI;
    var pergunta;
    var respostaCorreta;
    var listaDeTodasAsRespostas;
    var valorEscolhido = '';

    function RecebeInformacoesAPI(response) {  

        let pergunta = response.results[0].question;
        let respostaCorreta =  response.results[0].correct_answer;
        let listaDeTodasAsRespostas = Object.values(response.results[0].incorrect_answers); //recebe as respostas erradas e convertendo a reposta de objet para array

        //adiciona a resposta certa a lista de respostas
        listaDeTodasAsRespostas.push(respostaCorreta);

        //embaralha, para evitar que a resposta correta seja sempre a última
        listaDeTodasAsRespostas = ShuffleArray(listaDeTodasAsRespostas);

        //console.log(pergunta);
        //console.log(respostaCorreta, listaDeTodasAsRespostas);

        return {
            pergunta: pergunta,
            respostaCorreta: respostaCorreta,
            listaDeTodasAsRespostas: listaDeTodasAsRespostas,
        };
    }

    //faz requisição para api utilizando ajax
    function RequisitaAPI(callback) {
        
        let retornoFuncaoCallBack;

        $.ajax({
            // propriedades do ajax para a requisição
            type: "GET",
            url: "https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple",
            dataType: "json",
            async: false,
            // funcoes de retorno de resposta
            success: function(response) {
                // console.log('propriedade do retorno javascript', response);

                // envia os dados para a funcao 'RecebeInformacoesAPI' após retorno da api 
                // e armazena o retorno da callback : 'RecebeInformacoesAPI', para retornar ao escopo principal do projeto
                // console.log('retorno da call back aqui 1', retornoFuncaoCallBack);
                retornoFuncaoCallBack = callback(response);
            },
            error: function (error) {
                console.log(error);
            },
        });

        return retornoFuncaoCallBack;
    }

    // utilizada para embaralhar um array
    function ShuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

    // para cada resposta, insira um radio button manipulando o doom na div "OpcoesDeResposta"
    // removendo os espaços no valor do elemento html, evitando espaços nas tags
    function InserePerguntasNoHTML(){
        $.each(listaDeTodasAsRespostas, function(value){
            $('#OpcoesDeResposta').append(
                '<input id=resposta'+ value +' type="radio" name="resposta" value='+ listaDeTodasAsRespostas[value].replace(/\s/g, '') +'><label id=resposta'+ value +' for="opcao'+ value + '">' + listaDeTodasAsRespostas[value] + ' </label><br>'
            );
        });
    }

    function AssociaValoresAPI(){
        // recebe o retorno das informações da api -- o programa começa aqui
        informacoesAPI = RequisitaAPI(RecebeInformacoesAPI);

        // associa as informações da api as variaveis do escopo do programa
        pergunta = informacoesAPI.pergunta;
        respostaCorreta = informacoesAPI.respostaCorreta;
        listaDeTodasAsRespostas = informacoesAPI.listaDeTodasAsRespostas;
    }

    //o programa começa aqui
    AssociaValoresAPI();

    // exibe a pergunta no html
    $('#pergunta').html('Pergunta: ' + pergunta);

    // Insere as perguntas da api
    InserePerguntasNoHTML();

    // pega a resposta selecionada
    $('#btn-confirma').click(function(){
        valorEscolhido = $("input[name='resposta']:checked").val();
        console.log(valorEscolhido);

        // remove espaço da resposta e testa se usuario escolheu a resposta correta
        if(valorEscolhido == respostaCorreta.replace(/\s/g, '')){
            
            // criar um metodo aqui para diminuir linhas
            $('#exibeMensagem').css("border", "5px solid #008000");
            $('#exibeMensagem').html('Acertou!');
            $('#exibeMensagem').css("display", "inline-block");
            $('#btn-jogarNovamente').css("display", "inline-block");

        } else {

            $('#exibeMensagem').css("border", "5px solid #ff0000");
            $('#exibeMensagem').html('Errou!');
            $('#exibeMensagem').css("display", "inline-block");
            $('#btn-jogarNovamente').css("display", "inline-block");
        }
    });

    //jogar novamente
    $('#btn-jogarNovamente').click(function(){
        // oculta botoes
        $('#exibeMensagem').css("display", "none");
        $('#btn-jogarNovamente').css("display", "none");

        // removendo os elementos do html
        $.each(listaDeTodasAsRespostas, function(value){
            $('#resposta'+ value).remove();     //remove opção
            $('#resposta'+ value).remove();     //remove label da opção
            $('#OpcoesDeResposta br').remove();
        });

        // recarrega página para jogar novamente
        location.reload();
    });

    //#endregion
});