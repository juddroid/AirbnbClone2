import styled from 'styled-components';

const DataText = ({ dataText }) => {
  return (
    <DataTextStyle>
      <span>{dataText}</span>
    </DataTextStyle>
  );
};

const FieldsetLabel = ({ dataText }) => {
  return (
    <FieldsetLabelStyle>
      <input />
      <DataText {...{ dataText }} />
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
    ::before {
      background-color: #222;
      border-radius: 1px;
      bottom: 0px;
      content: '';
      height: 2px;
      left: 50%;
      margin-left: -9px;
      position: absolute;

      transition: 0.2s -ms-transform cubic-bezier(0, 0, 0.1, 1),
        0.2s -webkit-transform cubic-bezier(0, 0, 0.1, 1),
        0.2s transform cubic-bezier(0, 0, 0.1, 1);
      width: 18px;
    }
  }
`;
