import styled from 'styled-components';
import NavUser from './HeaderRight/NavUser';
import NavHostGlobe from './HeaderRight/NavHostGlobe';

const HeaderRight = () => {
  return (
    <HeaderRightStyle>
      <HeaderRightNav>
        <NavHostGlobe />
        <NavUser />
      </HeaderRightNav>
    </HeaderRightStyle>
  );
};

export default HeaderRight;

const HeaderRightStyle = styled.div`
  flex: 1 0 auto;

  @media (min-width: 950px) {
    flex: 1 0 140px;
  }
`;

const HeaderRightNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 80px;
`;
