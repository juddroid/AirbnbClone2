import styled from 'styled-components';

const PanelLastLabel = ({ name, placeholder }) => {
  return (
    <PanelMenuLabelStyle>
      <PanelMenuLabelWrapper>
        <PanelMenuDiv>{name}</PanelMenuDiv>
        <PanelMenuInput placeholder={placeholder} />
      </PanelMenuLabelWrapper>
    </PanelMenuLabelStyle>
  );
};

export default PanelLastLabel;

const PanelMenuLabelStyle = styled.label`
  cursor: pointer;
  display: block;
  background-clip: padding-box;
  border: 1px solid transparent;
  border-radius: 32px;
  flex: 1 0 0%;
  min-width: 0px;
  padding: 14px 24px;
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
