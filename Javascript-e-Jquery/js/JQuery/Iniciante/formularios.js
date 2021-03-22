// pegando valores de um campo de input com o jquery
var valorDoCampo = $('#campo_nome').val();
console.log('pegando valor do campo utilizando metodo val()', valorDoCampo);

// pegando valores de uma dropdownlist
// primeiro pegando o id e utilizando o metodo 'find' para 
// checar qual dropdown foi selecionado. 
// Após isso requisita o texto do que foi selecionado
var dropDownSelecionado = $('#options').find(':selected').text();
console.log('dropdownselecionado ao iniciar:', dropDownSelecionado);

// recebendo o valor do dropdownlist
$('#options').change(function(){
    var novo_selecionado = $('#options').find(':selected').text();
    console.log(novo_selecionado);
});

// recebendo o valor com radio button selecionado
var valorRadioButton = $("input[name='genero']:checked").parent('span').text();
console.log('radio button selecionado', valorRadioButton);

// recebendo valores dos checkboxes
// detecta no onchange as checkbox selecionadas
$("input[name='interesse']").change(function(){

    // armazena em um array todas as checkboxes selecionadas
    var checkboxes_selecionadas = $("input[name='interesse']:checked");
    console.log(checkboxes_selecionadas);

    var textoDosChecksSelecionados = [];

    //faz loop entre os selecionados
    $.each(checkboxes_selecionadas, function(index, value){

        // insere dentro de uma nova lista com o método .push os checks selecionados
        textoDosChecksSelecionados.push($(value).parent("span").text());
    });

    console.log(textoDosChecksSelecionados);
});


