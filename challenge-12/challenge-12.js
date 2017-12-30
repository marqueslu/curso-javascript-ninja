/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/
(function(){


/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {
    name: 'João',
    lastname: 'das Neves',
    age: 22
};
console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person));

/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({
    nome: 'O Piso Roxinol',
    pages: 300
});

books.push({
    nome: 'De zero a um',
    pages: 203
});
books.push({
    nome: 'Outliers',
    pages: 300
});

console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/

console.log(books);

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
books.pop();

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log(books);

/*
Converta os objetos que ficaram em `books` para strings.
*/
books = JSON.stringify(books);
console.log( '\nLivros em formato string:' );
/*
Mostre os livros nesse formato no console:
*/
console.log(books);

/*
Converta os livros novamente para objeto.
*/
books = JSON.parse(books);
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for(var i = 0; i < Object.keys(books).length; i++){
    for(var prop in books[i]){
        console.log(prop + ':' + books[i][prop])
    }
};

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?
console.log( '\nMeu nome é:' );
var name = ['L', 'U', 'C', 'A', 'S'];

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(name.join(''));

console.log( '\nMeu nome invertido é:' );
/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log(name.reverse().join(''));


console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log(name.sort());
})();