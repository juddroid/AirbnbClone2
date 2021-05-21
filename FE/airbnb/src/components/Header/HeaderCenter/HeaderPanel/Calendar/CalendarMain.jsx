import styled from 'styled-components';
import CalendarMainButton from './CalendarMainButton';
import CalendarMainView from './CalendarMainView';

const CalendarMain = () => {
  return (
    <CalendarMainStyle>
      <CalendarMainButton />
      <CalendarMainView />
    </CalendarMainStyle>
  );
};

export default CalendarMain;

const CalendarMainStyle = styled.div``;
