import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { headerScrollState } from '../../../../Recoil/HeaderFieldsetState';
import LittleSearchBox from './LittleSearchBox';

const HeaderLittleSearch = () => {
  const headerState = useRecoilValue(headerScrollState);

  return (
    <HeaderLittleSearchStyle {...{ headerState }}>
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

  ${({ headerState }) =>
    headerState
      ? `
    visibility: visible;
    opacity: 1;`
      : `
    visibility: hidden;
    opacity: 0;`}

  @media (min-width: 950px) {
    transform-origin: 50% 0%;
    margin: 0px auto;
  }
`;
