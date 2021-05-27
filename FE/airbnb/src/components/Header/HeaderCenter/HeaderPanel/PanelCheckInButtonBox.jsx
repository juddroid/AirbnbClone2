import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { CHECK_IN } from '../../../../const';
import {
  checkInButtonState,
  checkInField,
  checkInFieldStyle,
  guestPopupState,
  nearbyPopupState,
  panelState,
} from '../../../../Recoil/HeaderFieldsetState';

const PanelCheckInButtonBox = () => {
  const panelBackgroundState = useRecoilValue(panelState);
  const checkInButton = useRecoilValue(checkInButtonState);
  const guestPopup = useRecoilValue(guestPopupState);
  const nearbyPopup = useRecoilValue(nearbyPopupState);
  const checkInDate = useRecoilValue(checkInField);
  const [fieldStyle, setFieldStyle] = useRecoilState(checkInFieldStyle);

  const checkInFieldValue = `${checkInDate.value.month + 1}월 ${
    checkInDate.value.date
  }일`;

  useEffect(() => {
    checkInDate.state && setFieldStyle(true);
  }, [checkInDate]);

  return (
    <PanelCheckInButtonBoxStyle
      {...{ panelBackgroundState, checkInButton, guestPopup, nearbyPopup }}
    >
      <PanelMenuLabelWrapper>
        <PanelMenuDiv>{CHECK_IN}</PanelMenuDiv>
        <PanelMenuInput {...{ fieldStyle }}>
          {checkInDate.state ? checkInFieldValue : checkInDate.value}
        </PanelMenuInput>
      </PanelMenuLabelWrapper>
    </PanelCheckInButtonBoxStyle>
  );
};
export default PanelCheckInButtonBox;

const PanelCheckInButtonBoxStyle = styled.div`
  appearance: none;
  background: transparent;
  border: 0px;
  color: inherit;
  cursor: pointer;
  display: block;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  margin: 0px;
  outline: none;
  overflow: visible;
  padding: 1px;
  text-align: left;
  text-decoration: none;
  user-select: auto;
  flex: 1 0 0%;
  width: 0px;
  z-index: 3;

  ${({ checkInButton, panelBackgroundState, guestPopup }) =>
    checkInButton
      ? `z-index: 3;
      ::before {

    ${panelBackgroundState && `border-width: 0px 1px;`};
    border-style: solid;
    border-color: ${panelBackgroundState ? `#f7f7f7` : `#fff`};
    content: "";
    height: 32px;
    left: 0px;
    margin-top: -16px;
    position: absolute;
    right: 0px;
    top: 50%;
    z-index: 0;
    display: block;
    }

    ::after {
    background-clip: padding-box;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 32px;
    inset: 0px;
    content: "";
    position: absolute;
    z-index: 0;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 20%) 0px 6px 20px;
    }
      `
      : `
  z-index: 1;

  ::before {
    /* border-width: 0 1px; */
    border-style: solid;
    border-color: ${panelBackgroundState ? `#f7f7f7;` : `#fff;`};
    content: '';
    display: none;
    height: 32px;
    ${!panelBackgroundState && `left: 0;`};
    ${panelBackgroundState && guestPopup && `left: 0`};
    margin-top: -16px;
    position: absolute;
    right: 0px;
    top: 50%;
    z-index: 0;
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
    left: -4px;
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 0;
  }

  :hover::after {
    background-color: #ebebeb;
  }`};
`;

const PanelMenuLabelWrapper = styled.div`
  padding: 14px 24px;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  width: 100%;
  z-index: 1;
`;

const PanelMenuDiv = styled.div`
  font-weight: 800;
  letter-spacing: 0.04em;
  font-size: 12px;
  line-height: 16px;
  padding-bottom: 2px;
`;

const PanelMenuInput = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: ${({ fieldStyle }) => (fieldStyle ? `#222` : ` #717171`)};
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;
