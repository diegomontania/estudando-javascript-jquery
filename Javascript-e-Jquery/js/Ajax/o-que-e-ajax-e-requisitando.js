// https://www.hostinger.com.br/tutoriais/o-que-e-ajax

// AJAX: Ajax recebe ou envia dados para um servidor por meio de requisições HTTP
// o funcionamento do ajax gira em torno do objeto 'XMLHttpRequest'
// ou seja, é possível fazer requisições ao backend sem que a página seja completamente recarregada

//--------------------------------------------------------------------------------------------------

//Requisições ajax : As requisições possuem 4 estados :
// 0 : Requsisição não inicializada, ou seja, não criada
// 1 : Requisição com o servidor estabelecida
// 2 : Requisição recebida
// 3 : Processando requisição
// 4 : Requisição finalizada e resposta recebida

// O estado 4 é o que será mais útil neste momento, pois ele nos dará o status da resposta. 
// indicando se a solicitação foi bem sucedida ou não. Os status são :
// 200 : OK - Resposta recebida sem problemas
// 403 : Requisição não autorizada
// 404 : Não encontrado

// Propriedades do objeto 'XMLHttpRequest' :
// onreadystatechange : monitora a mudança de estado da requisição
// readyState : numero do estado atual da requisição
// status : código do status da requisição
// response text : o texto da resposta da requisição

//--------------------------------------------------------------------------------------------------

// fazendo requisição ajax e enviando
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
xhttp.send();

// recebendo a resposta, se status for 4 e resposta ok
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText); //retona a resposta 
    }
};



