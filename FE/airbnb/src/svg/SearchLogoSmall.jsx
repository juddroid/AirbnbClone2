import styled from 'styled-components';

const SearchLogoSmall = () => {
  return (
    <SearchLogoSmallStyle>
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
      >
        <g fill="none">
          <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
        </g>
      </svg>
    </SearchLogoSmallStyle>
  );
};

export default SearchLogoSmall;

const SearchLogoSmallStyle = styled.div`
  background-color: var(--header-brand-color, #ff385c);
  background-color: #ff385c;
  border-radius: 50%;
  color: #fff;
  flex: 0 0 32;
  height: 32px;
  margin: 7px 7px 7px 0;
  padding: 10px;
  width: 32px;

  svg {
    display: block;
    fill: none;
    height: 12px;
    width: 12px;
    stroke: currentColor;
    stroke-width: 5.333333333333333;
    overflow: visible;
  }
`;
