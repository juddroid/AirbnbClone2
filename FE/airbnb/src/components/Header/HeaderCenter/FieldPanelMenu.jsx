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
import CalendarPopup from './HeaderPanel/CalendarPopup';
import NearbyPopup from './HeaderPanel/NearbyPopup';
import PanelMenu from './HeaderPanel/PanelMenu';
import Search from './Search';

const FieldPanelMenu = () => {
  console.log('panel');
  return (
    <FieldPanelMenuStyle>
      <FieldPanelMenuLeft>
        <PanelMenu name={LOCATION} placeholder={LOCATION_PLACEHOLDER} />
        <NearbyPopup />
      </FieldPanelMenuLeft>
      <FieldPanelMenuSeparator />
      <FieldPanelMenuCenter>
        <PanelMenu name={CHECK_IN} placeholder={INPUT_DATE_PLACEHOLDER} />
        <CalendarPopup />
        <FieldPanelMenuSeparator />
        <PanelMenu name={CHECK_OUT} placeholder={INPUT_DATE_PLACEHOLDER} />
      </FieldPanelMenuCenter>
      <FieldPanelMenuSeparator />
      <FieldPanelMenuRight>
        <PanelMenu name={GUEST} placeholder={GUEST_PLACEHOLDER} />
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
  flex: 0.95 0 10%;
`;

const FieldPanelMenuSeparator = styled.div`
  align-self: center;
  border-right: 1px solid #ddd;
  flex: 0 0 0px;
  height: 32px;
`;
