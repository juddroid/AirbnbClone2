import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { CHECK_IN, CHECK_OUT } from '../../../../../const';
import { current } from '../../../../../Recoil/CalendarState';
import {
  checkInButtonState,
  checkInField,
  checkOutButtonState,
  checkOutDeleteButton,
  checkOutField,
} from '../../../../../Recoil/HeaderFieldsetState';
import { setState, setToggle } from '../../../../../util.ts';

const EachDate = ({ eachMonth, setEachMonth, dateState }) => {
  const [selected, setSelected] = useState(false);
  const [isPast, setIsPast] = useState(true);
  const [disable, setDisable] = useState(false);
  const [checkInDate, setCheckInDate] = useRecoilState(checkInField);
  const [checkOutDate, setCheckOutDate] = useRecoilState(checkOutField);
  const [dateBox, setDateBox] = useState(dateState);
  const now = useRecoilValue(current);
  const setCheckInButton = useSetRecoilState(checkInButtonState);
  const setCheckOutButton = useSetRecoilState(checkOutButtonState);
  const setCheckOutDelete = useSetRecoilState(checkOutDeleteButton);

  const { date, range, hover } = dateBox;
  const selectedCheckInDate = {
    year: checkInDate.value.year,
    month: checkInDate.value.month,
    date: checkInDate.value.date,
  };
  const selectedCheckOutDate = {
    year: checkOutDate.value.year,
    month: checkOutDate.value.month,
    date: checkOutDate.value.date,
  };

  const selectCheckIn = () => {
    if (checkInDate.state) return;
    setCheckInDate({
      value: {
        year: eachMonth.year,
        month: eachMonth.month,
        date: date,
      },
      state: true,
    });
    setCheckInButton(false);
    setCheckOutButton(true);
  };

  const selectCheckOut = () => {
    if (checkOutDate.state) return;
    setCheckOutDate({
      value: {
        year: eachMonth.year,
        month: eachMonth.month,
        date: date,
      },
      state: true,
    });
    setCheckOutDelete(true);
  };

  const checkPanelTab = () => {
    if (!checkInDate.state && !checkOutDate.state) return CHECK_IN;
    if (checkInDate.state && !checkOutDate.state) return CHECK_OUT;
    if (checkInDate.state && checkOutDate.state) return CHECK_IN;
    if (!checkInDate.state && checkOutDate.state) return CHECK_IN;
  };

  const currentDate = new Date(eachMonth.year, eachMonth.month, date);

  const handleClickDate = () => {
    setToggle(setSelected, selected);

    if (checkPanelTab() === CHECK_IN) return selectCheckIn();
    if (checkPanelTab() === CHECK_OUT) return selectCheckOut();
  };
  const todayDate = new Date(now.year, now.month, now.date);
  const selectedCheckIn = new Date(
    selectedCheckInDate.year,
    selectedCheckInDate.month,
    selectedCheckInDate.date
  );

  const checkSelected = () => {
    if (
      selectedCheckInDate.year === eachMonth.year &&
      selectedCheckInDate.month === eachMonth.month &&
      selectedCheckInDate.date === date
    ) {
      setSelected(true);
    }
    if (
      selectedCheckOutDate.year === eachMonth.year &&
      selectedCheckOutDate.month === eachMonth.month &&
      selectedCheckOutDate.date === date
    ) {
      setSelected(true);
    }
  };

  const handleOnMouseEnter = () => {
    // setEachMonth({
    //   ...eachMonth,
    //   dateList: eachMonth.dateList.map((date) => {
    //     const eachDate = new Date(eachMonth.year, eachMonth.month, date.date);
    //     console.log(date);
    //     return !isPast && date.date === dateState.date
    //       ? { ...date, hover: true }
    //       : date;
    //   }),
    // });

    setDateBox({ ...dateBox, hover: true });
  };

  const handleOnMouseLeave = () => {
    // setEachMonth({
    //   ...eachMonth,
    //   dateList: eachMonth.dateList.map(
    //     (date) => (date = { ...date, hover: false, range: false })
    //   ),
    // });
    setDateBox({ ...dateBox, hover: false });
  };

  useEffect(() => {
    setIsPast(todayDate > currentDate);
    setDisable(todayDate > currentDate || date === null);
    checkSelected();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DateStyle {...{ checkInDate, checkOutDate, selected, range }}>
      <DateBox
        {...{ hover, selected }}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
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
  border-radius: 4px;
  margin: 1px 0px;
  box-sizing: border-box;
  font-size: 14px;
  text-align: center;
  cursor: default;

  ${({ checkInDate, selected }) =>
    selected &&
    checkInDate.state &&
    `
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    background: rgb(247, 247, 247);
  `};
  ${({ checkInDate, range }) =>
    range &&
    checkInDate.state &&
    `
      border-radius: 0;
      background: rgb(247, 247, 247);
  `};

  /* ${({ checkOutDate, selected, isRange }) =>
    selected &&
    checkOutDate.state &&
    // isRange &&
    `
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    background: rgb(247, 247, 247);
  `}; */
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

  ${({ hover }) =>
    hover &&
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
