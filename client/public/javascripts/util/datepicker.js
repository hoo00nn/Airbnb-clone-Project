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

  makeDaysElement() {
    const dayOfWeek = this.datepicker.querySelector('.dayOfWeek');
    const firstDayOfMonth = new Date(`${this.year}-${this.month}-01`).getDay();
    const totalDayOfMonth = new Date(this.year, this.month, 0).getDate();
  
    dayOfWeek.innerHTML = '';
  
    for(let i = 0; i < firstDayOfMonth; i++) {
      dayOfWeek.insertAdjacentHTML('beforeend', `<li></li>`);
    }
  
    for(let i = 1; i <= totalDayOfMonth; i++) {
      const monthToString = this.month < 10 ? this.month.toString().padStart(2, '0') : this.month.toString();
      const dayToString = i < 10 ? i.toString().padStart(2, '0') : i.toString();
      const tag = `<li class="day" data-date=${this.year}-${monthToString}-${dayToString}>${i}</li>`;
  
      dayOfWeek.insertAdjacentHTML('beforeend', tag);
    }
  }

  makeButtonElement() {
    const MONTH = 12;
    const nextMonth = this.month + 1 > MONTH ? (this.month+1) % MONTH : this.month + 1;
    const nextYear = this.month + 1 > MONTH ? this.year + 1 : this.year;
    const previousMonth = this.month - 1 < 1 ? MONTH : this.month - 1;
    const previousYear = this.month - 1 < 1 ? this.year - 1 : this.year;
    const next = this.datepicker.querySelector('.next__button');
    const previous = this.datepicker.querySelector('.previous__button');
  
    if (new Date().getFullYear() === this.year && new Date().getMonth() + 1 === this.month) {
      next.setAttribute('data-month', `${nextMonth}`);
      next.setAttribute('data-year', `${nextYear}`);
      previous.classList.add('datepicker__button__hide');
    } 
    else {
      next.setAttribute('data-month', `${nextMonth}`);
      next.setAttribute('data-year', `${nextYear}`);
      previous.setAttribute('data-month', `${previousMonth}`);
      previous.setAttribute('data-year', `${previousYear}`);
      previous.classList.remove('datepicker__button__hide');
    }
  }
  
}