import styled from 'styled-components';
import { LEFT, WEEK_LIST } from '../../../../../const';
import { v4 as uuidv4 } from 'uuid';
import Week from './Week';

const Weeks = ({ direction }) => {
  return (
    <WeeksStyle {...{ direction }}>
      <WeeksUl>
        {WEEK_LIST.map((week) => (
          <Week {...{ week }} key={uuidv4()} />
        ))}
      </WeeksUl>
    </WeeksStyle>
  );
};
export default Weeks;

const WeeksStyle = styled.div`
  color: rgb(117, 117, 117);
  position: absolute;
  top: 62px;
  z-index: 2;
  text-align: left;

  ${({ direction }) =>
    direction === LEFT
      ? `left: 0px; padding: 0px 27px`
      : `left: 391px; padding: 0px 27px`}
`;

const WeeksUl = styled.ul`
  list-style: none;
  margin: 1px 0px;
  padding-left: 0px;
  padding-right: 0px;
  font-size: 14px;
`;
