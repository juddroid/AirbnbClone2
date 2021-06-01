import styled from 'styled-components';

const Price = () => {
  return (
    <PriceStyle>
      <PriceWrapper>
        <PriceText>{`총 합계`}</PriceText>
        <PriceNumber>{`₩436,701`}</PriceNumber>
      </PriceWrapper>
    </PriceStyle>
  );
};

export default Price;

const PriceStyle = styled.div`
  border-top: 1px solid rgb(221, 221, 221);
  list-style-type: none;
  margin: 16px 0px 0px;
  padding: 24px 0px 12px;
`;

const PriceWrapper = styled.div`
  display: flex;
  padding-bottom: 0px;
`;

const PriceText = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
  white-space: normal;
  font-weight: 800;
`;

const PriceNumber = styled.div`
  padding-left: 16px;
  white-space: nowrap;
  font-weight: 800;
`;
