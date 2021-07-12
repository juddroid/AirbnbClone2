import styled from 'styled-components';
import User from './User';

const NavUser = () => {
  return (
    <NavUserStyle>
      <User />
    </NavUserStyle>
  );
};

export default NavUser;

const NavUserStyle = styled.div``;
