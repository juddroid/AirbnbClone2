import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/style/GlobalStyles';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import theme from './components/style/theme';
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider {...{ theme }}>
        <GlobalStyles />
        <AppStyle className="App">
          <Aside />
          <Header />
          <Main />
          <Footer />
        </AppStyle>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;

const AppStyle = styled.div``;
