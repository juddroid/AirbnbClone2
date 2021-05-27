import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  current,
  selectedCheckInDate,
  selectedCheckOutDate,
  todayData,
} from '../../../../../Recoil/CalendarState';
import {
  checkInField,
  checkOutField,
} from '../../../../../Recoil/HeaderFieldsetState';
import { setState, setToggle } from '../../../../../util.ts';

const EachDate = ({ calendarBox, date }) => {
  const [dateHover, setDateHover] = useState(false);
  const [selected, setSelected] = useState(false);
  // const [seletedCount, setSelectedCount] = useState(0);
  const [isPast, setIsPast] = useState(true);
  const [disable, setDisable] = useState(false);
  const setCheckInDate = useSetRecoilState(checkInField);
  const setCheckOutDate = useSetRecoilState(selectedCheckOutDate);
  const setCheckInDateField = useSetRecoilState(checkInField);
  const setCheckOutDateField = useSetRecoilState(checkOutField);
  const now = useRecoilValue(current);

  const selectCheckIn = () => {
    setCheckInDate({
      year: calendarBox.year,
      month: calendarBox.month,
      date: date,
    });
  };

  const handleClickDate = () => {
    setToggle(setSelected, selected);
    selectCheckIn();
  };

  // 1. 체크인 상태
  // 2. 날짜를 선택하면 필드에 날짜가 업데이트 된다. (필드 날짜는 진해진다.)
  // 3. 탭을 체크아웃으로 옮겨준다.

  useEffect(() => {
    const todayDate = new Date(now.year, now.month, now.date, 0, 0, 0);
    const currentDate = new Date(
      calendarBox.year,
      calendarBox.month,
      date,
      0,
      0,
      0
    );

    setIsPast(todayDate > currentDate);
    setDisable(todayDate > currentDate || date === null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DateStyle>
      <DateBox
        {...{ dateHover, selected }}
        onMouseEnter={() => !isPast && setState(setDateHover, true)}
        onMouseLeave={() => setState(setDateHover, false)}
        onMouseDown={handleClickDate}
        disabled={disable}
      >
        <DateBoxDiv {...{ isPast }}>
          <DateNum>{date}</DateNum>
        </DateBoxDiv>
      </DateBox>
    </DateStyle>
  );
};

export default EachDate;

const DateStyle = styled.div`
  width: 48px;
  height: 47px;
  border: 0px;
  padding: 0px;
  /* border-top-left-radius: 4px;
  border-bottom-left-radius: 4px; */
  border-radius: 4px;
  /* 지나간 날짜 */
  /* background: rgb(247, 247, 247); */

  margin: 1px 0px;
  box-sizing: border-box;
  font-size: 14px;
  text-align: center;
  cursor: default;
`;

const DateBox = styled.button`
  width: 100%;
  height: 100%;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;

  :disabled {
    cursor: default;
  }

  ${({ dateHover }) =>
    dateHover &&
    `
    border: 1px solid #222;
    border-radius: 50%;
  `}
  ${({ selected }) =>
    selected &&
    `
  background: #222;
  color: #fff;
  border-radius: 50%;`}
`;

const DateBoxDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${({ isPast }) =>
    isPast &&
    `
    color: rgb(72, 72, 72);
  opacity: 0.25;`}
`;

const DateNum = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
`;
