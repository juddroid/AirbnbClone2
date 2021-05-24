import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/style/GlobalStyles';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import theme from './components/style/theme';
import { useRecoilValue } from 'recoil';
import { headerScrollState } from './Recoil/HeaderFieldsetState';
import { BLOCK, NONE } from './const';

function App() {
  const headerState = useRecoilValue(headerScrollState);

  return (
    <ThemeProvider {...{ theme }}>
      <GlobalStyles />
      <AppStyle className="App">
        <UpperDiv>
          <Wrapper>
            <BeforeAfterDiv>
              <AsideWrapper {...{ headerState }}>
                <Aside />
              </AsideWrapper>
              <Header />
            </BeforeAfterDiv>
          </Wrapper>
          <Main />
        </UpperDiv>
        <BeforeAfterDiv>
          <Footer />
        </BeforeAfterDiv>
      </AppStyle>
    </ThemeProvider>
  );
}

export default App;

const AppStyle = styled.div``;

const BeforeAfterDiv = styled.div`
  ::before {
    display: flex;
    content: '';
  }
  ::after {
    display: flex;
    content: '';
  }
`;

const AsideWrapper = styled.div`
  position: relative;
  z-index: 101;
  display: ${({ headerState }) => (headerState ? NONE : BLOCK)};
`;

const Wrapper = styled.div`
  display: none;

  @media (min-width: 744px) {
    display: block;
  }
`;

const UpperDiv = styled.div`
  position: relative;
  min-height: 100vh;
`;
