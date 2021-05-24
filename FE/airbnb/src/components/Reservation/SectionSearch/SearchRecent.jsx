import styled from 'styled-components';
import RecentContent from './Recent/RecentContent';
import RecentTitle from './Recent/RecentTitle';

const SearchRecent = () => {
  return (
    <SearchRecentStyle>
      <SearchRecentWrapper>
        <SearchRecentFlex>
          <SearchRecentBox>
            <Wrapper>
              <Container>
                <RecentTitle />
                <RecentContent />
              </Container>
            </Wrapper>
          </SearchRecentBox>
        </SearchRecentFlex>
      </SearchRecentWrapper>
    </SearchRecentStyle>
  );
};

export default SearchRecent;

const SearchRecentStyle = styled.div`
  background-color: rgb(247, 247, 247);
  margin-top: 24px;
  padding-bottom: 16px;
  padding-top: 16px;
`;

const SearchRecentWrapper = styled.div`
  overflow-anchor: none;
`;

const SearchRecentFlex = styled.div`
  ::before {
    display: flex;
    content: '';
  }
  ::after {
    display: flex;
    content: '';
  }
`;

const SearchRecentBox = styled.div`
  background-color: transparent;
  padding-left: 24px;
  padding-right: 24px;
  max-width: none;

  @media (min-width: 1128px) {
    margin: 0px auto;
    position: relative;
  }
`;

const Wrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;

  @media (min-width: 744px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 0;
`;
