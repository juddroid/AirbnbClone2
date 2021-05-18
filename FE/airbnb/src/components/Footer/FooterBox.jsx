import styled from 'styled-components';
import FooterInfo from './FooterInfo/FooterInfo';
import FooterPolicy from './FooterPolicy/FooterPolicy';

const FooterBox = () => {
  return (
    <FooterBoxStyle>
      <FooterInfo />
      <FooterPolicy />
    </FooterBoxStyle>
  );
};

export default FooterBox;

const FooterBoxStyle = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  margin: 0 auto;
  max-width: 1440px;

  @media (min-width: 375px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (min-width: 744px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 950px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 1128px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media (min-width: 1440px) {
    padding-left: 80px;
    padding-right: 80px;
  }
`;
