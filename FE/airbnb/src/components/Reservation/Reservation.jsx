import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import useFetch from '../../customHooks/useFetch';
import { modalState, nearbyRoomList } from '../../Recoil/ReservationState';
import ModalBox from './DetailModal/ModalBox';
import SectionMap from './SectionMap/SectionMap';
import SectionSearch from './SectionSearch/SectionSearch';

const Reservation = ({ location, match, history }) => {
  const setRoomList = useSetRecoilState(nearbyRoomList);
  const [modal, setModal] = useRecoilState(modalState);

  const locationData = location.state.data.location === '서울' && '1s';

  const rooms = useFetch(
    `http://travel.airbnb.kro.kr/api/ios/rooms?placeId=${locationData}`,
    []
  );

  setRoomList(rooms);

  return (
    <>
      {modal && <ModalBox />}
      <ReservationStyle>
        <SectionSearch />
        <SectionMap />
      </ReservationStyle>
    </>
  );
};

export default Reservation;

const ReservationStyle = styled.div`
  inset: 105px 0px 0px;
  padding-bottom: 56px;
  padding-top: 80px;

  @media (min-width: 1128px) {
    padding-bottom: 0px;
  }
  ::before {
    content: ' ';
    display: table;
  }

  ::after {
    content: ' ';
    display: table;
    clear: both;
  }
`;
