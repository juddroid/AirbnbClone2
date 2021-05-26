import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  headerScrollState,
  panelState,
} from '../../../Recoil/HeaderFieldsetState';
import FieldPanelMenu from './FieldPanelMenu';

const FieldPanel = () => {
  const headerState = useRecoilValue(headerScrollState);
  const panelBackgroundState = useRecoilValue(panelState);

  return (
    <FieldPanelStyle {...{ headerState, panelBackgroundState }}>
      <FieldPanelMenu />
    </FieldPanelStyle>
  );
};

export default FieldPanel;

const FieldPanelStyle = styled.div`
  border: 1px solid #ddd;
  border-radius: 32px;
  color: #222;
  display: flex;
  height: 66px;
  position: relative;
  width: 100%;
  background-color: #fff;

  ${({ headerState }) =>
    headerState
      ? `
    visibility: hidden;
    opacity: 0;`
      : `
    visibility: visible;
    opacity: 1;`}

  ${({ panelBackgroundState }) =>
    panelBackgroundState &&
    `
    border: 1px solid rgb(221, 221, 221);
    background-color: rgb(247, 247, 247);
    `}
`;
