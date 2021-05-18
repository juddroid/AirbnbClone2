import styled from 'styled-components';
import MainSuburbSection from './MainSuburbSection';

const MainSuburbContent = () => {
  return (
    <MainSuburbContentStyle>
      <MainSuburbContentWrapper>
        <MainSuburbSection />
      </MainSuburbContentWrapper>
    </MainSuburbContentStyle>
  );
};

export default MainSuburbContent;

const MainSuburbContentStyle = styled.div`
  width: 100%;
`;

const MainSuburbContentWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  max-width: 1600px;

  @media ${({ theme }) => theme.M} {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media ${({ theme }) => theme.L} {
    margin: 0px auto;
    position: relative;
    max-width: 1760px;
    padding-right: 80px;
    padding-left: 80px;
  }
`;
