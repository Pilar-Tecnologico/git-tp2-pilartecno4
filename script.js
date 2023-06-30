const gameForm = document.getElementById('gameForm');
const gameName = document.getElementById('gameName');
const gameStatus = document.getElementById('gameStatus');

const btnCargar = document.getElementById('btnCargar');

gameName.addEventListener('input', (e) => {
  if (e.target.value) {
    btnCargar.removeAttribute('disabled');
  } else {
    btnCargar.setAttribute('disabled', 'true');
  }
});

gameForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Crear una nueva fila y celdas
  var newRow = document.createElement('tr');
  var nameCell = document.createElement('td');
  var statusCell = document.createElement('td');

  // Asignar los valores del formulario a las celdas
  nameCell.textContent = gameName.value;
  statusCell.textContent = gameStatus.value;

  // Añadir las celdas a la nueva fila
  newRow.appendChild(nameCell);
  newRow.appendChild(statusCell);

  console.log(newRow);

  // Añadir la nueva fila a la tabla
  document.getElementById('gameList').appendChild(newRow);

  // Limpiar el formulario
  gameName.value = '';
  gameStatus.value = 'Planeo jugar';
});
