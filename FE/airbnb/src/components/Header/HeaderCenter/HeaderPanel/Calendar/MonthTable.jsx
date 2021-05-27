import styled from 'styled-components';
import EachDate from './EachDate';
import { v4 as uuidv4 } from 'uuid';

const MonthTable = ({ calendarBox }) => {
  return (
    <MonthTableStyle>
      <DateBoxWrapper>
        {calendarBox.dateList.map((date) => (
          <EachDate {...{ calendarBox, date }} key={uuidv4()} />
        ))}
      </DateBoxWrapper>
    </MonthTableStyle>
  );
};

export default MonthTable;

const MonthTableStyle = styled.div`
  border-spacing: 0px 2px;
  border-collapse: separate;
`;

const DateBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
