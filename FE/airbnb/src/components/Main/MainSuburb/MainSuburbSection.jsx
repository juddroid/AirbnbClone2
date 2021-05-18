import styled from 'styled-components';
import MainSuburbSectionContent from './MainSuburbSectionContent';
import MainSuburbSectonTitle from './MainSuburbSectonTitle';

const MainSuburbSection = () => {
  return (
    <MainSuburbSectionStyle>
      <MainSuburbSectonTitle />
      <MainSuburbSectionContent />
    </MainSuburbSectionStyle>
  );
};

export default MainSuburbSection;

const MainSuburbSectionStyle = styled.div``;
