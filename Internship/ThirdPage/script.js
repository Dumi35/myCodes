// Get references to the dialog and buttons
const myDialog = document.getElementById('myDialog');
const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');

// Open the dialog when the "Open Dialog" button is clicked
openButton.addEventListener('click', () => {
  myDialog.showModal();
});

// Close the dialog when the "Close" button inside the dialog is clicked
closeButton.addEventListener('click', () => {
  myDialog.close();
});
