import { atom } from 'recoil';

export const calendar = atom({
  key: 'calendar',
  default: -391,
});

export const todayDate = atom({
  key: 'todayDate',
  default: {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
  },
});

export const calendarWrapperSize = atom({
  key: 'calendarWrapperSize',
  default: 0,
});

export const currentCalendar = atom({
  key: 'current',
  default: {
    prev: 0,
    current: 0,
    next: 0,
    nextNext: 0,
  },
});

export const calendarList = atom({
  key: 'calendarList',
  default: '',
});

export const displayMonth = atom({
  key: 'displayMonth',
  default: 0,
});

export const monthList = atom({
  key: 'monthList',
  default: [],
});

export const prevMonthBox = atom({
  key: 'prevMontohBox',
  default: true,
});

export const nextNextMonthBox = atom({
  key: 'nextNextMonthBox',
  default: true,
});
