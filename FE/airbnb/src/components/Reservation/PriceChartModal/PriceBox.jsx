import styled from 'styled-components';

const PriceBox = () => {
  return (
    <PriceBoxStyle>
      <PriceBoxLabel>
        <PriceBoxTitle>{'최저 요금'}</PriceBoxTitle>
        <PriceBoxContent>{`₩ 11000`}</PriceBoxContent>
      </PriceBoxLabel>
    </PriceBoxStyle>
  );
};

export default PriceBox;

const PriceBoxStyle = styled.div`
  position: relative;
  cursor: text;
  display: flex;
  height: 56px;
  width: 100%;
  margin: 0px;
  border: none;
  color: rgb(34, 34, 34);
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: rgb(176 176 176) 0px 0px 0px 1px inset;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
`;

const PriceBoxLabel = styled.label`
  position: relative;
  flex: 1 1 0%;
  padding: 0;
`;

const PriceBoxTitle = styled.div`
  position: absolute;
  top: 18px;
  left: 12px;
  right: 12px;
  margin: 0px;
  padding: 0px;
  color: rgb(113, 113, 113);
  pointer-events: none;
  transform-origin: 0% 0%;
  font-size: 16px;
  line-height: 20px;
  transition: transform 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
  transform: translateY(-8px) scale(0.75);
  font-weight: 400;
`;

const PriceBoxContent = styled.div`
  width: 100%;
  border: none;
  outline: none;
  padding: 0px;
  margin: 30px 12px 10px;
  min-height: 1px;
  color: inherit;
  background-color: transparent;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  appearance: none;
`;
