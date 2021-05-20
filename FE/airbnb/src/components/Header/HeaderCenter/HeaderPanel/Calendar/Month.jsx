import { useState } from 'react';
import styled from 'styled-components';
import { LASTDATE_LIST } from '../../../../../const';
import { getDateList } from '../../../../../util';
import MonthHeader from './MonthHeader';
import MonthTable from './MonthTable';

const Month = ({ today, month }) => {
  const currentDateList = getDateList(month);
  const [dateList, setDateList] = useState(currentDateList);

  return (
    <MonthStyle>
      <MonthHeader {...{ today, month }} />
      <MonthTable {...{ dateList }} />
    </MonthStyle>
  );
};

export default Month;

const MonthStyle = styled.div`
  padding: 0px 27px;

  background: rgb(255, 255, 255);
  text-align: center;
  vertical-align: top;
  user-select: none;
`;
