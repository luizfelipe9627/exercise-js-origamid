const ativar = document.querySelector('.ativar');

/** @param {MouseEvent} e */
function handleClick(e) {
  // Mostra no console a coordenada horizontalmente.
  console.log(e.x);
  // Mostra no console a coordenada verticalmente.
  console.log(e.y)
}

ativar.addEventListener('click', handleClick);