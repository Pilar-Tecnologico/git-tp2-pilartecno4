function validarCampo() {
    var campo = document.getElementById('gameName');
    var boton = document.getElementById('boton-cargar');

    // Verificar si el campo tiene algún dato
    if (campo.value.trim() !== '') {
      boton.disabled = false; // Habilitar el botón si hay un dato
    } else {
      boton.disabled = true; // Inhabilitar el botón si no hay un dato
    }

  }
