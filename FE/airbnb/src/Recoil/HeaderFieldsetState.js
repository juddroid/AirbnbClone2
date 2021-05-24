import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

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
  default: false,
});
