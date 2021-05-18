import styled from 'styled-components';
import { SECTION_STAY_DATA } from '../../../const';
import StayInfo from './StayInfo/StayInfo';
import { v4 as uuidv4 } from 'uuid';

const MainStaySectionContent = () => {
  return (
    <MainStaySectionContentStyle>
      <StayInfoUl>
        {SECTION_STAY_DATA.map((data) => (
          <StayInfo data={data.data} key={uuidv4()} />
        ))}
      </StayInfoUl>
    </MainStaySectionContentStyle>
  );
};

export default MainStaySectionContent;

const MainStaySectionContentStyle = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  position: relative;
  z-index: 0;
`;

const StayInfoUl = styled.ul`
  margin-left: -5px;
  margin-right: -5px;
  display: flex;
  height: 100%;
  list-style: none;
  overflow: auto hidden;
  padding-left: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  min-width: 100%;
  scroll-snap-type: x mandatory;
`;
