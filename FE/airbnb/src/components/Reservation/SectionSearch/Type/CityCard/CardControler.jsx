import styled from 'styled-components';
import LeftSmallButton from '../../../../../svg/LeftSmallButton';
import RightSmallButton from '../../../../../svg/RightSmallButton';

const CardControler = () => {
  return (
    <CardControlerStyle>
      <CardControlerWrapper>
        <LeftButtonBox>
          <ButtonStyle>
            <LeftSmallButton />
          </ButtonStyle>
        </LeftButtonBox>
        <RightButtonBox>
          <ButtonStyle>
            <RightSmallButton />
          </ButtonStyle>
        </RightButtonBox>
      </CardControlerWrapper>
    </CardControlerStyle>
  );
};

export default CardControler;

const CardControlerStyle = styled.div`
  pointer-events: none;
  top: 0px;
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const CardControlerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
  pointer-events: none;
`;

const LeftButtonBox = styled.div`
  position: absolute;
  display: block;
  top: 50%;
  pointer-events: auto;
  transform: translateY(-50%);
  left: 8px;
`;

const RightButtonBox = styled.div`
  position: absolute;
  display: block;
  top: 50%;
  pointer-events: auto;
  transform: translateY(-50%);
  right: 8px;
`;

const ButtonStyle = styled.button`
  appearance: none;
  display: inline-flex;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  outline: none;
  margin: 0px;
  padding: 0px;
  color: rgb(34, 34, 34);
  background-color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  touch-action: manipulation;
  align-items: center;
  justify-content: center;
  background-clip: padding-box;
  box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px,
    rgb(0 0 0 / 18%) 0px 2px 4px;
  transition: transform 0.25s ease 0s;
  width: 32px;
  height: 32px;
`;
