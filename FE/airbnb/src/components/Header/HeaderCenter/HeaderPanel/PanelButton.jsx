import styled from 'styled-components';
import PanelButtonLabel from './PanelButtonLabel';

const PanelButton = ({ name, placeholder }) => {
  return (
    <PanelButtonStyle>
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

  ::before {
    border-width: 0 1px;
    border-style: solid;
    border-color: #fff;
    content: '';
    display: none;
    height: 32px;
    left: 0;
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
  }
`;
