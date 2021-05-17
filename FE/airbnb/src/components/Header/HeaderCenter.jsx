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
      {/* <FieldPanel /> */}
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

const HeaderCenterStyle = styled.div``;

const HeaderCenterDeactiveStyle = styled.div``;
