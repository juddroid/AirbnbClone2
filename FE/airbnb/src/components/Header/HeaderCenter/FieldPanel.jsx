import styled from 'styled-components';
import FieldPanelMenu from './FieldPanelMenu';

const FieldPanel = () => {
  return (
    <FieldPanelStyle>
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
`;
