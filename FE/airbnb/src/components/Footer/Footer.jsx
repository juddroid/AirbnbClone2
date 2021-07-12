import styled from 'styled-components';
import FooterBox from './FooterBox';

const Footer = () => {
  return (
    <FooterStyle>
      <FooterBox />
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  background-color: #f7f7f7;
  border-top: 1px solid #ddd;
`;
