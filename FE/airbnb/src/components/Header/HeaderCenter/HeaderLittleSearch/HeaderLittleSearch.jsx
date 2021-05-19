import styled from 'styled-components';
import LittleSearchBox from './LittleSearchBox';

const HeaderLittleSearch = () => {
  return (
    <HeaderLittleSearchStyle>
      <LittleSearchBox />
    </HeaderLittleSearchStyle>
  );
};

export default HeaderLittleSearch;

const HeaderLittleSearchStyle = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  transform-origin: 0% 0%;
  transform: scale(2.5, 1.375) translate(-60px, 122px);
  opacity: 0;
  transition: transform 150ms ease, opacity 50ms ease 20ms, visibility 0ms 150ms;
  pointer-events: none;
  visibility: hidden;
  will-change: transform, opacity;

  @media (min-width: 950px) {
    transform-origin: 50% 0%;
    margin: 0 auto;
    transform: scale(2.857142857142857, 1.375) translateY(58px);
  }
`;
