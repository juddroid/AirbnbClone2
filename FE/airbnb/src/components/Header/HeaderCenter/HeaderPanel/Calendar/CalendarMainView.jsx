import styled from 'styled-components';
import Month from './Month';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  calendar,
  todayData,
  calendarWrapperSize,
  calendarList,
  monthList,
  animation,
} from '../../../../../Recoil/CalendarState';
import { useEffect } from 'react';
import { getDateList } from '../../../../../util';
import { v4 as uuidv4 } from 'uuid';

const CalendarMainView = () => {
  const calendarData = useRecoilValue(todayData);
  const displayMonthList = useRecoilValue(monthList);
  const animationState = useRecoilValue(animation);
  const calendarPosition = useRecoilValue(calendar);
  const [calList, setCalList] = useRecoilState(calendarList);
  const [boxHeight, setBoxHeight] = useRecoilState(calendarWrapperSize);
  console.log(calList);
  useEffect(() => {
    const newCalendarList = displayMonthList.map((month) =>
      getDateList(calendarData, month)
    );
    setCalList(newCalendarList);

    setBoxHeight(
      calList && (calList[1].length > 34 || calList[2].length > 34) ? 378 : 340
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayMonthList, boxHeight]);

  if (!calList) return null;

  return (
    <CalendarMainViewStyle {...{ boxHeight }}>
      <CalendarMainViewWrapper {...{ calendarPosition, animationState }}>
        {calList.map((calendar, idx) => (
          <Month
            {...{ calendar, calendarData }}
            month={displayMonthList[idx]}
            key={uuidv4()}
          />
        ))}
      </CalendarMainViewWrapper>
    </CalendarMainViewStyle>
  );
};

export default CalendarMainView;

const CalendarMainViewStyle = styled.div`
  width: 800px;
  height: ${({ boxHeight }) => `${boxHeight}px`};
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  transition: height 0.2s ease-in-out 0s;
`;

const CalendarMainViewWrapper = styled.div`
  transform: ${({ calendarPosition }) => `translateX(${calendarPosition}px)`};
  width: 1564px;
  position: absolute;
  background: rgb(255, 255, 255);
  text-align: left;
  z-index: 0;
  left: 9px;
  transition: ${({ animationState }) =>
    animationState &&
    `
  transform 200ms ease-in-out 0s;
  `};
`;
