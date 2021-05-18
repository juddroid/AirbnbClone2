import styled from 'styled-components';
import { COPYRIGHT } from '../../../../const';

const CopyrightBoxLeft = () => {
  return <CopyrightBoxLeftStyle>{COPYRIGHT}</CopyrightBoxLeftStyle>;
};

export default CopyrightBoxLeft;

const CopyrightBoxLeftStyle = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #222;
  display: inline-block;

  @media (min-width: 1128px) {
    margin-right: 19px;
  }
`;
