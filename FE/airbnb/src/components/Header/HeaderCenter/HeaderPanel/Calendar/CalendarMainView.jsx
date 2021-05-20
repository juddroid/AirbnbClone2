import { useState } from 'react';
import styled from 'styled-components';

import Month from './Month';

const CalendarMainView = () => {
  const initialData = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  };
  const [today, setToday] = useState(initialData);

  return (
    <CalendarMainViewStyle>
      <CalendarMainViewWrapper>
        <FirstMonthStyle>
          <Month {...{ today }} month={today.month - 1} />
        </FirstMonthStyle>
        <SecondMonthStyle>
          <Month {...{ today }} month={today.month} />
        </SecondMonthStyle>
        <SecondMonthStyle>
          <Month {...{ today }} month={today.month + 1} />
        </SecondMonthStyle>
        <ThirdMonthStyle>
          <Month {...{ today }} month={today.month + 2} />
        </ThirdMonthStyle>
      </CalendarMainViewWrapper>
    </CalendarMainViewStyle>
  );
};

export default CalendarMainView;

const CalendarMainViewStyle = styled.div`
  width: 800px;
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  transition: height 0.2s ease-in-out 0s;
`;

const CalendarMainViewWrapper = styled.div`
  transform: translateX(0px);
  width: 1564px;

  background: rgb(255, 255, 255);
  text-align: left;
  z-index: 0;

  left: 9px;
`;

const FirstMonthStyle = styled.div`
  display: inline-block;
  vertical-align: top;
  min-height: 100%;
  position: absolute;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
`;

const SecondMonthStyle = styled.div`
  display: inline-block;
  vertical-align: top;
  min-height: 100%;
`;

const ThirdMonthStyle = styled.div`
  display: inline-block;
  vertical-align: top;
  min-height: 100%;
  visibility: hidden;
`;
