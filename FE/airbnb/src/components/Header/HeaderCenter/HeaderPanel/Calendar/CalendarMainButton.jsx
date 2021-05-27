import styled from 'styled-components';
import { LEFT, RIGHT } from '../../../../../const';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {
  animation,
  calendar,
  // calendarWrapperSize,
  todayData,
} from '../../../../../Recoil/CalendarState';

const CalendarButton = ({ direction }) => {
  const [calendarData, setCalendarData] = useRecoilState(todayData);
  const setAnimationState = useSetRecoilState(animation);
  const setCalendarPosition = useSetRecoilState(calendar);

  const handleClickButton = () => {
    if (direction === LEFT) {
      setCalendarData({
        ...calendarData,
        month: calendarData.month - 1,
      });

      setAnimationState(true);
      setCalendarPosition((position) => position + 391);

      setTimeout(() => {
        setAnimationState(false);
        setCalendarPosition(-391);
      }, 200);

      return;
    }
    if (direction === RIGHT) {
      setCalendarData({
        ...calendarData,
        month: calendarData.month + 1,
      });

      setAnimationState(true);
      setCalendarPosition((position) => position - 391);

      setTimeout(() => {
        setAnimationState(false);
        setCalendarPosition(-391);
      }, 200);

      return;
    }
  };

  return (
    <ButtonWrapper onClick={handleClickButton}>
      <ButtonBox {...{ direction }}>
        <ButtonStyle>
          <span>
            {direction === LEFT ? <NavigateBeforeIcon /> : <NavigateNextIcon />}
          </span>
        </ButtonStyle>
      </ButtonBox>
    </ButtonWrapper>
  );
};

const CalendarMainButton = () => {
  return (
    <CalendarMainButtonStyle>
      <CalendarButton direction={LEFT} />
      <CalendarButton direction={RIGHT} />
    </CalendarMainButtonStyle>
  );
};

export default CalendarMainButton;

const CalendarMainButtonStyle = styled.div`
  position: relative;
  z-index: 2;
  height: 0px;
`;

const ButtonWrapper = styled.div`
  cursor: pointer;
  user-select: none;
  border: 0px;
  padding: 0px;
  margin: 0px;
`;

const ButtonBox = styled.div`
  position: absolute;
  top: 0px;
  padding: 15px;

  ${({ direction }) => (direction === LEFT ? `left: 23px` : 'right: 23px')}
`;

const ButtonStyle = styled.button`
  appearance: none;
  display: flex;
  border-radius: 50%;
  border: none;
  outline: none;
  margin: 0px;
  padding: 0px;
  color: rgb(34, 34, 34);
  cursor: pointer;
  touch-action: manipulation;
  position: relative;
  background: transparent;
  transition: transform 0.25s ease 0s;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;

  :hover {
    background: rgb(247, 247, 247);
  }

  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    position: relative;

    svg {
      height: 20px;
      width: 20px;
      display: block;
      fill: #717171;
    }
  }
`;
