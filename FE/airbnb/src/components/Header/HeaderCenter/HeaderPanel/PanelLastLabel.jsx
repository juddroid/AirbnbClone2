import styled from 'styled-components';

const PanelLastLabel = ({ name, placeholder }) => {
  return (
    <PanelMenuLabelStyle>
      <PanelMenuDiv>{name}</PanelMenuDiv>
      <PanelMenuInput>{placeholder}</PanelMenuInput>
    </PanelMenuLabelStyle>
  );
};

export default PanelLastLabel;

const PanelMenuLabelStyle = styled.div`
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
