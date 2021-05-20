import styled from 'styled-components';
import Date from './Date';
import { v4 as uuidv4 } from 'uuid';

const MonthTable = ({ dateList }) => {
  return (
    <MonthTableStyle>
      <DateBoxWrapper>
        {dateList.map((date) => (
          <Date {...{ date }} key={uuidv4()} />
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
