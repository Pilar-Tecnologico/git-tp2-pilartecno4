const gameList = document.getElementById('gameList');

gameList.addEventListener('click', function(event) {
    if(event.target.classList.contains('button') && event.target.classList.contains('is-danger')) {
        const row = event.target.parentNode.parentNode;
        row.remove();
    };
});