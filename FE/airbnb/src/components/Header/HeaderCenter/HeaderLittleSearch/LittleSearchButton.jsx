import styled from 'styled-components';
import { LITTLE_SEARCH_LABEL } from '../../../../const';
import SearchLogoSmall from '../../../../svg/SearchLogoSmall';

const LittleSearchButton = () => {
  return (
    <ButtonStyle>
      <LittleSearchLabel>{LITTLE_SEARCH_LABEL}</LittleSearchLabel>
      <SearchLogoSmall />
    </ButtonStyle>
  );
};

export default LittleSearchButton;

const ButtonStyle = styled.button`
  appearance: none;
  background: transparent;
  border: 1px solid transparent;
  color: inherit;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  margin: -1px;
  outline: none;
  overflow: visible;
  padding: 0px;
  text-align: inherit;
  text-decoration: none;
  user-select: auto;
  align-items: center;
  border-radius: 4px;
  flex: 0 1 auto;
  height: 48px;
  min-width: 0px;
  position: relative;
  z-index: 1;

  :only-of-type {
    width: 300px;
  }
  :first-of-type {
    padding-left: 8px;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  :last-of-type {
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }
`;

const LittleSearchLabel = styled.div`
  font-size: 14px;
  line-height: 18px;
  flex: 1 1 auto;
  min-width: 0px;
  font-weight: 600;
  padding: 0 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
