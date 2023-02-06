function livro(nome, ano, autor) {
  return {
    nome: nome.toUpperCase(),
    totalAnos: 2023 - ano, 
    frase: nome + " por " + autor,
  };
}

const infosLivro = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');

console.log(infosLivro)
console.log(infosLivro.frase)
