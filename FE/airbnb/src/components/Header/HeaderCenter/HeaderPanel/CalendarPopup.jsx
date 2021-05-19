import { useState } from 'react';
import styled from 'styled-components';
import { CALENDAR, FREE } from '../../../../const';
import CalendarTabsButton from './Calendar/CalendarTabsButton';

const CalendarPopup = () => {
  const [tabState, setTabState] = useState(true);

  return (
    <CalendarPopupStyle>
      <CalendarSection>
        <CalendarTabs>
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
        </CalendarTabs>
      </CalendarSection>
    </CalendarPopupStyle>
  );
};

export default CalendarPopup;

const CalendarPopupStyle = styled.div`
  outline: 1px solid red;
  position: absolute;
  left: 0px;
  top: 100%;
  z-index: 1;
  background: rgb(255, 255, 255);
  border-radius: 32px;
  box-shadow: rgb(0 0 0 / 20%) 0px 6px 20px;
  margin-top: 12px;
  max-height: calc(100vh - 220px);
  overflow: hidden auto;
  padding: 16px 32px;
  right: 0px;
`;

const CalendarSection = styled.section`
  padding-top: 16px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarTabs = styled.div`
  padding-bottom: 32px;
`;

const CalendarTabsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarTabsBox = styled.div`
  background-color: rgb(235, 235, 235);
  border-radius: 100px;
  padding-left: 4px;
  padding-right: 4px;
  display: flex;
`;
