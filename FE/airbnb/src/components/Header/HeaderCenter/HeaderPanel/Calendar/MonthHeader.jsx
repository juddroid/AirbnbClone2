import styled from 'styled-components';

const MonthHeader = ({ calendarData, month }) => {
  console.log(calendarData.year);
  return (
    <MonthHeaderStyle>
      <MonthTitle>
        {calendarData.year}년 {month + 1}월
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
