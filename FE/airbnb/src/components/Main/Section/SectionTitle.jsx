import styled from 'styled-components';

const SectonTitle = ({ title }) => {
  return <SectionTitleSytle>{title}</SectionTitleSytle>;
};

export default SectonTitle;

const SectionTitleSytle = styled.section`
  word-break: keep-all;
  padding-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  color: #222;

  @media ${({ theme }) => theme.L} {
    font-size: 30px;
  }
`;
