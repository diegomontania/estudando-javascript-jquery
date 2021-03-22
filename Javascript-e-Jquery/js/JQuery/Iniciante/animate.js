$(document).ready(function () {

    // animacoes no jquery
    // onde o primeiro argumento é um objeto e o segundo pode ser um tempo
    // $('elemento').animate({propriedade: valor}, velocidade, callback);

    // propriedades css que possuem - (traço) devem ser utilizadas com camelCase

    // clica no botão
    $('#animar').click(function(){

        // executa a animação em outro elemento
        $('#quadrado').animate({
            width: "100px",
            height: "100px",
            
        });

        $('#texto').animate({
            fontStyle: "15px" // camelCase!
        });

    });

});

