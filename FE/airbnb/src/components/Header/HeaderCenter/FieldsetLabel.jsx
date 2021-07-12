import styled from 'styled-components';

const DataText = ({ dataText, isSelected }) => {
  return (
    <DataTextStyle {...{ isSelected }}>
      <span>{dataText}</span>
    </DataTextStyle>
  );
};

const FieldsetLabel = ({ id, dataText, isSelected, handleClickLabel }) => {
  return (
    <FieldsetLabelStyle id={id} onClick={handleClickLabel}>
      <DataText {...{ dataText, isSelected }} />
    </FieldsetLabelStyle>
  );
};

export default FieldsetLabel;

const FieldsetLabelStyle = styled.label`
  input {
    outline: none;
    appearance: none;
    border: 0px;
    border-radius: 0px;
    margin: 0px;
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    padding: 0px;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

const DataTextStyle = styled.div`
  span {
    font-size: 16px;
    line-height: 20px;
    cursor: ${({ isSelected }) => (isSelected ? `default` : `pointer`)};
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
