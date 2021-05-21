import styled from 'styled-components';
import FooterInfoSection from './FooterInfoSection';
import { FOOTER_SECTION } from '../../../const';
import { v4 as uuidv4 } from 'uuid';

const FooterInfo = () => {
  return (
    <FooterInfoStyle>
      {FOOTER_SECTION.map((data) => (
        <FooterInfoSection {...{ data }} key={uuidv4()} />
      ))}
    </FooterInfoStyle>
  );
};

export default FooterInfo;

const FooterInfoStyle = styled.div`
  padding: 32px 0;

  @media (min-width: 744px) {
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media (min-width: 1128px) {
    flex-direction: row;
    padding-top: 48px;
    padding-bottom: 48px;
    margin-left: -12px;
    margin-right: -12px;
  }
`;
