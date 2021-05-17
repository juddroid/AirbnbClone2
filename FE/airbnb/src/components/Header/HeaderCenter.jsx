import styled from 'styled-components';
import Fieldset from './HeaderCenter/Fieldset';
import FieldPanel from './HeaderCenter/FieldPanel';

const HeaderCenterActive = () => {
  return <div>active</div>;
};
const HeaderCenterDeactive = () => {
  return (
    <HeaderCenterDeactiveStyle>
      <Fieldset />
      <FieldPanel />
    </HeaderCenterDeactiveStyle>
  );
};

const HeaderCenter = () => {
  return (
    <HeaderCenterStyle>
      {/* <HeaderCenterActive /> */}
      <HeaderCenterDeactive />
    </HeaderCenterStyle>
  );
};

export default HeaderCenter;

const HeaderCenterStyle = styled.div`
  padding-bottom: 16px;
  position: relative;
  z-index: 1;
  width: 100%;
`;

const HeaderCenterDeactiveStyle = styled.form`
  margin: 0 auto;
  max-width: 850px;
  position: relative;
  top: 40px;
`;
