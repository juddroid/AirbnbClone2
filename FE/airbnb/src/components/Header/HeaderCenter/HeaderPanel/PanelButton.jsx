import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { guestPopupState } from '../../../../Recoil/HeaderFieldsetState';
import PanelButtonLabel from './PanelButtonLabel';

const PanelButton = ({ name, placeholder }) => {
  const guestPopup = useRecoilValue(guestPopupState);

  return (
    <PanelButtonStyle {...{ guestPopup }}>
      <PanelButtonLabel {...{ name, placeholder }} />
    </PanelButtonStyle>
  );
};

export default PanelButton;

const PanelButtonStyle = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  flex: 1 0 0%;
  margin: -1px;
  min-width: 0px;
`;
