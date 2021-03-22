// botao adicionando classe dinamicamente pelo jquery
$("#btn_adicionar_classe").click(function(){
    $("#paragrafo-classes").addClass("styling");
});

// removendo uma classe dinamicamente pelo jquery
$("#btn_remover_classe").click(function(){
    $("#paragrafo-classes").removeClass("styling");
});

// alternando entre classe e outra dinamicamente pelo jquery
$("#btn_alternar_classe").click(function(){
    $("#paragrafo-classes").toggleClass("styling");
});