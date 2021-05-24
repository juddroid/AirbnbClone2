import styled from 'styled-components';

const CityCardTitle = () => {
  return (
    <CityCardTitleStyle>
      <span>
        블루테라{'>'} 코랄 #2, 속초더블루마크, 투베이 오션뷰, 속초해수욕장 도보
        5분
      </span>
    </CityCardTitleStyle>
  );
};

export default CityCardTitle;

const CityCardTitleStyle = styled.div`
  display: flex;
  align-items: center;

  span {
    line-height: 20px;
    max-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;

    color: #222;
    word-break: break-all;
    font-size: 16px;
    line-height: 20px;
  }
`;
