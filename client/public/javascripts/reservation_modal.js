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
}
