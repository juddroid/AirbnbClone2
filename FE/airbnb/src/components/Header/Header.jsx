import styled from 'styled-components';
import HeaderCenter from './HeaderCenter';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header = ({ theme }) => {
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
  justify-content: space-between;
  align-items: center;
  height: 80px;
  outline: 1px solid red;

  @media ${({ theme }) => theme.S} {
    padding: 0px 24px;
  }
  @media ${({ theme }) => theme.M} {
    padding: 0px 40px;
  }
  @media ${({ theme }) => theme.L} {
    padding: 0px 40px;
  }
  @media ${({ theme }) => theme.XL} {
    padding: 0px 80px;
  }
  @media ${({ theme }) => theme.XXL} {
    padding: 0px 80px;
  }
`;
