// Está puxando do HTML o elemento com a classe circulo.
const circulo = document.querySelector(".circulo");

// Criado uma função chamada moveCirculo que contém um parâmetro.
function moveCirculo(e) {
  // Está pegando o circulo e mudando a posição dele conforme o resultado da largura e altura da posição do mouse.
  circulo.style.left = e.x + 'px';
  circulo.style.top = e.y + 'px';
}

// Cria um evento de janela, que ao mover o mouse irá executar a função moveCirculo.
window.addEventListener("mousemove", moveCirculo);
