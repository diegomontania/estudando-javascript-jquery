// JSON : formato para troca de informações pela web.
// JSON, significa Javascript Object Notation. Ou seja, é um objeto javascript
// em outras palavras, você transforma um objeto javascript em uma string.

var funcionario = {
    'nome': "Fernanda Costa",
    'd_nascimento': '1988-10-01',
    'CPF': '111.111.111-11'
};

// transformando um objeto em json
var funcionarioJson = JSON.stringify(funcionario);
console.log(funcionarioJson);

// transformando de json para um objeto (processo reverso)
var funcionarioObjeto = JSON.parse(funcionarioJson);
console.log(funcionarioObjeto);