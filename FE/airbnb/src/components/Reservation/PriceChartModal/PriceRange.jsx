import styled from 'styled-components';
import PriceBox from './PriceBox';

const PriceRange = () => {
  return (
    <PriceRangeStyle>
      <PriceBox />
      <Dash> - </Dash>
      <PriceBox />
    </PriceRangeStyle>
  );
};

export default PriceRange;

const PriceRangeStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
`;

const Dash = styled.div`
  margin: 8px;
`;
