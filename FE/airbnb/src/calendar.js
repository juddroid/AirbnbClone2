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
      dateList.push({
        date: null,
        range: false,
      });
    }
    for (let i = 0; i < new Date(year, month + 1, 0).getDate(); i++) {
      dateList.push({
        date: i + 1,
        range: false,
        hover: false,
      });
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
