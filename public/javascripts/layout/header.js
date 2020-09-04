const headerLogin = document.querySelector('#login');
const headerRegister = document.querySelector('#register');

headerLogin.addEventListener('click', (e) => {
  document.querySelector('.header__register')
  .querySelector('.modal')
  .classList
  .add('hidden');

  document.querySelector('.header__login')
  .querySelector('.modal')
  .classList
  .remove('hidden');
});

headerRegister.addEventListener('click', (e) => {
  document.querySelector('.header__login')
  .querySelector('.modal')
  .classList
  .add('hidden');

  document.querySelector('.header__register')
  .querySelector('.modal')
  .classList
  .remove('hidden');
})