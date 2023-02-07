// Pega todas as imagens que estão dentro do li presente dentro do elemento galeria.
const imgs = document.querySelectorAll("#galeria li img");

// Pega o elemento que tem o id de imagem-principal no HTML.
const imgPrincipal = document.querySelector("#imagem-principal");

// Criado uma função chamada galeriaTrocar que recebe um parâmetro.
function galeriaTrocar(e) {
  // o currentTarget é responsável por identificar o elemento clicado.
  const clicado = e.currentTarget;

  // o src é responsável por mostrar o SRC do elemento clicado.
  imgPrincipal.src = clicado.src;

  // o alt é responsável por mostrar o ALT do elemento clicado.
  imgPrincipal.alt = clicado.alt;
}

// Criado uma função chamada galeriaClique que recebe um parâmetro.
function galeriaClique(img) {
  // Quando clicado na imagem aciona um evento de clique que executa a função galeriaTrocar.
  img.addEventListener("click", galeriaTrocar);
}

// O forEach está recebendo uma função que vai ser repetida conforme seu parâmetro.
imgs.forEach(galeriaClique);
