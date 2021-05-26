import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { panelState } from '../../../../Recoil/HeaderFieldsetState';

const PanelMenuLabel = ({ name, placeholder }) => {
  const panelBackgroundState = useRecoilValue(panelState);

  return (
    <PanelMenuLabelStyle {...{ panelBackgroundState }}>
      <PanelMenuLabelWrapper>
        <PanelMenuDiv>{name}</PanelMenuDiv>
        <PanelMenuInput placeholder={placeholder} />
      </PanelMenuLabelWrapper>
    </PanelMenuLabelStyle>
  );
};

export default PanelMenuLabel;

const PanelMenuLabelStyle = styled.label`
  cursor: pointer;
  display: block;
  background-clip: padding-box;
  border: 1px solid transparent;
  border-radius: 32px;
  flex: 1 0 0%;
  min-width: 0px;
  padding: 14px 32px;

  :hover::before {
    display: block;
  }

  ::before {
    border-width: 0 1px;
    border-style: solid;
    content: '';
    display: none;
    height: 32px;
    margin-top: -16px;
    position: absolute;
    right: 0px;
    top: 50%;
    z-index: 0;
    border-left: 0px;
    border-color: ${({ panelBackgroundState }) =>
      panelBackgroundState ? `#f7f7f7` : `#fff`};
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

  :focus-within::before {
    display: block;
  }

  :focus-within::after {
    background-color: #fff;
    border-color: #fff;
    box-shadow: 0px 6px 20px rgb(0 0 0 / 20%);
    left: 0px;
    right: 0px;
  }
`;

const PanelMenuLabelWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const PanelMenuDiv = styled.div`
  font-weight: 800;
  letter-spacing: 0.04em;
  font-size: 12px;
  line-height: 16px;
  padding-bottom: 2px;
`;

const PanelMenuInput = styled.input`
  display: block;
  border: 0px;
  margin: 0px;
  padding: 0px;
  width: 100%;
  background: none;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: #222;
  text-overflow: ellipsis;
  outline: none;
  cursor: default;
`;
