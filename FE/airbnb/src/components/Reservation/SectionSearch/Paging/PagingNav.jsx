import styled from 'styled-components';
import { NEXT, PREV } from '../../../../const';
import PagingArrowButton from './PagingArrowButton';
import PagingDot from './PagingDot';
import PagingEachNumber from './PagingEachNumber';
import PagingNumberButton from './PagingNumberButton';

const PagingNav = () => {
  return (
    <PagingNavStyle>
      <PagingArrowButton type={PREV} />
      <PagingNumberButton />
      <PagingEachNumber num={2} />
      <PagingEachNumber num={3} />
      <PagingEachNumber num={4} />
      <PagingEachNumber num={5} />
      <PagingDot />
      <PagingEachNumber num={10} />
      <PagingArrowButton type={NEXT} />
    </PagingNavStyle>
  );
};

export default PagingNav;

const PagingNavStyle = styled.div`
  display: flex;
`;
