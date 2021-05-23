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
