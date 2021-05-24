import styled from 'styled-components';
import Header from '../components/Header/Header';

function Home() {
  return (
    <Wrapper>
      <BeforeAfterDiv>
        <Header />
      </BeforeAfterDiv>
    </Wrapper>
  );
}

export default Home;

const HomeStyle = styled.div``;

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

const Wrapper = styled.div`
  display: none;

  @media (min-width: 744px) {
    display: block;
  }
`;
