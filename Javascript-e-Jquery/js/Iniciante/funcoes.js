// funcoes
var numero = 1;
var numero2 = 2;

// funcao void, que não retorna valor
function minhaFuncaoVoid(num1, num2){
    var resultado = num1 + num2;
    console.log("Estou exibindo o resultado dentro da funcao", resultado);
}

// chama funcao
minhaFuncaoVoid(numero, numero2);

// funcao que retorna valor
function minhaFuncaoReturn(num1, num2){
    var resultado = num1 + num2;
    return resultado;
}

var exibeResultado = minhaFuncaoReturn(numero, numero2)
console.log("Estou exibindo o resultado retornado da funcao", exibeResultado); 

// exercicio
// declara variaveis
var peso = parseFloat(document.getElementById("peso").innerHTML);
var altura = parseFloat(document.getElementById("altura").innerHTML);

// funcao que calcula imc
function valor_imc(peso,altura) {
    var imc = peso / (altura * altura);
    return imc;
}

// coloca o valor da funcao no html
document.getElementById("imc").innerHTML = valor_imc(peso,altura);