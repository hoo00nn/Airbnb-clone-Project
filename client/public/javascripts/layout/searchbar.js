const checkin = document.querySelector('.checkin__wrap');
const checkout = document.querySelector('.checkout__wrap');
const personnel = document.querySelector('.personnel__wrap__left');

checkin.addEventListener('click', (e) => {
  const target = e.target.offsetParent.querySelector('.datepicker__wrap');

  if (target.classList.contains('hide')) target.classList.remove('hide');
  else target.classList.add('hide');
})

checkout.addEventListener('click', (e) => {
  const target = e.target.offsetParent.querySelector('.datepicker__wrap');

  if (target.classList.contains('hide')) target.classList.remove('hide');
  else target.classList.add('hide');
})

personnel.addEventListener('click', (e) => {
  const target = e.currentTarget.parentNode.previousSibling;

  if (target.classList.contains('hide')) target.classList.remove('hide');
  else target.classList.add('hide');
})