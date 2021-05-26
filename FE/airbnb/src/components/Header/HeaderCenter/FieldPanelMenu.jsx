import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  CHECK_IN,
  CHECK_OUT,
  GUEST,
  GUEST_PLACEHOLDER,
  INPUT_DATE_PLACEHOLDER,
  LOCATION,
  LOCATION_PLACEHOLDER,
} from '../../../const';
import {
  calendarPopupState,
  checkButtonState,
  guestPopupState,
  nearbyPopupState,
  panelState,
  searchButtonState,
  searchTextState,
} from '../../../Recoil/HeaderFieldsetState';
import CalendarPopup from './HeaderPanel/CalendarPopup';
import GuestPopup from './HeaderPanel/Guest/GuestPopup';
import NearbyPopup from './HeaderPanel/NearbyPopup';
import PanelButton from './HeaderPanel/PanelButton';
import PanelLast from './HeaderPanel/PanelLast';
import PanelMenu from './HeaderPanel/PanelMenu';
import Search from './Search';

const FieldPanelMenu = () => {
  const nearby = useRef();
  const calendar = useRef();
  const guest = useRef();
  const setNearbyPopup = useSetRecoilState(nearbyPopupState);
  const setCalendarPopup = useSetRecoilState(calendarPopupState);
  const setGuestPopup = useSetRecoilState(guestPopupState);
  const setSearchState = useSetRecoilState(searchButtonState);
  const setSearchTextState = useSetRecoilState(searchTextState);
  const setPanelState = useSetRecoilState(panelState);
  const setCheckButton = useSetRecoilState(checkButtonState);

  const handleClickNearbyPopup = () => {
    setNearbyPopup(true);
    setSearchTextState(true);
    setPanelState(true);
    setCalendarPopup(false);
    setGuestPopup(false);
    setCheckButton(false);
    setSearchState(false);
  };

  const handleClickCalendarPopup = () => {
    setCalendarPopup(true);
    setSearchTextState(true);
    setCheckButton(true);
    setNearbyPopup(false);
    setGuestPopup(false);
    setSearchState(false);
  };

  const handleClickGuestPopup = () => {
    setGuestPopup(true);
    setSearchState(true);
    setSearchTextState(true);
    setPanelState(true);
    setNearbyPopup(false);
    setCalendarPopup(false);
    setCheckButton(false);
  };

  const handleClickPopup = (e) => {
    if (nearby?.current?.contains(e.target)) handleClickNearbyPopup();
    else if (calendar?.current?.contains(e.target)) handleClickCalendarPopup();
    else if (guest?.current?.contains(e.target)) handleClickGuestPopup();
    else {
      setNearbyPopup(false);
      setCalendarPopup(false);
      setGuestPopup(false);
      setSearchState(false);
      setSearchTextState(false);
      setPanelState(false);
      setCheckButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickPopup, true);
    return () => {
      window.removeEventListener('click', handleClickPopup, true);
    };
  }, []);

  return (
    <FieldPanelMenuStyle>
      <FieldPanelMenuLeft ref={nearby}>
        <PanelMenu name={LOCATION} placeholder={LOCATION_PLACEHOLDER} />
        <NearbyPopup />
      </FieldPanelMenuLeft>
      <FieldPanelMenuSeparator />
      <FieldPanelMenuCenter ref={calendar}>
        <PanelButton name={CHECK_IN} placeholder={INPUT_DATE_PLACEHOLDER} />
        <CalendarPopup />
        <FieldPanelMenuSeparator />
        <PanelButton name={CHECK_OUT} placeholder={INPUT_DATE_PLACEHOLDER} />
      </FieldPanelMenuCenter>
      <FieldPanelMenuSeparator />
      <FieldPanelMenuRight ref={guest}>
        <PanelLast name={GUEST} placeholder={GUEST_PLACEHOLDER} />
        <GuestPopup />
        <Search />
      </FieldPanelMenuRight>
    </FieldPanelMenuStyle>
  );
};

export default FieldPanelMenu;

const FieldPanelMenuStyle = styled.div`
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  min-width: 0px;
  pointer-events: auto;
`;

const FieldPanelMenuLeft = styled.div`
  display: flex;
  flex: 1 0 0%;
  min-width: 0px;

  @media ${({ theme }) => theme.L} {
    flex: 1.5 0 0%;
  }
`;
const FieldPanelMenuCenter = styled.div`
  display: flex;
  flex: 2 0 0%;
  min-width: 0px;
`;

const FieldPanelMenuRight = styled.div`
  align-items: center;
  display: flex;
  margin: -1px;
  min-width: 0px;
  position: relative;
  flex: 0.95 0 auto;
`;

const FieldPanelMenuSeparator = styled.div`
  align-self: center;
  border-right: 1px solid #ddd;
  flex: 0 0 0px;
  height: 32px;
`;
