console.log("#################### formularioJS.js ####################");

//##################### DROP DOWN LIST ##################### 
// utilizando botão para selecionar receber o valor de option list
document.getElementById('mostrar_opcao').onclick = function(){
    // MetodoComplexoRetornaValorSelecionado();
    // MetodoSimplesRetornaOpcaoSelecionada();
    RetornaValorSelecionado();
}

// aqui pega as informações objeto por objeto até chegar ao resultado do valor
function MetodoComplexoRetornaValorSelecionado(){
    // recebe a lista de opções do form, armazenando em um array
    var lista_opcoes = document.getElementById('lista-opcoes');
    
    // recebe o index da opção selecionada
    var indice_selecionado = lista_opcoes.options.selectedIndex;
    console.log(indice_selecionado);

    //recebe o valor selecionado de fato
    var valor_selecionado = lista_opcoes.options[indice_selecionado].innerHTML;
    console.log(valor_selecionado);
    
    // retorna para um elemento do html
    document.getElementById('opcao_selecionada').innerHTML = valor_selecionado;
} 

function RetornaValorSelecionado (){
    // recebe diretamente o valor selecionado da lista de opções
    var lista_opcoes = document.getElementById('lista-opcoes');

    // retorna para um elemento do html
    document.getElementById('opcao_selecionada').innerHTML 
        = lista_opcoes.options[lista_opcoes.selectedIndex].text;
}

function MetodoSimplesRetornaOpcaoSelecionada (){
    // recebe diretamente o valor selecionado da lista de opções
    var lista_opcoes = document.getElementById('lista-opcoes').value;

    // retorna para um elemento do html
    document.getElementById('opcao_selecionada').innerHTML = lista_opcoes;
}

//##################### RADIO BUTTONS ##################### 

// utilizando botão para selecionar receber o valor de radio button
document.getElementById('mostrar_opcao_radioButtons').onclick = function(){

    // armazena todos os radios buttons em um array
    var radio = document.getElementsByName("genero");

    // variavel para armazenar o valor do radiobutton selecionado
    var radio_selecionado;

    // percorre todos os elementos do array 'radio'
    for (let i = 0; i < radio.length; i++) {
        
        // se um dos elementos está com o atributo 'checked'
        if(radio[i].checked){
            // passa o valor do radio button selecionado
            radio_selecionado = radio[i].value
            break;
        }
    }

    //aplica o valor do radio button selecionado no html
    document.getElementById('radio_selecionado').innerHTML = radio_selecionado;
}

//##################### CHECK BOXES ##################### 
document.getElementById('mostrar_opcao_checkbox').onclick = function(){

    // armazena todos os checks em um array
    var check_button = document.getElementsByName('interesse');
    RecebeTextoCheckBox(check_button);
}

function RecebeTextoCheckBox(check_button){

    // limpa o html antes de armazenar os novos campos
    document.getElementById('check_selecionado').innerHTML = "";

    // percorre todos os elementos do array 'check'
    for (let i = 0; i < check_button.length; i++) {
    
        // se um dos elementos está com o atributo 'checked'
        if(check_button[i].checked){
            // passa o valor do check selecionado criando uma nova linha no html
            document.getElementById('check_selecionado').innerHTML 
                += '<li>' + check_button[i].value + '</li>';
        }
    }
}

document.getElementById('desmarca-todos-checks').onclick = function(){

    // armazena todos os checks em um array
    var check_button = document.getElementsByName('interesse');

    // percorre todos os elementos do array 'check'
    for (let i = 0; i < check_button.length; i++) {

        // se um dos elementos está com o atributo 'checked'
        if(check_button[i].checked){
            check_button[i].checked = false;
        }
    }
}
