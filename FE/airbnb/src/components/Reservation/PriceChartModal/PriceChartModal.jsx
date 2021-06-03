import styled from 'styled-components';
import PriceChartBody from './PriceChartBody';
import PriceChartHeader from './PriceChartHeader';

const PriceChartModal = () => {
  return (
    <PriceChartModalStyle>
      <PriceChartModalWrapper>
        <PriceChartModalContainer>
          <PriceChartModalBox>
            <PriceChartHeader />
            <PriceChartBody />
          </PriceChartModalBox>
        </PriceChartModalContainer>
      </PriceChartModalWrapper>
    </PriceChartModalStyle>
  );
};

export default PriceChartModal;

const PriceChartModalStyle = styled.div`
  position: absolute;
  display: inline-block;
  left: 225px;
  top: 54px;
  z-index: 10;
  background: rgb(255, 255, 255);
  border: 0.5px solid rgba(118, 118, 118, 0.28);
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 37px;
  overflow: hidden auto;
  white-space: normal;
  visibility: visible;
`;

const PriceChartModalWrapper = styled.div`
  overflow: hidden auto;
  padding: 20px;
  max-height: calc(100vh - 300px);
`;

const PriceChartModalContainer = styled.div`
  @media (min-width: 744px) {
    min-width: 400px;
  }
`;

const PriceChartModalBox = styled.div`
  padding-top: 8px;
`;
