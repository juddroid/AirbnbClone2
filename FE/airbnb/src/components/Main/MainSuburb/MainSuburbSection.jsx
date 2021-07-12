import styled from 'styled-components';
import { SECTION_SUBURB } from '../../../const';
import SectionTitle from '../Section/SectionTitle';
import MainSuburbSectionContent from './MainSuburbSectionContent';

const MainSuburbSection = () => {
  return (
    <MainSuburbSectionStyle>
      <SectionTitle title={SECTION_SUBURB} />
      <MainSuburbSectionContent />
    </MainSuburbSectionStyle>
  );
};

export default MainSuburbSection;

const MainSuburbSectionStyle = styled.div`
  margin-left: -24px;
  margin-right: -24px;

  @media (min-width: 744px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;
