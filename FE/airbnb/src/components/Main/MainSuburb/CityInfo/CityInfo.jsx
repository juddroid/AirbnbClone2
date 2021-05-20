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
`;
