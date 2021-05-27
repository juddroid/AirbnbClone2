import { LASTDATE_LIST } from './const';

export class Calendar {
  constructor(year, month) {
    this.current = new Date(year, month);
    this.year = this.current.getFullYear();
    this.month = this.current.getMonth();
  }

  getDateList(year, month) {
    const day = new Date(year, month).getDay();
    const dateList = [];

    for (let i = 0; i < day; i++) {
      dateList.push(null);
    }
    for (let i = 0; i < new Date(year, month + 1, 0).getDate(); i++) {
      dateList.push(i + 1);
    }
    return dateList;
  }

  getCalendarList() {
    return [
      {
        year: this.year,
        month: this.month - 1,
        dateList: this.getDateList(this.year, this.month - 1),
      },
      {
        year: this.year,
        month: this.month,
        dateList: this.getDateList(this.year, this.month),
      },
      {
        year: this.year,
        month: this.month + 1,
        dateList: this.getDateList(this.year, this.month + 1),
      },
      {
        year: this.year,
        month: this.month + 2,
        dateList: this.getDateList(this.year, this.month + 2),
      },
    ];
  }
}
