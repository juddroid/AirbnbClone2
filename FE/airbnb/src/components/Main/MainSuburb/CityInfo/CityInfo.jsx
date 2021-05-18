import styled from 'styled-components';
import CityInfoContents from './CityInfoContents';

const CityInfo = () => {
  return (
    <CityInfoStyle>
      <CityInfoContents />
    </CityInfoStyle>
  );
};

export default CityInfo;

const CityInfoStyle = styled.div`
  scroll-snap-align: start;
  overflow: hidden;
  height: 100%;
`;
