import { atom } from 'recoil';

export const isLoggedIn = atom({
  key: 'isLoggedIn',
  default: false,
});

export const userData = atom({
  key: 'userImage',
  default: {
    id: null,
    image: null,
  },
});
