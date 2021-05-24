import styled from 'styled-components';
import { NEXT, PREV } from '../../../../../const';
import CityArrowButton from './CityArrowButton';

const CityButton = () => {
  return (
    <CityButtonStyle>
      <CityButtonBox>
        <CityArrowButton type={PREV} />
        <CenterSpan />
        <CityArrowButton type={NEXT} />
      </CityButtonBox>
    </CityButtonStyle>
  );
};

export default CityButton;

const CityButtonStyle = styled.div`
  color: rgb(34, 34, 34);
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const CityButtonBox = styled.div`
  display: flex;
`;

const CenterSpan = styled.span`
  margin: -8px;
`;
