import styled from 'styled-components';
import PanelLastLabel from './PanelLastLabel';

const PanelLast = ({ name, placeholder }) => {
  return (
    <PanelMenuStyle>
      <PanelLastLabel {...{ name, placeholder }} />
    </PanelMenuStyle>
  );
};

export default PanelLast;

const PanelMenuStyle = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  flex: 1 0 0%;
  margin: -1px;
  min-width: 0px;

  appearance: none;
  background: transparent;
  border: 0px;
  color: inherit;
  cursor: pointer;
  display: block;
  outline: none;
  overflow: visible;
  padding: 1px;
  text-align: left;
  text-decoration: none;
  user-select: auto;
  width: 0px;
  z-index: 1;
`;
