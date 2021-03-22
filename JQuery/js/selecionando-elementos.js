$(document).ready(function () {

    // selecionado via uma tag html
    // OBS: TAG HTML NÃO PRECISA DE '#'
    $('p').click(function(){
        console.log('você clicou em um elemento pela TAG HTML');
    });

    // selecionando por uma ID
    // OBS: ID PRECISA DE '#'
    $('#btn-click').click(function(){
        console.log('você clicou em um elemento pelo ID');
    });

    // selecionando por uma CLASSE CSS
    // OBS: CLASSE CSS PRECISA DO PONTO '.'
    $('.minhaClasseCSS').click(function(){
        console.log('você clicou em um elemento pela CLASSE CSS');
    });

    // selecionando por um SELETOR CSS COMPOSTO
    // OBS: atenção com os espaços entre os seletores
    $('#lista li.minhaClasseCSS').click(function(){
        console.log('você clicou em um elemento pelo SELETOR CSS COMPOSTO');
    });

    // selecionando todos os elementos com 'p' com classe 'mark'
    $("p.mark").css("background", "yellow");
  
    // selecionando apenas os elementos dentro de 'span' dentro da id 'mark'
    $("#mark span").css("background", "yellow");
  
    // Highlight li elements inside the ul elements
    $("ul li").css("background", "yellow");
  
    // Highlight li elements only inside the ul element with id mark
    $("ul#mark li").css("background", "red");
  
    // Highlight li elements inside all the ul element with class mark
    $("ul.mark li").css("background", "green");
  
    // Highlight all anchor elements with target blank
    $('a[target="_blank"]').css("background", "yellow");

    //seleionando com MULTIPLOS SELETORES, vários elementos no html
    $('.mark, .minhaClasseCSS').click(function(){
        console.log('você clicou em um elemento pelo SELETOR CSS COMPOSTO COM DOIS SELETORES');
    });

    // selecionado pelo atributo
    $('input[name=meuAtributo]').click(function(){
        console.log('você clicou em um elemento pelo SELETOR DE ATRIBUTO (name)');
    });

    // selecionando usando PSEUDO SELECTOR
    // OBS: utilizando 'seletor:seletor', onde os 2 pontos é importante
    $('#formulario:checked'); //selecionando apenas os elementos que estão checados dentro de um formulário
    // muitos exemplos aqui

});