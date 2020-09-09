class Calendar {
  constructor(year, month, datepicker) {
    this.datepicker = datepicker;
    this.year = month > 12 ? year + 1 : year;
    this.month = month > 12 ? month % 12 : month;
    this.week = ['일', '월', '화', '수', '목', '금', '토'];
  }

  setDate(year, month) {
    this.year = year;
    this.month = month;
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
  
  dayClickEvent() {
    const days = this.datepicker.querySelector('.dayOfWeek');
  
    days.addEventListener('click', (e) => {
      if (days.querySelector('.selected') !== null ) days.querySelector('.selected').classList.remove('selected');
      if (e.target.classList.contains('day')) e.target.classList.add('selected');
    })
  }

  makeCalendar() {
    this.makeTitleElement();
    this.makeWeekElement();
    this.makeDaysElement();
    this.makeButtonElement();
    this.dayClickEvent();
  }
}


const datepicker = document.querySelectorAll('.datepicker__wrap');
const datepicker_overlay = document.querySelectorAll('.datepicker__overlay');

datepicker.forEach(v => {
  const calendar = new Calendar(new Date().getFullYear(), new Date().getMonth() + 1, v);
  const next = v.querySelector('.next__button');
  const previous = v.querySelector('.previous__button');

  calendar.makeCalendar();


  next.addEventListener('click', (e) => {
    e.preventDefault();

    const year = parseInt(e.target.dataset.year);
    const month = parseInt(e.target.dataset.month);
    
    calendar.setDate(year, month);
    calendar.makeCalendar();
  });


  previous.addEventListener('click', (e) => {
    e.preventDefault();

    const year = parseInt(e.target.dataset.year);
    const month = parseInt(e.target.dataset.month);

    calendar.setDate(year, month);
    calendar.makeCalendar();
  });

  v.addEventListener('click', (e) => {
    e.preventDefault(); 

    const input = e.currentTarget.nextSibling.querySelector('input');
    const date = e.target.dataset.date;

    input.setAttribute('value', date);
  })
});