import styled from 'styled-components';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const CityArrowButton = ({ type }) => {
  return (
    <CityArrowButtonStyle>
      <CityArrowDiv>
        <span>_</span>
        {
          {
            prev: <NavigateBeforeIcon />,
            next: <NavigateNextIcon />,
          }[type]
        }
      </CityArrowDiv>
    </CityArrowButtonStyle>
  );
};

export default CityArrowButton;

const CityArrowButtonStyle = styled.button`
  appearance: none;
  display: inline-flex;
  border-radius: 50%;
  border: none;
  outline: none;
  margin: 0px;
  padding: 0px;
  color: rgb(34, 34, 34);
  cursor: pointer;
  touch-action: manipulation;
  position: relative;
  background: transparent;
  transition: transform 0.25s ease 0s;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(221, 221, 221);
  }
`;

const CityArrowDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    border: 0px;
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    padding: 0px;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  svg {
    display: block;
    fill: #222;
    height: 20px;
    width: 20px;
    overflow: visible;
  }
`;
