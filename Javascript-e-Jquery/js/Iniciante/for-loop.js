console.log("################# forLoop.js #################");

// ##########  LOOP EM UM ARRAY ########## 

// array simples
for (let index = 0; index < 10; index++) {
    console.log('oi');
}

// exibe elementos de um array
var alunos = ['carlos', 'maria', 'pedro', 'jose', 'lucas', 'mariana']
for (let index = 0; index < alunos.length; index++) {
    console.log(alunos[index]);
}

// ##########  LOOP ENTRE PROPRIEDADES DE UM OBJETO ########## 

// percorre propriedades de um objeto com o loop especifico de objetos for-in
var carro = {
    'nome' : 'Fiesta',
    'cor' : 'Preto',
    'ano' : 1994,
    'fabricacao' : 'Brasil',
    'ipvaPago' : true
}

for (var propriedade in carro) {
    // exibe nome da propriedade + seu valor
    console.log(propriedade + ' : ' + carro[propriedade]);
}

// ##########  LOOP ENTRE ELEMENTOS DO HTML ########## 

// recebe os elementos em uma variavel que irá ser um array
var elementos = document.getElementsByClassName('minha-classe-loop');

// faz loop no array
for (let index = 0; index < elementos.length; index++) {
    //muda os estilos dos elementos via loop
    elementos[index].style.color = 'orange';
}

// ########## RECEBE ARRAY E PERCORRE A PROPRIEDADE DE ARRAY E POPULA O HTML COM OS VALORES ########## 
var funcionarios = [  
    {
        'nome': 'Carlos Henrique da Silva',
        'idade': 45,
        'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
    },
    {
        'nome': 'Maria Helena Pereira',
        'idade': 32,
        'filhos': ['João Pedro Pereira de Souza']
    },
    {
        'nome': 'José Feliciano Maia',
        'idade': 39,
        'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
    }
];

// recebe os elementos do html (array)
var elementoNoHtml = document.getElementById('filhos');

// faz loop pelo array de 'funcionarios'. Para pegar o elemento 'filhos' que é outro array.
// depois faz um loop no segundo array 'filhos' e pega seus valores.
for (let i = 0; i < funcionarios.length; i++) {

    // se um funcionario tiver filhos
    if(funcionarios[i].filhos){
        // armazena o elemento atual
        var listaFilhos = funcionarios[i].filhos;

        // segundo loop para percorrer a lista de filhos e colocar no html cada item da lista
        for (let j = 0; j < listaFilhos.length; j++) {
            elementoNoHtml.innerHTML += '<li>' + funcionarios[i].nome + ' - ' + listaFilhos[j] + '</li>';
        }
    }
}
