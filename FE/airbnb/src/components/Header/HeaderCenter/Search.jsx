import styled from 'styled-components';
import SearchLogo from '../../../svg/SearchLogo';

const Search = () => {
  return (
    <SearchStyle>
      <SearchButton>
        <SearchLogoBox>
          <SearchLogo />
        </SearchLogoBox>
      </SearchButton>
    </SearchStyle>
  );
};

export default Search;

const SearchStyle = styled.div`
  flex: 0 0 auto;
  margin-left: -6px;
  padding-right: 9px;
  position: relative;
  z-index: 5;
`;

const SearchButton = styled.button`
  appearance: none;
  background: transparent;
  border: 0px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  margin: 0px;
  outline: none;
  overflow: hidden;
  padding: 0px;
  text-align: inherit;
  text-decoration: none;
  user-select: auto;
  background-color: #ff385c;
  border-radius: 24px;
  height: 48px;
  max-width: 48px;
  position: relative;
  transition: 0.2s max-width cubic-bezier(0.35, 0, 0.65, 1);
  vertical-align: middle;
  z-index: 0;
`;

const SearchLogoBox = styled.div`
  display: inline-flex;
  padding: 16px;
  position: relative;
  z-index: 1;
`;
