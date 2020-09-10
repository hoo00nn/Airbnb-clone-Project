const guest_overlay = document.querySelector('.guest__overlay');
const guest = document.querySelector('.guest');

guest_overlay.addEventListener('click', (e) => {
  e.stopPropagation();
  
  e.target.parentNode.classList.add('hide');
})
