import styled from 'styled-components';
import CityInfo from './CityInfo/CityInfo';

const MainSuburbSectionContent = () => {
  return (
    <MainSuburbSectionContentStyle>
      <CityInfo />
      <CityInfo />
      <CityInfo />
      <CityInfo />
      <CityInfo />
      <CityInfo />
      <CityInfo />
      <CityInfo />
    </MainSuburbSectionContentStyle>
  );
};

export default MainSuburbSectionContent;

const MainSuburbSectionContentStyle = styled.div`
  overflow-x: auto;
  display: grid;
  gap: 12px;
  grid-template-rows: repeat(2, auto);
  grid-template-columns:
    repeat(calc(var(--column-count) - 1), calc(100% - 108px))
    100%;
  grid-auto-flow: column;
  scroll-snap-type: x mandatory;

  @media ${({ theme }) => theme.M} {
    padding-left: 0px;
    scroll-padding: 0px;
    gap: 16px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${({ theme }) => theme.XL} {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: row;
  }
`;
