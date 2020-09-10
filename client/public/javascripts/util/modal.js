const openButton = document.getElementsByClassName('modal__open');
const overlay = document.getElementsByClassName('modal__overlay');

for(let i = 0; i < openButton.length; i++) {
  openButton[i].addEventListener('click', (e) => {
    e.target.querySelector('.modal').classList.remove('hidden');
  })
}

for(let i = 0; i < overlay.length; i++) {
  overlay[i].addEventListener('click', (e) => {
    e.stopPropagation();
    
    e.target.parentNode.classList.add('hidden');
  })
}