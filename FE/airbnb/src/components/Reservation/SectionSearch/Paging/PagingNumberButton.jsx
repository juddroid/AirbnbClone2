import styled from 'styled-components';

const PagingNumberButton = () => {
  return <PagingNumberButtonStyle>1</PagingNumberButtonStyle>;
};

export default PagingNumberButton;

const PagingNumberButtonStyle = styled.button`
  :disabled {
    cursor: default !important;
  }

  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin: 0px 8px;
  padding: 0px;
  transition: transform 0.25s ease 0s;
  outline: none;
  background: rgb(34, 34, 34);
  color: rgb(255, 255, 255);
`;
