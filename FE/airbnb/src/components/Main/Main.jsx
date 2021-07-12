import styled from 'styled-components';
import MainExperience from './MainExpereince/MainExperience';
import MainHost from './MainHost/MainHost';
import MainSlogan from './MainSlogan/MainSlogan';
import MainStay from './MainStay/MainStay';
import MainSuburb from './MainSuburb/MainSuburb';

const Main = () => {
  return (
    <MainStyle>
      <MainWrapper>
        <MainSlogan />
        <MainSuburb />
        <MainStay />
        <MainHost />
        <MainExperience />
      </MainWrapper>
    </MainStyle>
  );
};

export default Main;

const MainStyle = styled.main`
  position: relative;
`;

const MainWrapper = styled.div`
  min-height: 400px;
`;
