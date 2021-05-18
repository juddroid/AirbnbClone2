import styled from 'styled-components';

const CopyRight = () => {
  return <CopyRightStyle>CopyRight</CopyRightStyle>;
};

export default CopyRight;

const CopyRightStyle = styled.div`
  display: flex;
  margin-bottom: 16px;

  @media (min-width: 1128px) {
    margin-bottom: 0px;
  }
`;
