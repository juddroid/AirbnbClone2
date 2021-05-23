import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { BLOCK, NONE, GUEST_INFO } from '../../../../../const';
import { guestPopupState } from '../../../../../Recoil/HeaderFieldsetState';
import GuestSection from './GuestSection';
import { v4 as uuidv4 } from 'uuid';
import { guestCount } from '../../../../../Recoil/GuestCountState';

const GuestPopup = () => {
  const guestState = useRecoilValue(guestPopupState);
  const guestCountState = useRecoilValue(guestCount);
  const count = [
    guestCountState.adult,
    guestCountState.child,
    guestCountState.infant,
  ];

  return (
    <GuestPopupStyle {...{ guestState }}>
      <GuestPopupWrapper>
        {GUEST_INFO.map(({ header, info }, idx) => (
          <GuestSection
            {...{ header, info }}
            count={count[idx].count}
            id={count[idx].id}
            key={uuidv4()}
          />
        ))}
      </GuestPopupWrapper>
    </GuestPopupStyle>
  );
};

export default GuestPopup;

const GuestPopupStyle = styled.div`
  left: 0px;
  position: absolute;
  right: 0px;
  top: 100%;
  z-index: 4;

  display: ${({ guestState }) => (guestState ? BLOCK : NONE)};
`;

const GuestPopupWrapper = styled.div`
  margin-left: -140px;

  position: absolute;
  left: 0px;
  top: 100%;
  z-index: 1;
  background: rgb(255, 255, 255);
  border-radius: 32px;
  box-shadow: rgb(0 0 0 / 20%) 0px 6px 20px;
  margin-top: 12px;
  max-height: calc(100vh - 220px);
  overflow: hidden auto;
  padding: 16px 32px;
`;
