import styled from 'styled-components';

const PagingInfo = () => {
  return (
    <PagingInfoStyle>
      <div>
        전체 요금을 보려면 날짜를 입력하세요. 추가 요금이 적용되고 세금이 추가될
        수 있습니다.
      </div>
    </PagingInfoStyle>
  );
};

export default PagingInfo;

const PagingInfoStyle = styled.div`
  margin-bottom: 16px;

  div {
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: rgb(113, 113, 113);
  }
`;
