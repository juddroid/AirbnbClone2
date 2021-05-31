import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  panelState,
  searchButtonState,
} from '../../../../Recoil/HeaderFieldsetState';
import PanelLastLabel from './PanelLastLabel';

const PanelLast = ({ name }) => {
  const searchState = useRecoilValue(searchButtonState);
  const panelBackgroundState = useRecoilValue(panelState);

  return (
    <PanelLastStyle {...{ searchState, panelBackgroundState }}>
      <PanelLastLabel {...{ name }} />
    </PanelLastStyle>
  );
};

export default PanelLast;

const PanelLastStyle = styled.div`
  ${({ searchState, panelBackgroundState }) =>
    searchState
      ? `
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
  
  ::before {
    content: "";
    height: 32px;
    left: 0px;
    margin-top: -16px;
    position: absolute;
    right: 0px;
    top: 50%;
    z-index: 0;
    display: block;
    border-width: 0px 0px 0px 1px;
    border-style: solid solid solid;
    border-right: 0px;
  }

  ::after {
    background-clip: padding-box;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 32px;
    inset: 0px;
    content: "";
    position: absolute;
    left: -4px;
    z-index: 0;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 20%) 0px 6px 20px;
  }
  `
      : `
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
  z-index: 1;

  ::before {
    border-width: 0 1px;
    border-style: solid;
    border-color: ${panelBackgroundState ? `#f7f7f7` : `#fff`};
    content: '';
    display: none;
    height: 32px;
    margin-top: -16px;
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 0;
    border-left: 0px;
    
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
