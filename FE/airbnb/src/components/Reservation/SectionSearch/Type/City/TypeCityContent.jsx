import styled from 'styled-components';
import CityCard from '../CityCard/CityCard';

const TypeCityContent = () => {
  return (
    <TypeCityContentStyle>
      <TypeCityContentWrapper>
        <TypeCityContentContainer>
          <TypeCityContentBox>
            <CityCard />
            <CityCard />
            <CityCard />
            <CityCard />
            <CityCard />
          </TypeCityContentBox>
        </TypeCityContentContainer>
      </TypeCityContentWrapper>
    </TypeCityContentStyle>
  );
};

export default TypeCityContent;

const TypeCityContentStyle = styled.div`
  position: relative;
`;

const TypeCityContentWrapper = styled.div`
  margin-top: 0px;
  margin-left: -24px;
  margin-right: -24px;
  overflow-y: hidden;

  @media (min-width: 744px) {
    margin-left: -8px;
    margin-right: -8px;
    overflow: hidden;
  }
`;

const TypeCityContentContainer = styled.div`
  margin-top: 0px;
  margin-bottom: 0px;
`;

const TypeCityContentBox = styled.div`
  transform: translateX(0%);

  padding: 0px 18px 30px;
  transition: transform 0.5s ease 0s;
  white-space: nowrap;
  overflow-x: auto;
  margin-bottom: -30px;

  @media (min-width: 744px) {
    margin-bottom: 0px;
    padding: 0px;
    overflow: visible;
  }
`;
