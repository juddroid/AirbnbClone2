import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/style/GlobalStyles';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import theme from './components/style/theme';

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <GlobalStyles />
      <AppStyle className="App">
        <Aside />
        <Header {...{ theme }} />
        <Main />
        <Footer />
      </AppStyle>
    </ThemeProvider>
  );
}

export default App;

const AppStyle = styled.div``;
