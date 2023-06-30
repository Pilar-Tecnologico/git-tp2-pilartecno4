const input = document.getElementById('gameName');
const button = document.getElementById('button');

button.disabled = true;

input.addEventListener('input', function(){
    if(input.value.trim().length === 0){
        button.disabled = true;
    }else{
        button.disabled = false;
    }
});