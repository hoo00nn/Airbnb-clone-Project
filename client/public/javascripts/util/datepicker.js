class Calendar {
  constructor(year, month, datepicker) {
    this.datepicker = datepicker;
    this.year = month > 12 ? year + 1 : year;
    this.month = month > 12 ? month % 12 : month;
    this.week = ['일', '월', '화', '수', '목', '금', '토'];
  }

  makeTitleElement() {
    const title = this.datepicker.querySelector('.title');
  
    title.innerHTML = '';
    title.innerHTML = `${this.year}년 ${this.month}월`;
  }

  makeWeekElement() {
    const days = this.datepicker.querySelector('.days');
    days.innerHTML = '';
  
    for(let i = 0; i < this.week.length; i++) {
      days.insertAdjacentHTML('beforeend', `<li>${this.week[i]}</li>`);
    }
  }
}