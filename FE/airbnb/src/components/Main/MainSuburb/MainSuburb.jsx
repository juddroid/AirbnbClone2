import styled from 'styled-components';
import MainSuburbContent from './MainSuburbContent';
import { SectionWrapper } from '../../style/CommonStyles';

const MainSuburb = () => {
  return (
    <MainSuburbStyle>
      <SectionWrapper>
        <MainSuburbContent />
      </SectionWrapper>
    </MainSuburbStyle>
  );
};

export default MainSuburb;

const MainSuburbStyle = styled.div``;
