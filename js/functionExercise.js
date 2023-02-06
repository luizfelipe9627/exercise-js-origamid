// Criado uma função chamada livro que contém 3 parâmetros.
function livro(nome, ano, autor) {
	// O toUpperCase é uma função que muda todas as letras do nome para maiúsculas.
	const nomeMaiusculo = nome.toUpperCase();
	// Está pegando o valor atribuído ao ano e subtraindo por 2023.
	const totalAnos = 2023 - ano;
	// Pega o nome em maiúsculo e concatena com uma string e o autor definido.
	const juntandoFrase = nomeMaiusculo + " por " + autor;
	
	// Criado um objeto chamado objetoLivro que é responsável por melhor leitura no console.
	const objetoLivro = {
	  nome: nomeMaiusculo, 
	  totalAnos, 
	  frase: juntandoFrase
	};

	// Retorna o objeto criado.
	return objetoLivro;
}

// Está preenchendo todos os parâmetros da função.
const infosLivro = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');

// Mostra no console o objeto inteiro e seus valores.
console.log(infosLivro);

// Mostra no console somente a frase presente dentro do objeto.
console.log(infosLivro.frase);