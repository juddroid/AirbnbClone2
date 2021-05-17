import styled from 'styled-components';
import HeaderCenter from './HeaderCenter';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  display: flex;
`;
