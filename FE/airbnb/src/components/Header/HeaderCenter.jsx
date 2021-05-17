import Fieldset from './HeaderCenter/Fieldset';
import Nav from './HeaderCenter/Nav';

const HeaderCenterActive = () => {
  return <div>active</div>;
};
const HeaderCenterDeactive = () => {
  return (
    <div>
      <Fieldset />
      <Nav />
    </div>
  );
};

const HeaderCenter = () => {
  return (
    <div>
      <HeaderCenterActive />
      <HeaderCenterDeactive />
    </div>
  );
};

export default HeaderCenter;
