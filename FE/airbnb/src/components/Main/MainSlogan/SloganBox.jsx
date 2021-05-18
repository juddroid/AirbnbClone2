import styled from 'styled-components';
import { SloganFlexStyle } from '../../style/CommonStyles';
import SloganContent from './SloganContent';
import SloganHeading from './SloganHeading';
import SloganTarget from './SloganTarget';

const SloganBox = () => {
  return (
    <SloganBoxStyle>
      <SloganHeading />
      <SloganContent />
      <SloganTarget />
    </SloganBoxStyle>
  );
};

export default SloganBox;

const SloganBoxStyle = styled(SloganFlexStyle)`
  display: flex;
  z-index: 0;
  flex-direction: column;
  width: 250px;
  align-items: var(--ac-sm-tc-align-items, flex-start);
  text-align: var(--ac-sm-tc-text-align, start);

  @media ${({ theme }) => theme.M} {
    display: flex;
    width: 345px;
    align-items: var(--ac-md-tc-align-items, flex-start);
    text-align: var(--ac-md-tc-text-align, start);
  }
  @media ${({ theme }) => theme.L} {
    display: flex;
    width: 383px;
    align-items: var(--ac-lg-tc-align-items, flex-start);
    text-align: var(--ac-lg-tc-text-align, start);
  }
  @media ${({ theme }) => theme.XL} {
    width: 250px;
  }
  @media ${({ theme }) => theme.XXL} {
    width: 400px;
  }
`;
