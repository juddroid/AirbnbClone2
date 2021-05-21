import { atom } from 'recoil';
import { getDateList } from '../util';

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
