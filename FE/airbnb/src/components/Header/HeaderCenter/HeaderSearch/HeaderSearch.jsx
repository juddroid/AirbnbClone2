import styled from 'styled-components';
import { GET, SEARCH } from '../../../../const';
import FieldPanel from '../FieldPanel';
import Fieldset from '../Fieldset';

const HeaderSearch = () => {
  return (
    <HeaderSearchStyle>
      <SearchWrapper>
        <SearchForm method={GET} role={SEARCH}>
          <Fieldset />
          <FieldPanel />
        </SearchForm>
      </SearchWrapper>
    </HeaderSearchStyle>
  );
};

export default HeaderSearch;

const HeaderSearchStyle = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  left: 0px;
  position: absolute;
  text-align: left;
  top: 64px;
  transform-origin: 60px 0%;
  width: 100%;
  z-index: 2;
  pointer-events: none;
  transition: transform 150ms ease 0s, opacity 50ms ease 20ms,
    visibility 0ms ease 150ms;

  @media (min-width: 375px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (min-width: 744px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 950px) {
    top: 0px;
    transform-origin: 50% 0%;
  }
  @media (min-width: 1128px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media (min-width: 1440px) {
    padding-left: 80px;
    padding-right: 80px;
  }
`;

const SearchWrapper = styled.div`
  padding-bottom: 16px;
  position: relative;
  z-index: 1;
`;

const SearchForm = styled.form`
  margin: 0 auto;
  max-width: 850px;
`;
