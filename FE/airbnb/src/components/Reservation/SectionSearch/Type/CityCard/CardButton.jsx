import styled from 'styled-components';
import LeftSmallButton from '../../../../../svg/LeftSmallButton';
import RightSmallButton from '../../../../../svg/RightSmallButton';

const CardButton = ({ type }) => {
  return (
    <CardButtonStyle>
      {
        {
          prev: <LeftSmallButton />,
          next: <RightSmallButton />,
        }[type]
      }
    </CardButtonStyle>
  );
};

export default CardButton;

const CardButtonStyle = styled.button`
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
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s,
    transform 0.25s ease 0s;
  width: 32px;
  height: 32px;
`;
