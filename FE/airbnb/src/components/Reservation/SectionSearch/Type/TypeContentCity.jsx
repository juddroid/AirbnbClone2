import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { nearbyRoomList } from '../../../../Recoil/ReservationState';
import TypeCity from './City/TypeCity';
import { v4 as uuidv4 } from 'uuid';

const TypeContentCity = () => {
  const cityList = useRecoilValue(nearbyRoomList);

  const cityName = ``;

  return (
    <TypeContentStyle>
      <TypeContentWrapper>
        {cityList &&
          cityList.map((city, idx) => (
            <TypeCity key={uuidv4()} id={idx} {...{ city, cityName }} />
          ))}
      </TypeContentWrapper>
    </TypeContentStyle>
  );
};

export default TypeContentCity;

const TypeContentStyle = styled.div`
  min-height: 400px;
  overflow: hidden;
`;

const TypeContentWrapper = styled.div`
  overflow-anchor: none;
`;
