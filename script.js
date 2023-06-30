const gameForm = document.getElementById('gameForm');
const gameName = document.getElementById('gameName');
const gameStatus = document.getElementById('gameStatus');
const gameList = document.getElementById('gameList');
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
  var deleteCell = document.createElement('td');
  deleteCell.setAttribute('class', 'btnEliminar');

  // Asignar los valores del formulario a las celdas
  nameCell.textContent = gameName.value;
  statusCell.textContent = gameStatus.value;
  deleteCell.innerHTML = `<button disable id="btnDelete"><ion-icon name="trash-outline"></ion-icon></button>`;

  // Añadir las celdas a la nueva fila
  newRow.appendChild(nameCell);
  newRow.appendChild(statusCell);
  newRow.appendChild(deleteCell);

  console.log(deleteCell);

  // Añadir la nueva fila a la tabla
  gameList.appendChild(newRow);

  // Limpiar el formulario
  gameName.value = '';
  gameStatus.value = 'Planeo jugar';
  btnCargar.setAttribute('disabled', 'true');

  const btnDelete = document.querySelectorAll('#btnDelete');

  btnDelete.forEach((element) => {
    element.addEventListener('click', (e) => {
      const td = element.parentNode.parentNode;
      td.remove();
    });
  });
});
