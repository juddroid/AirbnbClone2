import styled from 'styled-components';
import MainExperience from './MainExpereince/MainExperience';
import MainHost from './MainHost/MainHost';
import MainSlogan from './MainSlogan/MainSlogan';
import MainStay from './MainStay/MainStay';
import MainSuburb from './MainSuburb/MainSuburb';

const Main = () => {
  return (
    <MainStyle>
      <MainSlogan />
      <MainSuburb />
      <MainStay />
      <MainHost />
      <MainExperience />
    </MainStyle>
  );
};

export default Main;

const MainStyle = styled.main`
  min-height: 400px;
  position: relative;
  top: -80px;
`;
