// manipulando elementos do html

// pegando todo o conteudo do html
var todoValorElemento = $('#paragrafo-html').html();
console.log('pegando todo conteudo do elemento html', todoValorElemento);

// pegando apenas o texto do html
var textoDoElementoHTML = $('#paragrafo-html').text();
console.log('pegando apenas o valor do html', textoDoElementoHTML);

// inserindo um novo conteudo no html
var novoConteudoDoHTML = "Este é um novo conteúdo";
$('#mudarConteudo').click(function(){
    $('#paragrafo-html').html(novoConteudoDoHTML);
});

// usando '.attr' para pegar um atributo de um elemento html
var url_link = $('#paragrafo-link').attr('href');
console.log('url original sem alteração: ', url_link);

//mudando a url que estava na página por outra
$('#paragrafo-link').attr('href', 'http://yahoo.com.br');

// mudando o src da imagem de um elemento do html
$('#mudar_imagem').click(function(){
    $('#imagem_js').attr('src', 'https://www.socialgoat.in/PR1670/public/styles/1_col_gutter_portrait/public/2019-12/Fp.png');
});

$('#apagaParagrafo').click(function(){
    // $('#paragrafo-a-apagar').empty(); //apaga apenas o texto
    $('#paragrafo-a-apagar').remove(); //remove o elemento do html
});
