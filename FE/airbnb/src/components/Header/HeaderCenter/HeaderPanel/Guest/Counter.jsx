import styled from 'styled-components';

const Counter = ({ count }) => {
  return <CounterStyle>{count}</CounterStyle>;
};

export default Counter;

const CounterStyle = styled.div`
  position: relative;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
`;
