import styled from 'styled-components';
import MonthHeader from './MonthHeader';
import MonthTable from './MonthTable';

const Month = ({ today, calendar, month }) => {
  return (
    <MonthStyle>
      <MonthWrapper>
        <MonthHeader {...{ today, month }} />
        <MonthTable {...{ calendar, today, month }} />
      </MonthWrapper>
    </MonthStyle>
  );
};

export default Month;

const MonthWrapper = styled.div`
  padding: 0px 27px;
  background: rgb(255, 255, 255);
  text-align: center;
  vertical-align: top;
  user-select: none;
`;

const MonthStyle = styled.div`
  display: inline-block;
  vertical-align: top;
  min-height: 100%;
`;
