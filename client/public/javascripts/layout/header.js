const headerLogin = document.querySelector('#login');
const headerRegister = document.querySelector('#register');
const lookPassword = document.querySelector('.look__password');

// 로그인 버튼 클릭 시 로그인 모달 띄우는 로직
headerLogin.addEventListener('click', (e) => {
  const login = document.querySelector('.header__login');

  login.querySelector('.modal').classList.remove('hidden');
  login.previousSibling.querySelector('.modal').classList.add('hidden');
});

// 회원가입 버튼 클릭 시 회원가입 모달 띄우는 로직
headerRegister.addEventListener('click', (e) => {
  const register = document.querySelector('.header__register');

  register.nextSibling.querySelector('.modal').classList.add('hidden');
  register.querySelector('.modal').classList.remove('hidden');
});


// 비밀번호 보기 클릭 시 암호화된 비밀번호가 보여지는 로직
lookPassword.addEventListener('click', () => {
  const input = document.querySelector('.login__password').children.namedItem('password');
  
  if (input.getAttribute('type') === 'password') input.setAttribute('type', 'text');
  else input.setAttribute('type', 'password');
})