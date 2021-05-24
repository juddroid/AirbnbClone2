import styled from 'styled-components';
import Aside from '../components/Aside/Aside';
import { useRecoilValue } from 'recoil';
import { headerScrollState } from '../Recoil/HeaderFieldsetState';
import { BLOCK, NONE } from '../const';

const PageAside = () => {
  const headerState = useRecoilValue(headerScrollState);

  return (
    <AsideWrapper {...{ headerState }}>
      <Aside />
    </AsideWrapper>
  );
};

export default PageAside;

const AsideWrapper = styled.div`
  position: relative;
  z-index: 101;
  display: ${({ headerState }) => (headerState ? NONE : BLOCK)};
`;
