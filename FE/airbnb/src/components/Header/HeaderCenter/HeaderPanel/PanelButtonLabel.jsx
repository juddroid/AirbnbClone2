import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  checkButtonState,
  panelState,
} from '../../../../Recoil/HeaderFieldsetState';

const PanelButtonLabel = ({ name, placeholder }) => {
  const panelBackgroundState = useRecoilValue(panelState);
  const checkButton = useRecoilValue(checkButtonState);

  return (
    <PanelMenuLabelStyle {...{ panelBackgroundState, checkButton }}>
      <PanelMenuLabelWrapper>
        <PanelMenuDiv>{name}</PanelMenuDiv>
        <PanelMenuInput>{placeholder}</PanelMenuInput>
      </PanelMenuLabelWrapper>
    </PanelMenuLabelStyle>
  );
};

export default PanelButtonLabel;

const PanelMenuLabelStyle = styled.div`
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

  ${({ checkButton, panelBackgroundState }) =>
    checkButton
      ? `z-index: 3;
      ::before {
    border-width: 0px 1px;
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
    left: 0px;
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
  color: #717171;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;
