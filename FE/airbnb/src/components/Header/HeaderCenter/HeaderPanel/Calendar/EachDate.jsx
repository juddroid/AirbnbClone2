import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  CHECK_IN,
  CHECK_OUT,
  INPUT_DATE_PLACEHOLDER,
} from '../../../../../const';
import { current } from '../../../../../Recoil/CalendarState';
import {
  checkInButtonState,
  checkInField,
  checkOutButtonState,
  checkOutDeleteButton,
  checkOutField,
} from '../../../../../Recoil/HeaderFieldsetState';
import { getDate } from '../../../../../util';
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
  const [checkOutButton, setCheckOutButton] =
    useRecoilState(checkOutButtonState);
  const setCheckOutDelete = useSetRecoilState(checkOutDeleteButton);

  const { date, range, hover } = dateBox;

  // 컴포넌트 날짜
  const currentComponentDate = new Date(eachMonth.year, eachMonth.month, date);

  const currentDate = {
    year: eachMonth.year,
    month: eachMonth.month,
    date: date,
  };

  // 선택된 체크인 날짜
  const selectedCheckInDate = {
    year: checkInDate.value.year,
    month: checkInDate.value.month,
    date: checkInDate.value.date,
  };

  // 선택된 체크아웃 날짜
  const selectedCheckOutDate = {
    year: checkOutDate.value.year,
    month: checkOutDate.value.month,
    date: checkOutDate.value.date,
  };

  const componentDate = getDate(currentDate);
  const selectedCheckIn = getDate(selectedCheckInDate);
  const selectedCheckOut = getDate(selectedCheckOutDate);

  const activeDate = (setCallback) =>
    setCallback({
      value: currentDate,
      state: true,
    });

  const resetDate = (setCallback) =>
    setCallback({
      value: INPUT_DATE_PLACEHOLDER,
      state: false,
    });

  const selectCheckIn = () => {
    if (componentDate > selectedCheckOut) {
      activeDate(setCheckInDate);
      resetDate(setCheckOutDate);
      setCheckInButton(false);
      setCheckOutButton(true);
      setCheckOutDelete(false);
      return;
    }
    if (checkOutDate.state) {
      checkSelected();
      setCheckOutDelete(true);
    }
    if (checkInDate.state) return;
    activeDate(setCheckInDate);
    setCheckInButton(false);
    setCheckOutButton(true);
  };

  const selectCheckOut = () => {
    if (checkOutDate.state) return;
    if (!checkInDate.state) {
      setCheckInButton(true);
      setCheckOutButton(false);
      activeDate(setCheckOutDate);
      return;
    }
    activeDate(setCheckOutDate);
    setCheckOutDelete(true);
  };

  const checkPanelTab = () => {
    if (checkInDate.state && checkOutDate.state) return thirdDate();

    if (!checkInDate.state && !checkOutDate.state && checkOutButton)
      return CHECK_OUT;
    if (!checkInDate.state && !checkOutDate.state) return CHECK_IN;
    if (checkInDate.state && !checkOutDate.state) return thirdDate();
    if (!checkInDate.state && checkOutDate.state) return CHECK_IN;
  };

  const thirdDate = () => {
    if (componentDate < selectedCheckIn) {
      activeDate(setCheckInDate);
      resetDate(setCheckOutDate);
      setCheckOutDelete(false);
      return;
    }
    if (componentDate > selectedCheckIn) {
      activeDate(setCheckOutDate);
      setCheckOutDelete(true);
      checkSelected();
      return;
    }
  };

  // 1. 체크인필드 true, 체크아웃필드 false, 체크아웃 버튼 true 일 때, 체크인 버튼을 클릭하면
  // 2. 체크인 버튼 활성화, 엑스버튼 활성화
  //  2-1. 엑스버튼 누르면 체크인필드 리셋
  // 3. 반대로, 체크아웃필드 true, 체크인필드 false, 체크인 버튼 true 일 때, 체크아웃 버튼을 클릭하면
  // 4. 체크아웃 버튼 활성화, 엑스버튼 활성화
  //  4-1. 엑스버튼 누르면 체크아웃필드 리셋

  const handleClickDate = () => {
    setState(setSelected, true);

    if (checkPanelTab() === CHECK_IN) return selectCheckIn();
    if (checkPanelTab() === CHECK_OUT) return selectCheckOut();
  };
  const todayDate = new Date(now.year, now.month, now.date);

  const checkSelected = () => {
    if (
      selectedCheckInDate.year === eachMonth.year &&
      selectedCheckInDate.month === eachMonth.month &&
      selectedCheckInDate.date === date
    ) {
      return setSelected(true);
    }
    if (
      selectedCheckOutDate.year === eachMonth.year &&
      selectedCheckOutDate.month === eachMonth.month &&
      selectedCheckOutDate.date === date
    ) {
      return setSelected(true);
    }
    setSelected(false);
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
    setIsPast(todayDate > currentComponentDate);
    setDisable(todayDate > currentComponentDate || date === null);
    checkSelected();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkInDate, checkOutDate]);

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
