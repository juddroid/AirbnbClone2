import styled from 'styled-components';

const FooterInfo = () => {
  return <FooterInfoStyle>FooterInfo</FooterInfoStyle>;
};

export default FooterInfo;

const FooterInfoStyle = styled.div`
  padding: 32px 0 !important;

  @media (min-width: 744px) {
    display: flex !important;
    flex-direction: column !important;
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }
  @media (min-width: 1128px) {
    flex-direction: row !important;
    padding-top: 48px !important;
    padding-bottom: 48px !important;
    margin-left: -12px !important;
    margin-right: -12px !important;
  }
`;
