import styled from 'styled-components';
import Month from './Month';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  calendar,
  todayDate,
  calendarWrapperSize,
  calendarList,
  displayMonth,
  monthList,
} from '../../../../../Recoil/CalendarState';
import { useEffect } from 'react';
import { getDateList } from '../../../../../util';
import { v4 as uuidv4 } from 'uuid';

const CalendarMainView = () => {
  const today = useRecoilValue(todayDate);
  const calendarPosition = useRecoilValue(calendar);

  const [calList, setCalList] = useRecoilState(calendarList);
  const [boxHeight, setBoxHeight] = useRecoilState(calendarWrapperSize);
  const [thisMonth, setThisMonth] = useRecoilState(displayMonth);
  const [displayMonthList, setDisplayMonthList] = useRecoilState(monthList);

  useEffect(() => {
    setThisMonth(today.month);

    const newCalendarList = [
      getDateList(today, thisMonth - 1),
      getDateList(today, thisMonth),
      getDateList(today, thisMonth + 1),
      getDateList(today, thisMonth + 2),
    ];
    const newDisplayMonthList = [
      thisMonth - 1,
      thisMonth,
      thisMonth + 1,
      thisMonth + 2,
    ];
    setDisplayMonthList(newDisplayMonthList);
    setCalList(newCalendarList);

    setBoxHeight(
      calList && (calList[1].legnth > 35 || calList[2].length > 35) ? 340 : 378
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    setBoxHeight,
    setCalList,
    setDisplayMonthList,
    setThisMonth,
    thisMonth,
    today,
  ]);

  if (!calList) return null;

  console.log(thisMonth);
  return (
    <CalendarMainViewStyle {...{ boxHeight }}>
      <CalendarMainViewWrapper {...{ calendarPosition }}>
        {calList.map((calendar, idx) => (
          <Month
            {...{ calendar, today }}
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
  transition: transrform 200ms ease-in-out 0s;
`;
