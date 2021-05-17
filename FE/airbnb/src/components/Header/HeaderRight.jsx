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

const HeaderRightStyle = styled.div``;

const HeaderRightNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 80px;
`;
