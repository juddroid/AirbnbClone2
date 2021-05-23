import { useEffect, useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
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
import { nearbyPopupState } from '../../../Recoil/HeaderFieldsetState';
import CalendarPopup from './HeaderPanel/CalendarPopup';
import NearbyPopup from './HeaderPanel/NearbyPopup';
import PanelButton from './HeaderPanel/PanelButton';
import PanelLast from './HeaderPanel/PanelLast';
import PanelMenu from './HeaderPanel/PanelMenu';
import Search from './Search';

const FieldPanelMenu = () => {
  const nearby = useRef();
  const setNearbyPopup = useSetRecoilState(nearbyPopupState);
  const handleClickNearbyPopup = (e) => {
    nearby.current.contains(e.target)
      ? setNearbyPopup(true)
      : setNearbyPopup(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleClickNearbyPopup);

    return () => {
      window.removeEventListener('click', handleClickNearbyPopup);
    };
  }, []);

  return (
    <FieldPanelMenuStyle>
      <FieldPanelMenuLeft ref={nearby}>
        <PanelMenu name={LOCATION} placeholder={LOCATION_PLACEHOLDER} />
        <NearbyPopup />
      </FieldPanelMenuLeft>
      <FieldPanelMenuSeparator />
      <FieldPanelMenuCenter>
        <PanelButton name={CHECK_IN} placeholder={INPUT_DATE_PLACEHOLDER} />
        <CalendarPopup />
        <FieldPanelMenuSeparator />
        <PanelButton name={CHECK_OUT} placeholder={INPUT_DATE_PLACEHOLDER} />
      </FieldPanelMenuCenter>
      <FieldPanelMenuSeparator />
      <FieldPanelMenuRight>
        <PanelLast name={GUEST} placeholder={GUEST_PLACEHOLDER} />
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

  ::before {
    border-width: 0 1px;
    border-style: solid;
    border-color: #fff;
    content: '';
    display: none;
    height: 32px;
    margin-top: -16px;
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 0;
    border-left: 0px;
    background: #fff;
  }

  :hover::before {
    display: block;
  }

  ::after {
    background-clip: padding-box;
    border: 1px solid transparent;
    border-radius: 32px;
    bottom: 0px;
    content: '';
    left: 0px;
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 0;
  }

  :hover::after {
    background-color: #ebebeb;
  }
`;

const FieldPanelMenuSeparator = styled.div`
  align-self: center;
  border-right: 1px solid #ddd;
  flex: 0 0 0px;
  height: 32px;
`;
