import styled from 'styled-components';

const RecentTitle = () => {
  return (
    <RecentTitleStyle>
      <RecentTitleWrapper>
        <RecentTitleContainer>
          <h3>최근 조회</h3>
          <p>현재 검색 결과와 일치하도록 날짜와 가격이 업데이트되었습니다.</p>
        </RecentTitleContainer>
      </RecentTitleWrapper>
    </RecentTitleStyle>
  );
};

export default RecentTitle;

const RecentTitleStyle = styled.div`
  color: rgb(34, 34, 34);
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const RecentTitleWrapper = styled.div`
  width: 100%;
`;

const RecentTitleContainer = styled.div`
  color: rgb(34, 34, 34);
  font-weight: 400;

  h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 22px;
    line-height: 26px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 0px;
    margin-top: 4px;

    @media (min-width: 744px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
