import styled from 'styled-components';
import { SectionContentWrapper } from '../../style/CommonStyles';
import MainStaySection from './MainStaySection';

const MainStayContent = () => {
  return (
    <MainStayContentStyle>
      <SectionContentWrapper>
        <MainStaySection />
      </SectionContentWrapper>
    </MainStayContentStyle>
  );
};

export default MainStayContent;

const MainStayContentStyle = styled.div`
  width: 100%;
`;
