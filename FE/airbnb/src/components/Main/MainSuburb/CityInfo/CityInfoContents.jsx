import styled from 'styled-components';
import CityInfoImg from './CityInfoImg';
import CityInfoText from './CityInfoText';

const CityInfoContents = () => {
  return (
    <CityInfoContentsAnchor>
      <CityInfoImg />
      <CityInfoText />
    </CityInfoContentsAnchor>
  );
};

export default CityInfoContents;

const CityInfoContentsAnchor = styled.a`
  font-size: 16px;
  line-height: 20px;
  color: rgb(34, 34, 34);
  display: flex;
  align-items: center;
`;
