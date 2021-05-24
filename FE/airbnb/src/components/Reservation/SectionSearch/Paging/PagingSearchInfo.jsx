import styled from 'styled-components';

const PagingSearchInfo = () => {
  return (
    <PagingSearchInfoStyle>
      <TextBox>
        {'숙소 300개 이상'} {'중'} {1} {'-'} {30}
      </TextBox>
    </PagingSearchInfoStyle>
  );
};

export default PagingSearchInfo;

const PagingSearchInfoStyle = styled.div`
  margin-top: 16px;
`;

const TextBox = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: rgb(34, 34, 34);
`;
