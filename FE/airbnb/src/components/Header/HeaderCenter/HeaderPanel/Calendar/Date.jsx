import { useState } from 'react';
import styled from 'styled-components';
import { setState, setToggle } from '../../../../../util.ts';

const Date = ({ date }) => {
  const [dateHover, setDateHover] = useState(false);
  const [seleted, setSelected] = useState(false);
  const [seletedCount, setSelectedCount] = useState(0);

  return (
    <DateStyle>
      <DateBox
        {...{ dateHover, seleted }}
        onMouseEnter={() => setState(setDateHover, true)}
        onMouseLeave={() => setState(setDateHover, false)}
        onMouseDown={() => setToggle(setSelected, seleted)}
      >
        <DateBoxDiv>
          <DateNum>{date}</DateNum>
        </DateBoxDiv>
      </DateBox>
    </DateStyle>
  );
};

export default Date;

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

  ${({ dateHover }) =>
    dateHover &&
    `
    border: 1px solid #222;
    border-radius: 50%;
  `}
  ${({ seleted }) =>
    seleted &&
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

  /* 지나간 날짜 */
  /* color: rgb(72, 72, 72);
  opacity: 0.25; */
`;

const DateNum = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
`;
