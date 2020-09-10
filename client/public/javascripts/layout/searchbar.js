const checkin = document.querySelector('.checkin__wrap');
const checkout = document.querySelector('.checkout__wrap');
const personnel = document.querySelector('.personnel__wrap__left');

checkin.addEventListener('click', (e) => {
  const target = e.target.offsetParent.querySelector('.datepicker__wrap');
  hide(target);
})

checkout.addEventListener('click', (e) => {
  const target = e.target.offsetParent.querySelector('.datepicker__wrap');
  hide(target);

  const checkinValue = document.querySelector('#checkin').getAttribute('value');
  const days = document.querySelector('.checkout').querySelectorAll('.day');
  
  days.forEach(v => {
    if (checkinValue === null)  return 

    const value = checkinValue === null ? 0 : parseInt(checkinValue.split('-').join(''));
    const compareValue =  parseInt(((v.dataset.date)).split('-').join(''));
    if (value - compareValue >= 0) {
      v.classList.add('not__allow__click');
    } 
  });
})

personnel.addEventListener('click', (e) => {
  const target = e.currentTarget.parentNode.previousSibling;
  hide(target);
})

const hide = (target) => {
  if (target.classList.contains('hide')) target.classList.remove('hide');
  else target.classList.add('hide');
}