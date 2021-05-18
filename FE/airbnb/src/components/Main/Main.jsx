import styled from 'styled-components';
import MainExperience from './MainExperience';
import MainHost from './MainHost';
import MainSlogan from './MainSlogan/MainSlogan';
import MainStay from './MainStay';
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
`;
