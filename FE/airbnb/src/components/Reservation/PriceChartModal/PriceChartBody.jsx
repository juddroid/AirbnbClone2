import styled from 'styled-components';
import PriceChart from './PriceChart';
import PriceRange from './PriceRange';

const PriceChartBody = () => {
  return (
    <PriceChartBodyStyle>
      <PriceChart />
      <PriceRange />
    </PriceChartBodyStyle>
  );
};

export default PriceChartBody;

const PriceChartBodyStyle = styled.div`
  margin: auto;
  width: 90%;
`;
