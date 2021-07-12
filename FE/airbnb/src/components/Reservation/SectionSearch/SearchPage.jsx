import styled from 'styled-components';
import PagingInfo from './Paging/PagingInfo';
import PagingNumber from './Paging/PagingNumber';

const SearchPage = () => {
  return (
    <SearchPageStyle>
      <SearchPageWrapper>
        <PagingNumber />
        <PagingInfo />
      </SearchPageWrapper>
    </SearchPageStyle>
  );
};

export default SearchPage;

const SearchPageStyle = styled.div`
  ::before {
    display: flex;
    content: '';
  }

  ::after {
    display: flex;
    content: '';
  }
`;

const SearchPageWrapper = styled.div`
  margin: 32px;
  text-align: center;
`;
