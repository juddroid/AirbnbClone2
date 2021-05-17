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
  display: none;
  z-index: 0;
  flex-direction: column;
  width: 280px;
  align-items: var(--ac-sm-tc-align-items, flex-start);
  text-align: var(--ac-sm-tc-text-align, start);

  outline: 1px solid red;
  @media ${({ theme }) => theme.M} {
    width: 338px;
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
    width: 312px;
  }
  @media ${({ theme }) => theme.XXL} {
    width: 416px;
  }
`;
