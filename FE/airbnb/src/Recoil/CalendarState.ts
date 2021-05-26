import { atom } from 'recoil';

export const calendar = atom({
  key: 'calendar',
  default: -391,
});

export const todayData = atom({
  key: 'todayDate',
  default: {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
  },
});

export const calendarListSet = atom({
  key: 'calendarListSet',
  default: {
    prev: {
      year: 0,
      month: 0,
      dateList: 0,
    },
    current: {
      year: 0,
      month: 0,
      dateList: 0,
    },
    next: {
      year: 0,
      month: 0,
      dateList: 0,
    },
    nextNext: {
      year: 0,
      month: 0,
      dateList: 0,
    },
  },
});

export const displayMonth = atom({
  key: 'displayMonth',
  default: new Date().getMonth(),
});

export const monthList = atom({
  key: 'monthList',
  default: [
    new Date().getMonth() - 1,
    new Date().getMonth(),
    new Date().getMonth() + 1,
    new Date().getMonth() + 2,
  ],
});

export const calendarWrapperSize = atom({
  key: 'calendarWrapperSize',
  default: 0,
});

export const calendarList = atom({
  key: 'calendarList',
  default: '',
});

export const prevMonthBox = atom({
  key: 'prevMontohBox',
  default: true,
});

export const nextNextMonthBox = atom({
  key: 'nextNextMonthBox',
  default: true,
});

export const animation = atom({
  key: 'animation',
  default: false,
});
