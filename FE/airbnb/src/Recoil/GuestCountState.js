import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

export const guestCount = atom({
  key: 'guestCount',
  default: {
    adult: {
      count: 0,
      id: uuidv4(),
    },
    child: {
      count: 0,
      id: uuidv4(),
    },
    infant: {
      count: 0,
      id: uuidv4(),
    },
  },
});
