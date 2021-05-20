import styled from 'styled-components';
import { LEFT, RIGHT } from '../../../../../const';
import Weeks from './Weeks';

const CalendarWeeks = () => {
  return (
    <CalendarWeeksStyle>
      <Weeks direction={LEFT} />
      <Weeks direction={RIGHT} />
    </CalendarWeeksStyle>
  );
};

export default CalendarWeeks;

const CalendarWeeksStyle = styled.div`
  position: relative;
  margin-left: 9px;
`;
