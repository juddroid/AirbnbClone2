import styled from 'styled-components';
import HeadingSubTitle from './ExperienceInfo/HeadingSubTitle';
import HeadingTitle from './ExperienceInfo/HeadingTitle';

const ExperienceHeading = () => {
  return (
    <ExperienceHeadingStyle>
      <HeadingTitle />
      <HeadingSubTitle />
    </ExperienceHeadingStyle>
  );
};

export default ExperienceHeading;

const ExperienceHeadingStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
`;
