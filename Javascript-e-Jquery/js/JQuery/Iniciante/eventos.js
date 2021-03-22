// https://api.jquery.com/category/events/
// Antes de escrever qualquer codigo é uma boa pratica chamar o evento .ready.
// ou seja, todo código em js só será executado quando toda a página estiver carregada 
// $(function(){}) é uma segunda forma de chamar isso
$(document).ready(function () {
    
    // evento 'on' chama qualquer evento
    $("elemento").on("evento", function () {
        //seu codigo de manipulacao aqui
    });

    // evento 'on', também permite manipular varios eventos ao mesmo tempo
    $("#elementoTestaEventoOn").on({
        
        // evento que checa mudandças no elemento
        keyup: function () { 
            // recebe o valor do campo
            var valorInserido = $("#elementoTestaEventoOn").val();

            // verifica se recebeu algum valor
            if(valorInserido){
                $("#btn-confirmar").css("display", "initial");
            }
            else{
                $("#btn-confirmar").css("display", "none");
            }
        },
        click: function() { // evento click
            // console.log(typeof(valorInserido));
            //console.log("olá estou clicando no elemento");
        },
        mouseenter: function () { // evento 'mouseover'
            //console.log("olá estou com o mouse no elemento");
        },
        mouseleave: function () { // evento 'mouseout'
            //console.log("olá estou sem o mouse no elemento");
        },
        blur: function() {
            // alert( "Handler for .blur() called." );
        }
    });
});
