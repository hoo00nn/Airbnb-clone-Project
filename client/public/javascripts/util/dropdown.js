let dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
  if (dropdown.classList.contains('closed')) dropdown.classList.remove('closed');
  else dropdown.classList.add('closed');
});