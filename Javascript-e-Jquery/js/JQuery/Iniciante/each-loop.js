var minhaLista = ['css', 'html', 'javascript', 'jquery', 'c#', 'sql'];
var meuObjeto = { 'nome' : 'diego', 'idade': 26, 'profissao': 'programador'};

// fazendo loop na lista com jquery
// primeiro parametro : objeto ou variavel  que será percorrido (minhaLista)
// segundo parametro : funcao que será executada a cada passada do loop (function(indice, valor))

// utilizando em um array
$.each(minhaLista, function(indice, valor){
    console.log('o elemento de indice :', indice, 'tem o valor de :', valor);
});

// utilizando em um objeto
$.each(meuObjeto, function(chave, valor){
    console.log('o elemento de indice :', chave, 'tem o valor de :', valor);
});


// selecionando tag html e o li ou seja, a sub tag
var textoDoElementoHTML = $('#interesses li');

$.each(textoDoElementoHTML, function(indice, valor){
    console.log('o elemento de indice :', indice, 'tem o valor de :', valor);

    // se o resultado for um indice html, você pode usar esse resultado com o jquery
    // 'valor' tem como resultado <li>::maker Desenvolvimento Front End</li>
    console.log($(valor).text());
});