import styled from 'styled-components';
import { MINUS, PLUS } from '../../../../../const';
import Counter from './Counter';
import CounterButton from './CounterButton';

const GuestCount = ({ count, id }) => {
  return (
    <GuestCountStyle>
      <CounterButton type={MINUS} {...{ count, id }} />
      <Counter {...{ count }} />
      <CounterButton type={PLUS} {...{ count, id }} />
    </GuestCountStyle>
  );
};

export default GuestCount;

const GuestCountStyle = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 104px;
  height: 32px;
  color: rgb(34, 34, 34);
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;
