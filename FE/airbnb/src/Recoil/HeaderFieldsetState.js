import { atom, selector } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { INPUT_DATE_PLACEHOLDER } from '../const';

export const headerFieldset = atom({
  key: 'headerFieldset',
  default: {
    stays: {
      state: true,
      id: uuidv4(),
    },
    experience: {
      state: false,
      id: uuidv4(),
    },
    online: {
      state: false,
      id: uuidv4(),
    },
  },
});

export const nearbyPopupState = atom({
  key: 'nearbyPopupState',
  default: false,
});

export const calendarPopupState = atom({
  key: 'calendarPopupState',
  default: false,
});

export const guestPopupState = atom({
  key: 'guestPopupState',
  default: false,
});

export const registerPopupState = atom({
  key: 'registerPopupState',
  default: false,
});

export const headerScrollState = atom({
  key: 'headerScrollState',
  default: true,
});

export const reservationState = atom({
  key: 'reservationState',
  default: false,
});

export const searchButtonState = atom({
  key: 'searchButtonState',
  default: false,
});

export const panelState = atom({
  key: 'panelState',
  default: false,
});

export const checkInButtonState = atom({
  key: 'checkInButtonState',
  default: false,
});
export const checkOutButtonState = atom({
  key: 'checkOutButtonState',
  default: false,
});

export const searchTextState = atom({
  key: 'searchTextState',
  default: false,
});

export const checkInField = atom({
  key: 'checkInField',
  default: INPUT_DATE_PLACEHOLDER,
});
export const checkOutField = atom({
  key: 'checkOutField',
  default: INPUT_DATE_PLACEHOLDER,
});

export const setCheckInField = selector({
  key: 'setCheckInField',
  get: ({ get }) => {
    const field = get(checkInField);
  },
});

export const checkInFieldStyle = atom({
  key: 'checkInFieldStyle',
  default: false,
});
