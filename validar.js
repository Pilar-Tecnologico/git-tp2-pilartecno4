function validarNombre() {
  var juego = document.getElementById('gameName');
  var boton = document.getElementById('boton');

  if (juego.value.length > 0) {
    boton.disabled = false;
  } else {
    boton.disabled = true;
  }
}

