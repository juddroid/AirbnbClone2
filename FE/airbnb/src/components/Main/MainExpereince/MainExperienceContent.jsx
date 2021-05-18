import styled from 'styled-components';
import { SectionContentWrapper } from '../../style/CommonStyles';
import MainExperienceSection from './MainExperienceSection';

const MainExperienceContent = () => {
  return (
    <MainExperienceContentStyle>
      <SectionContentWrapper>
        <MainExperienceSection />
      </SectionContentWrapper>
    </MainExperienceContentStyle>
  );
};

export default MainExperienceContent;

const MainExperienceContentStyle = styled.div``;
