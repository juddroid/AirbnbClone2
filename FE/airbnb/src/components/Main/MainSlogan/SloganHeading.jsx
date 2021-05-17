import styled from 'styled-components';
import { SLOGAN_HEADING } from '../../../const';
import { SloganSpanStyle } from '../../style/CommonStyles';

const SloganHeading = () => {
  return (
    <SloganHeadingStyle>
      <span>{SLOGAN_HEADING}</span>
    </SloganHeadingStyle>
  );
};

export default SloganHeading;

const SloganHeadingStyle = styled(SloganSpanStyle)`
  span {
    white-space: pre-line;
    max-width: 100%;
    font-size: var(--tl-font-size, 32px);
    font-weight: var(--tl-font-weight, 800);
    letter-spacing: var(--tl-letter-spacing, 0em);
    line-height: var(--tl-line-height, 36px);
    color: var(--tl-color, #222);
  }
`;
