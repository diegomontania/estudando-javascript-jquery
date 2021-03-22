console.log("################# on-event-change.js #################");

// ##########  LISTA-OPCOES  ########## 
document.getElementById('lista-opcoes').onchange = function(){

    // recebe diretamente o valor selecionado da lista de opções
    var lista_opcoes = document.getElementById('lista-opcoes');

    // retorna para um elemento do html
    console.log(lista_opcoes.options[lista_opcoes.selectedIndex].text);
}

// ##########  CHECK-BOX  ########## 
// recebe todas as checkbox em um variavel que irá ser um array
var checkBox = document.getElementsByName('interesse');

// para cada checkbox
for (let i = 0; i < checkBox.length; i++) {

    // aqui checa ao qual mudou
    checkBox[i].onchange = function(){
        console.log(checkBox[i].checked);   // verifica se foi 'checado'
        console.log(checkBox[i].value);     // recebe o valor
    };
    
}