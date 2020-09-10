class Reservation {
  constructor(data, reservationDOM) {
    this.price = data.price;
    this.checkin = data.checkin;
    this.checkout = data.checkout;
    this.personnel = data.personnel;
    this.reservation = reservationDOM;
  }

  makePriceElement() {
    const price = this.reservation.querySelector('.reservation__price').querySelector('.price');

    price.innerText = `₩${this.price}`;
  }

  makeDateElement() {
    const date = this.reservation.querySelector('.reservation__date').querySelector('.date');
    
    date.setAttribute('value', `${this.checkin} -- ${this.checkout}`);
  }

  makeGuestElement() {
    const guest = this.reservation.querySelector('.reservation__guest').querySelector('.guest');
  
    guest.setAttribute('value', `${this.personnel}명`);
  }

  makePriceOfPeriod() {
    const priceLeft = this.reservation.querySelector('.reservation__info').querySelector('.price__left');
    const priceRight = this.reservation.querySelector('.reservation__info').querySelector('.price__right');
    const start = parseInt(this.checkin.split('-')[this.checkin.split('-').length-1]);
    const end = parseInt(this.checkout.split('-')[this.checkout.split('-').length-1]);
    const period = end - start;
    const price = this.makeCommaOfPrice(parseInt(this.price.split(',').join('')) * period);
  
    priceLeft.innerText = `₩${this.price} X ${period}박`
    priceRight.innerText = `₩${price}`;
  
    return price;
  }

  makeCommaOfPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  makeTotalPrice() {
    const total = this.reservation.querySelector('.reservation__info').querySelector('.total__price__right');
    const clean = this.reservation.querySelector('.reservation__info').querySelector('.clean__right').textContent;
    const service = this.reservation.querySelector('.reservation__info').querySelector('.service__right').textContent;
    const fees = this.reservation.querySelector('.reservation__info').querySelector('.fees__right').textContent;
    const price = this.makePriceOfPeriod();
  
    total.innerText = `₩${this.makeCommaOfPrice(parseInt(clean.replace(',', '').replace('₩', '')) + 
                        parseInt(service.replace(',', '').replace('₩', '')) +
                        parseInt(fees.replace(',', '').replace('₩', '')) +
                        parseInt(price.replace(',', '')))}`;
  }

  makeReservationModal() {
    this.makePriceElement();
    this.makeDateElement();
    this.makeGuestElement();
    this.makePriceOfPeriod();
    this.makeTotalPrice();
  }
}

const roomCard = document.querySelectorAll('.room__card');

roomCard.forEach(v => {
const reservationButton = v.querySelector('.reservation');

reservationButton.addEventListener('click', (e) => {
  const reservationDOM = e.target.querySelector('.reservation__modal');
  const data = JSON.parse(e.target.querySelector('.data').getAttribute('value'));
  const reservation = new Reservation(data, reservationDOM);

  reservation.makeReservationModal();
})
})
