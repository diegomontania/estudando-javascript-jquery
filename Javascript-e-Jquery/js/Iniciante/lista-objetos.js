console.log("#################### listaObjetos.js ####################");

// criando um array que contem objetos como elementos
// onde cada objeto possui um tipo de propriedade diferente (string, inteiro, double, array)
var cursos = [
    //objeto 1
    {
        'Titulo': 'aprendendo php',
        'Duracao' : 15,
        'MediaMinima' : 6.5,
        'Instrutor' : 'roberto',
        'Turnos' : ['manha', 'tarde', 'noite']
    },
    //objeto 2
    {
        'Titulo': 'aprendendo css',
        'Duracao' : 10,
        'MediaMinima' : 6.0,
        'Instrutor' : 'maria',
        'Turnos' : ['tarde', 'noite']
    },
    //objeto 3
    {
        'Titulo': 'aprendendo html',
        'Duracao' : 20,
        'MediaMinima' : 5.0,
        'Instrutor' : 'amanda',
        'Turnos' : ['manha', 'noite']
    }
];

// acessando os valores
console.log('acessando primeiro objeto e propriedade "titulo": ', cursos[0].Titulo);
console.log('acessando primeiro objeto e propriedade lista "turnos": ', cursos[0].Turnos);
console.log('acessando posição especifica da lista: ', cursos[0].Turnos[0]);