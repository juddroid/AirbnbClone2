import styled from 'styled-components';
import Copyright from './Copyright/Copyright';
import Social from './Social/Social';

const FooterPolicy = () => {
  return (
    <FooterPolicyStyle>
      <FooterSectionStyle>
        <Social />
        <Copyright />
      </FooterSectionStyle>
    </FooterPolicyStyle>
  );
};

export default FooterPolicy;

const FooterPolicyStyle = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  border-top: 1px solid #ddd;
`;

const FooterSectionStyle = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 744px) {
    align-items: center;
    text-align: center;
  }
  @media (min-width: 1128px) {
    text-align: left;
    flex-direction: row-reverse;
    align-items: stretch;
    justify-content: space-between;
  }
`;
