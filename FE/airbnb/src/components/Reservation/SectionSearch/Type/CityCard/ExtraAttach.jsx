import styled from 'styled-components';
import BadgeBox from './BadgeBox';
import CardButtonBox from './CardButtonBox';

const ExtraAttach = () => {
  return (
    <ExtraAttachStyle>
      <BadgeBox />
      <CardButtonBox />
      <BottomDiv />
    </ExtraAttachStyle>
  );
};

export default ExtraAttach;

const ExtraAttachStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  inset: 0px;
  position: absolute;
  pointer-events: none;
`;

const BottomDiv = styled.div`
  display: flex;
  justify-content: center;
  white-space: nowrap;
`;
