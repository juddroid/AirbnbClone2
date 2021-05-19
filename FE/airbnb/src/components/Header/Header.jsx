import styled from 'styled-components';
import HeaderCenter from './HeaderCenter';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderWrapper>
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </HeaderWrapper>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  height: 80px;
  left: 0px;
  width: 100%;
  z-index: 100;
  --header-brand-color: #ff385c;
  position: absolute;
  color: #fff;

  ::before {
    /* background-image: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0)); */
    content: '';
    height: 140%;
    left: 0px;
    pointer-events: none;
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: 0;
    transition: 150ms opacity ease;
    opacity: 0.4;
  }

  ::after {
    box-shadow: rgb(0 0 0 / 8%) 0px 1px 12px;
    transform-origin: 50% 0%;
    transition-duration: 150ms;
    transition-timing-function: ease;
    background: #fff;
    content: '';
    height: 100%;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: 0;
    opacity: 0;

    @media (min-width: 950px) {
      transform: scaleY(2.25) !important;
    }
  }
`;

const HeaderWrapper = styled.div`
  --page-shell-max-content-width: 1760px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;
  width: 100%;
  z-index: 1;
  max-width: 1440px;
  padding-left: 24px;
  padding-right: 24px;
  margin: 0 auto;
  max-width: var(--page-shell-max-content-width, 1440px);

  @media (min-width: 375px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (min-width: 744px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 950px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 1128px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media (min-width: 1440px) {
    padding-left: 80px;
    padding-right: 80px;
  }
`;
