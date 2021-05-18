import styled from 'styled-components';

const CityInfoText = () => {
  return (
    <CityInfoTextSpan>
      <CityNameSpan>city</CityNameSpan>
      <CityDistanceSpan>distance</CityDistanceSpan>
    </CityInfoTextSpan>
  );
};

export default CityInfoText;

const CityInfoTextSpan = styled.span`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
`;

const CityNameSpan = styled.span`
  flex: 0 1 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-bottom: 2px;
  font-weight: 500;
`;

const CityDistanceSpan = styled.span`
  flex: 0 1 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-bottom: 2px;

  :last-child {
    padding-bottom: 0px;
  }
`;
