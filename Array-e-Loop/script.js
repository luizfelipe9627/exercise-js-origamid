// Está selecionando todos os links presentes na tag NAV.
const links = document.querySelectorAll("nav a");

// Função chamada ativarLink contendo um parâmetro.
function ativarLink(link) {
  // Responsável por obter o HREF do site.
  const href = link.href;

  // Responsável por pegar a URL atual do site.
  const url = document.location.href;

  // Se a URL for igual ao HREF irá executar o bloco de comandos.
  if (href === url) {
    // Está alterando o A do link atual.
    link.style.color = "white";
    // Está alterando o background da tela selecionada.
    link.style.backgroundColor = "black";
  }
}

// O forEach está recebendo uma função que vai ser repetida conforme seu parâmetro, no caso são 3 links então será repetido 3 vezes.
links.forEach(ativarLink);
