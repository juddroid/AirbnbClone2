import styled from 'styled-components';

const LeftSmallButton = () => {
  return (
    <LeftSmallButtonStyle>
      <svg
        viewBox="0 0 16 16"
        role="presentation"
        aria-hidden="true"
        focusable="false"
      >
        <path d="m10.8 16c-.4 0-.7-.1-.9-.4l-6.8-6.7c-.5-.5-.5-1.3 0-1.8l6.8-6.7c.5-.5 1.2-.5 1.7 0s .5 1.2 0 1.7l-5.8 5.9 5.8 5.9c.5.5.5 1.2 0 1.7-.2.3-.5.4-.8.4"></path>
      </svg>
    </LeftSmallButtonStyle>
  );
};

export default LeftSmallButton;

const LeftSmallButtonStyle = styled.div`
  svg {
    height: 10px;
    width: 10px;
    display: block;
    fill: currentcolor;
  }
`;
