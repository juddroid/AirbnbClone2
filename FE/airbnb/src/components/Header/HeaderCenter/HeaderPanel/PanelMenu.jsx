import styled from 'styled-components';
import PanelMenuLabel from './PanelMenuLabel';

const PanelMenu = ({ name, placeholder }) => {
  return (
    <PanelMenuStyle>
      <PanelMenuLabel {...{ name, placeholder }} />
    </PanelMenuStyle>
  );
};

export default PanelMenu;

const PanelMenuStyle = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  flex: 1 0 0%;
  margin: -1px;
  min-width: 0px;
`;
