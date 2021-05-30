import styled from 'styled-components';

const DeleteButtonIcon = () => {
  return (
    <DeleteButtonIconStyle>
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
      >
        <path d="m6 6 20 20"></path>
        <path d="m26 6-20 20"></path>
      </svg>
    </DeleteButtonIconStyle>
  );
};

export default DeleteButtonIcon;

const DeleteButtonIconStyle = styled.div`
  svg {
    display: block;
    fill: none;
    height: 12px;
    width: 12px;
    stroke: currentcolor;
    stroke-width: 4;
    overflow: visible;
  }
`;
