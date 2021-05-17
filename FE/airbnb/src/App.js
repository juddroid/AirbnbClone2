import styled from 'styled-components';
import GlobalStyles from './components/style/GlobalStyles';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <AppStyle className="App">
        <Aside />
        <Header />
        <Main />
        <Footer />
      </AppStyle>
    </>
  );
}

export default App;

const AppStyle = styled.div``;
