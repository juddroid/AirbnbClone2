import styled from 'styled-components';
import { SECTION_STAY } from '../../../const';
import SectionTitle from '../Section/SectionTitle';
import MainStaySectionContent from './MainStaySectionContent';

const MainStaySection = () => {
  return (
    <MainStaySectionStyle>
      <SectionTitle title={SECTION_STAY} />
      <MainStaySectionContent />
    </MainStaySectionStyle>
  );
};

export default MainStaySection;

const MainStaySectionStyle = styled.div``;
