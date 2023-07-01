const eliminar = (event)=>{
    if(!event.target.matches(".remover"))
     return;
    event.target.parentNode.parentNode.remove();
   }

 // Boton eliminar
 document.addEventListener("click",eliminar );