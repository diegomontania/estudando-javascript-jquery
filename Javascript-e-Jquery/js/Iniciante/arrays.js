// arrays
var alunos = ['maria', 'joão', 'pedro'];
var numeros = [1, 2, 3];

console.log(alunos);
console.log(numeros.length);

// altera um valor de elemento já existente de um array
alunos[0] = "joaquina";
console.log('alterei o elemento 0 do array! Novo valor:', alunos[0]);
console.log('o array agora contem', alunos);

// adiciona um elemento no array que não existe
alunos[3] = "carlos";
console.log('adicionei um novo valor que não existia : ', alunos[3]);
console.log('o array agora contem', alunos);

console.log("--------------");

// arrays de arrays
var alunosArrayDeArray = [
    ['maria', 'joão', 'pedro'],
    ['joaquim', 'ana', 'marilda'],
    [1, 2, 3]
];

console.log('um array com arrays', alunosArrayDeArray);
console.log('pegando um elemento do array dos arrays', alunosArrayDeArray[0]);
console.log('pegando o primeiro valor de um elemento do array :', alunosArrayDeArray[0][1]);

console.log("--------------");

//operacoes com arrays
// push : adiciona elementos ao final de um array
var cursos = ['html', 'ccs', 'java', 'c'];
console.log('resultado do array sem o push', cursos);
cursos.push('ruby');
console.log('resultado do array com o push', cursos);

console.log("--------------");

// pop : remove o último elemento de um array
var turmas = ['primeiro ano', 'segundo ano', 'terceiro ano'];
console.log('resultado do array sem o pop', turmas);
turmas.pop();
console.log('resultado do array com o pop', turmas);

console.log("--------------");

// shift : remove o primeiro elemento de um array
var estados = ['amapá', 'acre', 'recife'];
console.log('resultado do array sem o shift', estados);
estados.shift();
console.log('resultado do array com o shift', estados);

console.log("--------------");

// unshift : adiciona elementos ao inicio de um array
var idades = [ 12, 23, 44];
console.log('resultado do array sem o unshift', idades);
idades.unshift(22);
console.log('resultado do array com o unshift', idades);

//slice : pega parte de um array
var carros = ['camaro', 'fox', 'gol', 'kombi', 'ferrari'];
console.log('resultado do array sem o slice', carros);
var novoArray = carros.slice(0, 3);
console.log('resultado do array com o slice', novoArray);

// pegando x ultimos elementos de um array
var arrayComUltimosElementos = carros.slice(3,); //omitindo ultimo parametro
console.log('resultado do array com o slice', arrayComUltimosElementos);