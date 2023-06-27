function validateForm() {
  var name = document.getElementById("gameName").value;
  var uploadButton = document.getElementById("uploadBtn");

  if (name.length > 0) {
    uploadButton.disabled = false;
  } else {
    uploadButton.disabled = true;
  }
}
