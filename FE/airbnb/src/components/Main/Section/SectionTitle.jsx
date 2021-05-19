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
  display: flex;

  @media ${({ theme }) => theme.S} {
    font-size: 20px;
    display: block;
  }
  @media ${({ theme }) => theme.M} {
    font-size: 24px;
    display: block;
  }
  @media ${({ theme }) => theme.L} {
    font-size: 30px;
    display: block;
  }
`;
