import { LASTDATE_LIST } from './const';

export const getDateList = (month) => {
  const dateList = [];
  for (let i = 0; i < LASTDATE_LIST[month]; i++) {
    dateList.push(i + 1);
  }
  return dateList;
};
