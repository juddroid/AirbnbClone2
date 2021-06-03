import { useEffect, useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  citySectionState,
  modalState,
} from '../../../../../Recoil/ReservationState';
import CityCardImage from './CityCardImage';
import CityCardPrice from './CityCardPrice';
import CityCardStar from './CityCardStar';
import CityCardTitle from './CityCardTitle';
import CityCardType from './CityCardType';
import RaccoonSlider from '@juddroid_raccoon/react-slider/dist/raccoonSlider/RaccoonSlider';

const CityCardLong = ({ city }) => {
  const cityCard = useRef();
  const citySection = useRecoilValue(citySectionState);
  const setModal = useSetRecoilState(modalState);
  const handleClickCityCard = (e) => {
    e.stopPropagation();

    // if (cityCard?.current?.contains(e.target)) return setModal(true);
    // setModal(false);
  };
  const type = citySection ? 'big' : 'small';
  const amenities = city && city.amenities.join(' · ');

  const option = {
    cardWidth: 300,
    cardHeight: 200,
    cardMargin: 0,
    dataType: 'img',
    displayCardCount: 1,
    buttonType: 'default',
    buttonSize: 24,
  };

  useEffect(() => {
    window.addEventListener('click', handleClickCityCard);

    return () => window.removeEventListener('click', handleClickCityCard);
  }, []);
  console.log(city);

  return (
    <CityCardLongStyle ref={cityCard} onClick={handleClickCityCard}>
      {city && (
        <>
          {/* <CityCardImage roomImages={city.roomImages} {...{ type }} /> */}
          <RaccoonSlider data={city.roomImages} option={option} />
          <CityCardRightBox>
            <CityTitleBox>
              <CityTitleDiv>
                <CityCardType
                  location={city.location}
                  propertyType={city.propertyType}
                  {...{ type }}
                />
                <CityCardTitle title={city.title} {...{ type }} />
                <ShortLine />
                <OptionUpperStyle>
                  <span>
                    최대 인원 {city.maximumNumberOfGuests}명 · 침실{' '}
                    {city.roomAndBedOption.beds}개 · 침대{' '}
                    {city.roomAndBedOption.bedRooms}개 · 욕실{' '}
                    {city.roomAndBedOption.bathRooms}개
                  </span>
                </OptionUpperStyle>
                <OptionBottomStyle>
                  <span>{amenities}</span>
                </OptionBottomStyle>
                <PriceBox>
                  <CityCardStar star={city.averageRating} {...{ type }} />
                  <CityCardPrice price={city.pricePerNight} {...{ type }} />
                </PriceBox>
              </CityTitleDiv>
            </CityTitleBox>
          </CityCardRightBox>
        </>
      )}
    </CityCardLongStyle>
  );
};

export default CityCardLong;

const CityCardLongStyle = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const CityCardRightBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 200px;
  margin-left: 16px;
`;

const CityTitleBox = styled.div`
  display: flex;
  align-items: flex-start;
`;

const CityTitleDiv = styled.div`
  flex: 1 1 0%;
  margin-right: 16px;
`;

const ShortLine = styled.div`
  margin-top: 11px;
  width: 32px;
  border-top: 1px solid rgb(221, 221, 221);
`;

const OptionUpperStyle = styled.div`
  margin-top: 9px;
  color: rgb(113, 113, 113);
  font-weight: 400;
  min-height: 18px;
  font-size: 14px;
  line-height: 18px;
  max-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const OptionBottomStyle = styled.div`
  margin-top: 4px;
  color: rgb(113, 113, 113);
  font-weight: 400;
  min-height: 18px;
  font-size: 14px;
  line-height: 18px;
  max-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PriceBox = styled.div`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  margin-top: 40px;
`;
