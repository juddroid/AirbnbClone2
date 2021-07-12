import styled from 'styled-components';
import Register from './Register/Register';
import UserButton from './UserButton';

const User = () => {
  return (
    <UserStyle>
      <UserButton />
      <Register />
    </UserStyle>
  );
};

export default User;

const UserStyle = styled.div`
  display: inline;
  position: relative;
`;
