// https://tableless.com.br/guia-f%C3%A1cil-sobre-usar-localstorage-com-javascript/
// https://andrebtoe.com/2017/03/24/como-utilizar-storage-atraves-do-javascript/

//localStorage : mantem dados gravados do usuário mesmo após fechar o navegador
//sessionStorage : mantem dados gravados só até término da sessão. Após isso os dados são apagados

// insere uma informação no localStorage
window.localStorage.setItem('nome', 'diego');

// recebe o valor armazenado anteriormente
console.log(window.localStorage.getItem('nome'));

// limpa essa informação do localstore
window.localStorage.removeItem('nome');


