const headerLogin = document.querySelector('#login');
const headerRegister = document.querySelector('#register');
const lookPassword = document.querySelector('.look__password');

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
});

lookPassword.addEventListener('click', () => {
  const input = document.querySelector('.login__password').children.namedItem('password');
  
  if (input.getAttribute('type') === 'password') input.setAttribute('type', 'text');
  else input.setAttribute('type', 'password');
})