import styled from 'styled-components';
import ExperienceBody from './ExperienceBody';
import ExperienceHeading from './ExperienceHeading';

const MainExperienceSection = () => {
  return (
    <MainExperienceSectionStyle>
      <ExperienceHeading />
      <ExperienceBody />
    </MainExperienceSectionStyle>
  );
};

export default MainExperienceSection;

const MainExperienceSectionStyle = styled.div``;
