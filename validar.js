const boton = document.getElementById("boton");
const juego = document.getElementById("gameName");

boton.disabled = true;

juego.addEventListener('input', function() {
    if(juego.value.trim() === '') {
        boton.disabled = true;
    } else {
        boton.disabled = false;
    };
});