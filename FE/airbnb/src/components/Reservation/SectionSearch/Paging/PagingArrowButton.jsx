import styled from 'styled-components';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const PrevButton = () => {
  return <NavigateBeforeIcon />;
};

const NextButton = () => {
  return <NavigateNextIcon />;
};

const PagingArrowButton = ({ type }) => {
  return (
    <PagingArrowButtonStyle>
      {
        {
          prev: <PrevButton />,
          next: <NextButton />,
        }[type]
      }
    </PagingArrowButtonStyle>
  );
};

export default PagingArrowButton;

const PagingArrowButtonStyle = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: transparent;
  border: none;
  color: rgb(34, 34, 34);
  margin: 0px 16px 0px 0px;
  padding: 0px;
  transition: transform 0.25s ease 0s;
  outline: none;

  :disabled {
    color: rgb(221, 221, 221);
    cursor: not-allowed;
  }

  :disabled::before {
    background: transparent;
  }
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
  }
`;
