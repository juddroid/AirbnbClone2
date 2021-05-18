import styled from 'styled-components';
import { SectionContentWrapper } from '../../style/CommonStyles';
import MainSuburbSection from './MainSuburbSection';

const MainSuburbContent = () => {
  return (
    <MainSuburbContentStyle>
      <SectionContentWrapper>
        <MainSuburbSection />
      </SectionContentWrapper>
    </MainSuburbContentStyle>
  );
};

export default MainSuburbContent;

const MainSuburbContentStyle = styled.div`
  width: 100%;
`;
