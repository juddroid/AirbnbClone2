import styled from 'styled-components';
import CopyrightBox from './CopyrightBox';

const Copyright = () => {
  return (
    <CopyrightStyle>
      <CopyrightWrapper>
        <CopyrightBox />
      </CopyrightWrapper>
    </CopyrightStyle>
  );
};

export default Copyright;

const CopyrightStyle = styled.div`
  flex: 1 1 0%;

  @media (min-width: 1128px) {
    margin-right: 40px;
  }
`;

const CopyrightWrapper = styled.div`
  @media (min-width: 744px) {
    text-align: center;
  }

  @media (min-width: 1128px) {
    text-align: left;
  }
`;
