import { useState } from 'react';
import styled from 'styled-components';
import { CALENDAR, FREE } from '../../../../const';
import CalendarTabsButton from './Calendar/CalendarTabsButton';
// import RaccoonSlider from '@juddroid_raccoon/react-slider/dist/raccoonSlider/RaccoonSlider';
import CalendarList from './Calendar/CalendarList';

const CalendarPopup = () => {
  const [tabState, setTabState] = useState(true);

  // const data = [
  //   { data: '1' },
  //   { data: '2' },
  //   { data: '3' },
  //   { data: '4' },
  //   { data: '5' },
  //   { data: '6' },
  //   { data: '7' },
  //   { data: '8' },
  //   { data: '9' },
  //   { data: '10' },
  //   { data: '11' },
  //   { data: '12' },
  //   { data: '13' },
  //   { data: '14' },
  //   { data: '15' },
  //   { data: '16' },
  //   { data: '17' },
  //   { data: '18' },
  //   { data: '19' },
  // ];

  // const option = {
  //   cardSize: 150,
  //   cardMargin: 5,
  //   displayCardCount: 3,
  //   buttonType: 'default',
  //   buttonSize: 24,
  // };

  return (
    <CalendarSection>
      <CalendarWrapper>
        <CalendarTabsWrapper>
          <CalendarTabsBox>
            <CalendarTabsButton
              {...{ setTabState }}
              buttonName={CALENDAR}
              selected={tabState}
            />
            <CalendarTabsButton
              {...{ setTabState }}
              buttonName={FREE}
              selected={!tabState}
            />
          </CalendarTabsBox>
        </CalendarTabsWrapper>
        <CalendarListWrapper>
          <CalendarList />
          {/* <RaccoonSlider data={data} option={option} /> */}
        </CalendarListWrapper>
      </CalendarWrapper>
    </CalendarSection>
  );
};

export default CalendarPopup;

const CalendarSection = styled.section`
  padding-top: 16px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarWrapper = styled.div``;

const CalendarTabsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 32px;
`;

const CalendarTabsBox = styled.div`
  background-color: rgb(235, 235, 235);
  border-radius: 100px;
  padding-left: 4px;
  padding-right: 4px;
  display: flex;
`;

const CalendarListWrapper = styled.div``;
