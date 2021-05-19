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
  transition: transform 150ms ease 0s, opacity 50ms ease 20ms,
    pointer-events 0ms ease 150ms;
  visibility: hidden;
  opacity: 0;

  @media (min-width: 950px) {
    transform-origin: 50% 0%;
    margin: 0px auto;
  }
`;
