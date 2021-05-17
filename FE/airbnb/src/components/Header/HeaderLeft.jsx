import styled from 'styled-components';
import AirbnbLogo from '../../svg/AirbnbLogo';

const HeaderLeft = () => {
  return (
    <HeaderLeftStyle>
      <a href="/">
        <AirbnbLogo />
      </a>
    </HeaderLeftStyle>
  );
};

export default HeaderLeft;

const HeaderLeftStyle = styled.div``;
