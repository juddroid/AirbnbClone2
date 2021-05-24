import styled from 'styled-components';

const SectionMap = () => {
  return <SectionMapStyle>SectionMap</SectionMapStyle>;
};

export default SectionMap;

const SectionMapStyle = styled.div`
  top: 0px;

  inset: -5px 0px 0px;
  display: none;
  position: absolute;
  transition: none 0s ease 0s;

  @media (min-width: 1128px) {
    display: block;
    left: auto;
    width: calc(100% - 58vw);
  }
`;
