import styled from 'styled-components';

const CityCardType = ({ location, propertyType, type }) => {
  const city = location && location === '1s' ? '서울' : '코드스쿼드';
  return (
    <CityCardTypeStyle {...{ type }}>
      <CityCardTypeOl {...{ type }}>
        <TypeList>
          {city}
          <ListSpan> · </ListSpan>
        </TypeList>
        {city ? (
          <TypeList>{propertyType} 전체</TypeList>
        ) : (
          <TypeList>레지던스 전체</TypeList>
        )}
      </CityCardTypeOl>
    </CityCardTypeStyle>
  );
};

export default CityCardType;

const CityCardTypeStyle = styled.div`
  ${({ type }) =>
    type === 'big'
      ? `margin-bottom: 4px;
         font-size: 14px;
         line-height: 18px;
         align-items: center;
         display: flex;
         width: 100%;`
      : ` margin-bottom: 2px;
          color: #222;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          max-height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;`};
`;

const CityCardTypeOl = styled.ol`
  ${({ type }) =>
    type === 'big'
      ? `
      color: rgb(113, 113, 113);
      flex: 1 1 0%;
      line-height: 18px;
      max-height: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      opacity: 1;
      margin: 0px;
      padding: 0px;
      display: flex;
      `
      : `margin: 0px;
        padding: 0px;
        display: flex;`};
`;

const TypeList = styled.li`
  :nth-child(1n) > li {
    display: inline-block;
  }
`;

const ListSpan = styled.span`
  pointer-events: none;
  user-select: none;
  white-space: pre-wrap;
  padding-left: 0px;
  padding-right: 0px;
`;
