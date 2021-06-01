import styled from 'styled-components';

const PriceInfo = () => {
  return (
    <PriceInfoStyle>{`예약 확정 전에는 요금이 청구되지 않습니다.`}</PriceInfoStyle>
  );
};

export default PriceInfo;

const PriceInfoStyle = styled.div`
  color: rgb(34, 34, 34);
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 16px 0px 0px;
  padding: 0px;
  text-align: center;

  div {
    margin-top: 8px;
    white-space: normal;
  }
`;
