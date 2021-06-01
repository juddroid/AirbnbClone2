import { atom } from 'recoil';

export const nearbyRoomList = atom({
  key: 'nearbyRoomList',
  default: null,
});

export const modalState = atom({
  key: 'modalState',
  default: false,
});
