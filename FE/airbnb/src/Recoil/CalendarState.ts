import { atom, selector } from 'recoil';
import { Calendar } from '../calendar';

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

export const getCalendar = selector({
  key: 'getCalendar',
  get: ({ get }) => {
    const calendar = get(todayData);
    const currentCalendar = new Calendar(
      calendar.year,
      calendar.month
    ).getCalendarList();
    return currentCalendar;
  },
});

export const calendarWrapperSize = atom({
  key: 'calendarWrapperSize',
  default: 0,
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
