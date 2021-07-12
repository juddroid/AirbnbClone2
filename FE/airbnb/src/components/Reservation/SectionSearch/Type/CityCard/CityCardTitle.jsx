import styled from 'styled-components';

const CityCardTitle = ({ title, type }) => {
  return (
    <CityCardTitleStyle {...{ type }}>
      <span>{title}, 걸어서 5분</span>
    </CityCardTitleStyle>
  );
};

export default CityCardTitle;

const CityCardTitleStyle = styled.div`
  display: flex;
  align-items: center;

  span {
    ${({ type }) =>
      type === 'big'
        ? `line-height: 24px;
           max-height: 24px;
           overflow: hidden;
           text-overflow: ellipsis;
           display: -webkit-box;
           color: var(--card-typography-color-primary, #222222);
           word-break: break-all;
           font-size: 18px;
           line-height: 24px;`
        : `line-height: 20px;
           max-height: 20px;
           overflow: hidden;
           text-overflow: ellipsis;
           color: #222;
           word-break: break-all;
           font-size: 16px;
           line-height: 20px;`};
  }
`;
