import styled from 'styled-components';

const PriceChartHeader = () => {
  return (
    <PriceChartHeaderStyle>{`평균 1박 요금은 ₩148,398입니다`}</PriceChartHeaderStyle>
  );
};

export default PriceChartHeader;

const PriceChartHeaderStyle = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: rgb(34, 34, 34);
  padding-bottom: 40px;
`;
