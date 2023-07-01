const formulario = document.getElementById('gameForm');
const nombreJuego = document.getElementById('gameName');
const btnEnviar = document.getElementById('btnEnv');
const regex = /(.|\s)*\S(.|\s)*/



function validarFormulario() {
    if (!regex.test(nombreJuego.value)  ) {   
        btnEnviar.disabled = true;
    }else {
        btnEnviar.disabled = false;
    }
    
    }
    ;

nombreJuego.addEventListener('input', validarFormulario);