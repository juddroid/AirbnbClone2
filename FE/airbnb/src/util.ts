import { LASTDATE_LIST } from './const';

interface IToday {
  year: number;
  month: number;
}

export const getDateList = (today: IToday, month: number) => {
  const day = new Date(today.year, month).getDay();

  const dateList = [];

  for (let i = 0; i < day; i++) {
    dateList.push(null);
  }
  for (let i = 0; i < LASTDATE_LIST[month]; i++) {
    dateList.push(i + 1);
  }
  return dateList;
};
