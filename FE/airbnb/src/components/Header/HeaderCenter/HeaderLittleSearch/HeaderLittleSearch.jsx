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
  ${({ headerState }) =>
    headerState
      ? `
    visibility: visible;
    opacity: 1;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    transform-origin: 0% 0%;
    transition: transform 150ms ease 0s, opacity 50ms ease 20ms,
    pointer-events 0ms ease 150ms;

    @media (min-width: 950px) {
    transform-origin: 50% 0%;
    margin: 0px auto;
    }
    
    `
      : `
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    transform-origin: 0% 0%;
    transform: scale(2.5, 1.375) translate(-60px, 122px);
    transition: transform 150ms ease, opacity 50ms ease 20ms, visibility 0ms 150ms;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    will-change: transform, opacity;

    @media (min-width: 950px) {
    transform-origin: 50% 0%;
    margin: 0px auto;
    transform: scale(2.857142857142857, 1.375) translateY(58px);
  }
      `}
`;
