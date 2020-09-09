const checkin = document.querySelector('.checkin__wrap');
const checkout = document.querySelector('.checkout__wrap');

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