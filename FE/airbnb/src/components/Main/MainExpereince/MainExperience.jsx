import styled from 'styled-components';
import { SectionWrapper } from '../../style/CommonStyles';
import MainExperienceContent from './MainExperienceContent';

const MainExperience = () => {
  return (
    <MainExperienceStyle>
      <SectionWrapper>
        <MainExperienceContent />
      </SectionWrapper>
    </MainExperienceStyle>
  );
};

export default MainExperience;

const MainExperienceStyle = styled.div``;
