import styled from 'styled-components';

const FieldsetDiv = ({ id, dataText, isSelected }) => {
  return (
    <FieldsetDivStyle {...{ id, isSelected }}>
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
    font-weight: 400;
    padding: 10px 12px;
    pointer-events: auto;
    position: relative;
    text-align: center;
    z-index: 0;
    color: #222;
    display: flex;
    justify-content: center;

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

    :hover {
      opacity: 0.8;
      text-decoration: none;
    }

    ::before {
      background-color: #222;
      border-radius: 1px;
      bottom: 0px;
      content: '';
      height: 2px;
      position: absolute;
      transition: all ease-in-out 0.2s;
      width: ${({ isSelected }) => (isSelected ? `18px` : `0px`)};
      opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
    }

    :hover::before {
      ${({ isSelected }) =>
        !isSelected &&
        `
        width: 5px;
        opacity: 1;
        `}
    }
  }
`;
