import styled from 'styled-components';

const FieldsetDiv = ({ dataText }) => {
  return (
    <FieldsetDivStyle>
      <span>{dataText}</span>
    </FieldsetDivStyle>
  );
};

export default FieldsetDiv;

const FieldsetDivStyle = styled.div`
  span {
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    padding: 10px 12px;
    pointer-events: auto;
    position: relative;
    text-align: center;
    z-index: 0;
    color: #222;

    @media ${({ theme }) => theme.L} {
      font-size: 14px;
      line-height: 18px;
      font-weight: 600;
    }
    @media ${({ theme }) => theme.XL} {
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      padding: 10px 16px;
    }
  }
`;
