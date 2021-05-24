import styled from 'styled-components';
import PagingNav from './PagingNav';
import PagingSearchInfo from './PagingSearchInfo';

const PagingNumber = () => {
  return (
    <PagingNumberStyle>
      <PagingNav />
      <PagingSearchInfo />
    </PagingNumberStyle>
  );
};

export default PagingNumber;

const PagingNumberStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;
