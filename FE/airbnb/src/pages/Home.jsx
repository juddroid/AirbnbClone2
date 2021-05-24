import styled from 'styled-components';
import Header from '../components/Header/Header';

function Home() {
  return (
    <HomeStyle>
      <BeforeAfterDiv>
        <Header />
      </BeforeAfterDiv>
    </HomeStyle>
  );
}

export default Home;

const HomeStyle = styled.div`
  display: none;

  @media (min-width: 744px) {
    display: block;
  }
`;

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
