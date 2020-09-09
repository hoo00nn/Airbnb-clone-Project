const dropdown = document.querySelector('.dropdown');
const dropdown_overlay = document.querySelector('.dropdown__overlay');


dropdown.addEventListener('click', (e) => {
  const dropdown = e.currentTarget;
  
  if(dropdown.classList.contains('closed')) dropdown.classList.remove('closed');
  else dropdown.classList.add('closed');
})


dropdown_overlay.addEventListener('click', (e) => {
  document.querySelector('.dropdown').classList.add('closed');
})