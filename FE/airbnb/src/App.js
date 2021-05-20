import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/style/GlobalStyles';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import theme from './components/style/theme';
import React from 'react';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider {...{ theme }}>
        <GlobalStyles />
        <AppStyle className="App">
          <UpperDiv>
            <Wrapper>
              <BeforeAfterDiv>
                <AsideWrapper>
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
    </RecoilRoot>
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
