import styled from 'styled-components';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { guestCount } from '../../../../../Recoil/GuestCountState';

const MinusButton = ({ count, id }) => {
  const [disabled, setDisabled] = useState(false);
  const [currentCount, setCurrentCount] = useRecoilState(guestCount);

  const handleClickPlusButton = (e, id) => {
    e.stopPropagation();
    for (const guest in currentCount) {
      if (currentCount[guest].id === id) {
        setCurrentCount({
          ...currentCount,
          [guest]: {
            ...currentCount[guest],
            count: currentCount[guest].count - 1,
          },
        });
      }
    }
  };

  const checkCount = (count) => {
    count === 0 && setDisabled(true);
  };
  useEffect(() => {
    checkCount(count);
  }, [count]);

  return (
    <CounterButtonStyle
      disabled={disabled}
      onClick={(e) => handleClickPlusButton(e, id)}
    >
      <CounterIcon>
        <RemoveIcon />
      </CounterIcon>
    </CounterButtonStyle>
  );
};
const PlusButton = ({ id }) => {
  const [currentCount, setCurrentCount] = useRecoilState(guestCount);

  const handleClickPlusButton = (e, id) => {
    e.stopPropagation();
    for (const guest in currentCount) {
      if (currentCount[guest].id === id) {
        setCurrentCount({
          ...currentCount,
          [guest]: {
            ...currentCount[guest],
            count: currentCount[guest].count + 1,
          },
        });
      }
    }
  };

  return (
    <CounterButtonStyle onClick={(e) => handleClickPlusButton(e, id)}>
      <CounterIcon>
        <AddIcon />
      </CounterIcon>
    </CounterButtonStyle>
  );
};

const CounterButton = ({ type, count, id }) => {
  return {
    minus: <MinusButton {...{ count, id }} />,
    plus: <PlusButton {...{ count, id }} />,
  }[type];
};

export default CounterButton;

const CounterButtonStyle = styled.button`
  :disabled {
    cursor: not-allowed;
    color: rgb(235, 235, 235);
    border-color: rgb(235, 235, 235);
    background: rgb(255, 255, 255);
  }

  width: 32px;
  height: 32px;
  flex-grow: 0;
  flex-shrink: 0;
  cursor: pointer;
  display: flex;
  margin: 0px;
  padding: 0px;
  text-align: center;
  text-decoration: none;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(176, 176, 176);
  color: rgb(113, 113, 113);
  font-family: inherit;
  outline: none;
  touch-action: manipulation;
  align-items: center;
  justify-content: center;
  background: rgb(255, 255, 255);
  border-radius: 50%;
`;

const CounterIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 15px;
    width: 15px;
  }
`;
