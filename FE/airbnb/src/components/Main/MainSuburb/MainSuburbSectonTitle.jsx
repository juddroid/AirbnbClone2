import styled from 'styled-components';
import { SECTION_SUBURB } from '../../../const';

const MainSuburbSectonTitle = () => {
  return (
    <MainSuburbSectionTitleSytle>{SECTION_SUBURB}</MainSuburbSectionTitleSytle>
  );
};

export default MainSuburbSectonTitle;

const MainSuburbSectionTitleSytle = styled.section`
  word-break: keep-all;
  padding-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  color: #222;

  @media ${({ theme }) => theme.L} {
    font-size: 30px;
  }
`;
