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
    for (let i = 0; i < LASTDATE_LIST[new Date(year, month).getMonth()]; i++) {
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

// (최초렌더)
// 1. 캘린더 리스트를 만들기 위한 이어먼스 리스트 만들기
// 2. 만들어진 리스트로 데이트 리스트 구하기 (28-31)
// 3. 완성된 캘린더 리스트 객체(배열) 만들기

// (업데이트)
// 1. 버튼을 누르면 기준 달에서 +1, -1을 한다.
//  1-1. 해가 바뀌는 로직필요.
// 2. 업데이트된 이어먼스로 캘린더 리스트가 업데이트 되게한다.
// 3. 업데이트된 캘린더 리스트로 다시 데이트 리스트 구하기
// 4. 완성된 캘린더 리스트 객체(배열) 만들기ㅣ
// 5. 렌더링

export class CalendarData extends Calendar {
  getCalendarList() {}
}
