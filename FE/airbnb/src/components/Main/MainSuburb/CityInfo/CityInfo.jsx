import styled from 'styled-components';
import CityInfoContents from './CityInfoContents';

const CityInfo = ({ city }) => {
  return (
    <CityInfoStyle>
      <CityInfoContents {...{ city }} />
    </CityInfoStyle>
  );
};

export default CityInfo;

const CityInfoStyle = styled.div`
  scroll-snap-align: start;
  overflow: hidden;
  height: 100%;

  @media (min-width: 744px) {
    :nth-last-child(-n + 2) {
      display: none;
    }
  }

  @media (min-width: 1128px) {
    :nth-last-child(-n + 2) {
      display: block;
    }
  }
`;
