import { LASTDATE_LIST } from './const';

interface IToday {
  year: number;
  month: number;
  date: number;
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

export const getHourMinute = (hour: number) => {
  console.log(hour);
  if (hour.toString().includes('.'))
    return `${hour.toString().slice(0, hour.toString().indexOf('.'))}시간 30분`;
  return `${hour}시간`;
};

export const setState = (setCallback: any, state: boolean) =>
  setCallback(state);
export const setToggle = (setCallback: any, state: boolean) =>
  setCallback(!state);
