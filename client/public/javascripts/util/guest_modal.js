const guest_overlay = document.querySelector('.guest__overlay');
const guest = document.querySelector('.guest');

guest_overlay.addEventListener('click', (e) => {
  e.stopPropagation();
  
  e.target.parentNode.classList.add('hide');
})

guest.addEventListener('click', (e) => {
  e.preventDefault();

  const personnel = document.querySelector('#personnel');
  let input_value = personnel.getAttribute('value') === null ? 0 : parseInt(personnel.getAttribute('value'));
  let input = e.target.parentNode.querySelector('.count');

  if (e.target.classList.contains('plus__button')) {
    input.dataset.count = parseInt(input.dataset.count) + 1;
    input.innerHTML = input.dataset.count;
    personnel.setAttribute('value', input_value + 1);

    if (input.dataset.count > 0) {
      e.target.parentNode.querySelector('.minus__button').classList.remove('not__allow__click');
      e.target.parentNode.querySelector('.minus__button').classList.add('allow__click');
    }
  }

  if (e.target.classList.contains('minus__button')) {
    input.dataset.count = parseInt(input.dataset.count) - 1;
    input.innerHTML = input.dataset.count;

    if((input_value-1) === 0) personnel.removeAttribute('value');
    else personnel.setAttribute('value', input_value - 1);

    if (input.dataset.count < 1) {
      e.target.parentNode.querySelector('.minus__button').classList.remove('allow__click');
      e.target.parentNode.querySelector('.minus__button').classList.add('not__allow__click');
    }
  }
})


