import styled from 'styled-components';
import CalendarMain from './CalendarMain';
import CalendarWeeks from './CalendarWeeks';

const CalendarList = () => {
  return (
    <CalendarListStyle>
      <CalendarListWrapper>
        <CalendarListBox>
          <CalendarWeeks />
          <CalendarMain />
        </CalendarListBox>
      </CalendarListWrapper>
    </CalendarListStyle>
  );
};

export default CalendarList;

const CalendarListStyle = styled.div`
  margin: 0px -36px;
  min-height: 340px;
`;

const CalendarListWrapper = styled.div`
  width: 801px;
  position: relative !important;
  text-align: left !important;
  background: rgb(255, 255, 255) !important;
`;

const CalendarListBox = styled.div`
  width: 800px;
`;
