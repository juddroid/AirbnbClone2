import styled from 'styled-components';
import BaseImage from './BaseImage';
import ExtraAttach from './ExtraAttach';

const BigCardImage = ({ roomImages }) => {
  return (
    <BigCityCardImageStyle>
      <CityCardImageWrapper>
        <BaseImage {...{ roomImages }} />
        <ExtraAttach />
      </CityCardImageWrapper>
    </BigCityCardImageStyle>
  );
};

const SmallCardImage = ({ roomImages }) => {
  return (
    <CityCardImageStyle>
      <CityCardImageWrapper>
        <BaseImage {...{ roomImages }} />
        <ExtraAttach />
      </CityCardImageWrapper>
    </CityCardImageStyle>
  );
};

const CityCardImage = ({ roomImages, type }) => {
  return {
    big: <BigCardImage {...{ roomImages }} />,
    small: <SmallCardImage {...{ roomImages }} />,
  }[type];
};

export default CityCardImage;

const CityCardImageStyle = styled.div`
  margin-bottom: 10px;
`;

const BigCityCardImageStyle = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  width: 300px;
  height: 200px;
`;

const CityCardImageWrapper = styled.div`
  position: relative;
  contain: none;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  overflow: hidden;

  ::after {
    content: '';
    position: absolute;
    inset: 0px;
    border-radius: inherit;
    border: 1px solid rgba(0, 0, 0, 0.1);
    pointer-events: none;
  }
`;
