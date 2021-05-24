import styled from 'styled-components';
import { NEXT, PREV } from '../../../../../const';
import CardButton from './CardButton';

const CardButtonBox = () => {
  return (
    <CardButtonBoxStyle>
      <LeftButtonStyle>
        <CardButton type={PREV} />
      </LeftButtonStyle>
      <RightButtonStyle>
        <CardButton type={NEXT} />
      </RightButtonStyle>
    </CardButtonBoxStyle>
  );
};

export default CardButtonBox;

const CardButtonBoxStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex: 1 1 0%;
  visibility: hidden;
`;

const ButtonStyle = styled.div`
  border: 0px;
  pointer-events: auto;
  background-color: transparent;
`;

const LeftButtonStyle = styled(ButtonStyle)`
  margin-left: 8px;
`;
const RightButtonStyle = styled(ButtonStyle)`
  margin-right: 8px;
`;
