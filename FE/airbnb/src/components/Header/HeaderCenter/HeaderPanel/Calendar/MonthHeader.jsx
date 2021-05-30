import styled from 'styled-components';

const MonthHeader = ({ calendarBox }) => {
  const month = calendarBox.month + 1 === 13 ? 1 : calendarBox.month + 1;
  return (
    <MonthHeaderStyle>
      <MonthTitle>
        {calendarBox.year}년 {month}월
      </MonthTitle>
    </MonthHeaderStyle>
  );
};

export default MonthHeader;

const MonthHeaderStyle = styled.div`
  color: rgb(72, 72, 72);
  font-size: 18px;
  text-align: center;
  padding-top: 22px;
  padding-bottom: 40px;
  caption-side: initial;
`;

const MonthTitle = styled.div`
  font-size: 15px;
  color: rgb(34, 34, 34);
  font-weight: 500;
`;
