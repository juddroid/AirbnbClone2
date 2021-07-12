import styled from 'styled-components';
import MainHostImg from './MainHostImg';
import MainHostMsg from './MainHostMsg';

const MainHostContent = () => {
  return (
    <MainHostContentStyle>
      <MainHostContentWrapper
        href="https://www.airbnb.co.kr/host/homes?_set_bev_on_new_domain=1621325699_N2JlOTY2NmJkODEx"
        target="blank"
      >
        <MainHostImg />
        <MainHostMsg />
      </MainHostContentWrapper>
    </MainHostContentStyle>
  );
};

export default MainHostContent;

const MainHostContentStyle = styled.div`
  z-index: 0;
  background: rgb(72, 72, 72);
  border: 0px none;
  display: block;
  height: auto;
  overflow: hidden;
  position: relative;
  text-align: left;
  text-decoration: none;
  width: 100%;
  border-radius: 16px;

  @media ${({ theme }) => theme.M} {
    height: 360px;
  }
  @media ${({ theme }) => theme.XL} {
    height: 400px;
  }
  @media ${({ theme }) => theme.XXL} {
    height: 480px;
  }
`;

const MainHostContentWrapper = styled.a`
  cursor: pointer;
  position: relative;
  touch-action: manipulation;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  border-radius: 0px;
  outline: none;
  transition: box-shadow 0.2s ease 0s, transform 0.1s ease 0s;
  background: transparent;
  border: none;
  color: inherit;
  display: block;
  margin: 0px;
  padding: 0px;
  text-align: inherit;
  text-decoration: none;
  height: 100%;
  width: 100%;
`;
