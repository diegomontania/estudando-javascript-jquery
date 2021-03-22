$(document).ready(function(){

    // O QUE É CALL BACK?
    // callback : é um evento que acontece após a primeira ação ser executada
    // ex: $('elemento').hide(velocidade, callback);

    // sem utilizar callback, apenas chamando sequencialmente uma ação após a outra
    $('#botao-esconder').click(function(){
        //this : está substituindo '#botao-esconder'
        $(this).hide();
        $('#texto-escondido').show();
    });

    // utilizando callback, aguardando X segundos para chamar a outra ação.
    // caso não tenha x segundos a segunda ação só será executada quando a primeira terminar
    $('#botao-esconder-callback').click(function(){
        
        var segundos = 1000;
        
        //primeira ação, esconde o botao
        $(this).hide(segundos, function(){

            // segunda ação, mostra o texto
            $('texto-escondido-callback').show();
        });
        
    });
});

