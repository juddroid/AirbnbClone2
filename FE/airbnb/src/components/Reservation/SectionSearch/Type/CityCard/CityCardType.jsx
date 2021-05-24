import styled from 'styled-components';

const CityCardType = () => {
  return (
    <CityCardTypeStyle>
      <CityCardTypeOl>
        <TypeList>레지던스 전체</TypeList>
        <TypeList>
          <ListSpan> · </ListSpan>
          Sokcho-si
        </TypeList>
      </CityCardTypeOl>
    </CityCardTypeStyle>
  );
};

export default CityCardType;

const CityCardTypeStyle = styled.div`
  margin-bottom: 2px;

  color: #222;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  max-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CityCardTypeOl = styled.ol`
  margin: 0px;
  padding: 0px;
  display: flex;
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
