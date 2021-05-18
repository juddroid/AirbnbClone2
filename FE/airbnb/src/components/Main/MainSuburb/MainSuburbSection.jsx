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

const MainSuburbSectionStyle = styled.div``;
