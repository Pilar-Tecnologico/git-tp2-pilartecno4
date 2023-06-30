const boton = document.getElementById("boton");
const juego = document.getElementById("gameName");

boton.disabled = true;

juego.addEventListener('input', function(event) {
    if(juego.Value.trim() === '') {
        boton.disabled = true;
    } else {
        boton.disabled = false;
    };
});