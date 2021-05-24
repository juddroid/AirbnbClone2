import styled from 'styled-components';

const PagingEachNumber = ({ num }) => {
  return <PagingEachNumberStyle>{num}</PagingEachNumberStyle>;
};

export default PagingEachNumber;

const PagingEachNumberStyle = styled.a`
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: rgb(34, 34, 34);
  width: 32px;
  height: 32px;
  margin: 0px 8px;
  padding: 0px;
  transition: transform 0.25s ease 0s;
  outline: none;
`;
