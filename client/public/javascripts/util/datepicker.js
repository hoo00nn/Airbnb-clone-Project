class Calendar {
  constructor(year, month, datepicker) {
    this.datepicker = datepicker;
    this.year = month > 12 ? year + 1 : year;
    this.month = month > 12 ? month % 12 : month;
    this.week = ['일', '월', '화', '수', '목', '금', '토'];
  }
}
