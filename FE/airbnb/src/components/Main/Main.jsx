import styled from 'styled-components';
import MainExperience from './MainExperience';
import MainHost from './MainHost';
import MainSlogan from './MainSlogan/MainSlogan';
import MainStay from './MainStay';
import MainSuburb from './MainSuburb';

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

const MainStyle = styled.div`
  min-height: 400px;
`;

const MainWrapper = styled.div`
  overflow-anchor: none;
`;
