import styled from 'styled-components';

const UserBurgerLogo = () => {
  return (
    <UserBurgerLogoStyle>
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
      >
        <g fill="none" fill-rule="nonzero">
          <path d="m2 16h28"></path>
          <path d="m2 24h28"></path>
          <path d="m2 8h28"></path>
        </g>
      </svg>
    </UserBurgerLogoStyle>
  );
};

export default UserBurgerLogo;

const UserBurgerLogoStyle = styled.div`
  svg {
    display: block;
    fill: none;
    height: 16px;
    width: 16px;
    stroke: #222;
    stroke-width: 3;
    overflow: visible;
  }
`;
