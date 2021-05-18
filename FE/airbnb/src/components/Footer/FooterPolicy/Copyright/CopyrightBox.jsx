import styled from 'styled-components';
import CopyrightBoxLeft from './CopyrightBoxLeft';
import CopyrightBoxRight from './CopyrightBoxRight';

const CopyrightBox = () => {
  return (
    <CopyrightBoxStyle>
      <CopyrightBoxLeft />
      <CopyrightBoxRight />
    </CopyrightBoxStyle>
  );
};

export default CopyrightBox;

const CopyrightBoxStyle = styled.div`
  @media (min-width: 1128px) {
    overflow: hidden;
  }
`;
