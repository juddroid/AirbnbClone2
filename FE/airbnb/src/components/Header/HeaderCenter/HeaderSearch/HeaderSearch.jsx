import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { GET, SEARCH } from '../../../../const';
import { headerScrollState } from '../../../../Recoil/HeaderFieldsetState';
import FieldPanel from '../FieldPanel';
import Fieldset from '../Fieldset';

const HeaderSearch = () => {
  const headerState = useRecoilValue(headerScrollState);

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <HeaderSearchStyle {...{ headerState }}>
      <SearchWrapper>
        <SearchForm method={GET} role={SEARCH} onSubmit={handleSubmitForm}>
          <Fieldset />
          <FieldPanel />
        </SearchForm>
      </SearchWrapper>
    </HeaderSearchStyle>
  );
};

export default HeaderSearch;

const HeaderSearchStyle = styled.div`
  ${({ headerState }) =>
    headerState
      ? `
  padding-left: 24px;
  padding-right: 24px;
  left: 0px;
  position: absolute;
  text-align: left;
  top: 64px;
  transform-origin: 60px 0%;
  width: 100%;
  z-index: 2;
  opacity: 0;
  transform: scale(0.4, 0.727273) translate(60px, -122px);
  pointer-events: none;
  visibility: hidden;
  will-change: transform, opacity;
  transition: -ms-transform 150ms ease 0s, -webkit-transform 150ms ease 0s,
    transform 150ms ease 0s, opacity 50ms ease 20ms, visibility 0ms ease 150ms;

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
    transform: scale(0.35, 0.727273) translateY(-58px);
  }
  @media (min-width: 1128px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media (min-width: 1440px) {
    padding-left: 80px;
    padding-right: 80px;
  }
      `
      : `
  
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
  `};
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
