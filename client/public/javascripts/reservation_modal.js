const reservationButton = document.getElementsByClassName('modal__open');

for(let i = 0; i < reservationButton.length; i++) {
  reservationButton[i].addEventListener('click', (e) => {
    const data = JSON.parse(e.target.querySelector('.data').getAttribute('value'));
    getPeriod(data);
  })
}

const getPeriod = (data) => {
  const start = parseInt(data.checkin.split('.')[data.checkin.split('.').length-1]);
  const end = parseInt(data.checkout.split('.')[data.checkout.split('.').length-1]);
  const period = end - start;
}


