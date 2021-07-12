import styled from 'styled-components';
import LikeItLogo from '../../../../../svg/LikeItLogo';

const LikeItBadge = () => {
  const handleClickLikeIt = (e) => {
    e.preventDefault();
    console.log('like it');
    console.log('need room id');
    console.log('setLikeItState');
  };

  return (
    <LikeItBadgeStyle>
      <LikeItButton onClick={handleClickLikeIt}>
        <LikeItLogo />
      </LikeItButton>
    </LikeItBadgeStyle>
  );
};

export default LikeItBadge;

const LikeItBadgeStyle = styled.div`
  pointer-events: auto;
  margin-top: -15px;
  margin-right: -3px;
`;

const LikeItButton = styled.button`
  cursor: pointer;
  position: relative;
  text-align: center;
  text-decoration: none;
  background: transparent;
  touch-action: manipulation;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 50%;
  outline: none;
  padding: 2px 0px 0px;
  transition: transform 0.25s ease 0s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: rgb(34, 34, 34);
  margin: 0px;
  width: 32px;
  height: 32px;

  :hover {
    background: #eeeeee;
  }

  svg {
    fill: #fff;
    stroke: gray;
  }
`;
