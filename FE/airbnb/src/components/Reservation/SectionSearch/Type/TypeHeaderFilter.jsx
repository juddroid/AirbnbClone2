import styled from 'styled-components';
import { FILTER } from '../../../../const';
import FilterMenu from './FilterMenu';
import { v4 as uuidv4 } from 'uuid';
import PriceChartModal from '../../PriceChartModal/PriceChartModal';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { filterPrice } from '../../../../Recoil/ReservationState';

const TypeHeaderFilter = () => {
  const [filterPriceState, setFilterPriceState] = useRecoilState(filterPrice);

  const handleClickFilter = (e) => {
    if (!e.target.closest('button')) return setFilterPriceState(false);
    if (+e.target.closest('button').id === 2)
      return setFilterPriceState((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener('click', handleClickFilter);

    return () => {
      window.removeEventListener('click', handleClickFilter);
    };
  }, []);

  return (
    <TypeHeaderFilterStyle>
      <TypeHeaderFilterWrapper>
        <TypeHeaderFilterContainer>
          <TypeHeaderFilterBox>
            <FilterWrapper>
              <FilterContainer>
                <FilterSpan>
                  <FilterDiv>
                    <FilterBox>
                      {FILTER.map((filter, id) => (
                        <FilterMenu {...{ filter, id }} key={uuidv4()} />
                      ))}
                      {filterPriceState && <PriceChartModal />}
                    </FilterBox>
                  </FilterDiv>
                </FilterSpan>
              </FilterContainer>
            </FilterWrapper>
          </TypeHeaderFilterBox>
        </TypeHeaderFilterContainer>
      </TypeHeaderFilterWrapper>
    </TypeHeaderFilterStyle>
  );
};

export default TypeHeaderFilter;

const TypeHeaderFilterStyle = styled.div`
  padding-top: 20px;
`;

const TypeHeaderFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% + 8px);
`;

const TypeHeaderFilterContainer = styled.div`
  flex: 0 1 100%;
  min-width: 80%;
`;

const TypeHeaderFilterBox = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-grow: 1;
  width: 100%;
`;

const FilterWrapper = styled.div`
  height: 48px;
  width: 100%;
`;

const FilterContainer = styled.div`
  align-items: center;
  background: rgb(255, 255, 255);
  display: flex;
  position: relative;
  width: 100%;
  z-index: 4;
  border-bottom: 0px;
  height: 48px;

  @media (min-width: 1128px) {
    padding-right: 0px;
  }
`;

const FilterSpan = styled.span`
  display: inline-block;
  vertical-align: top;
`;

const FilterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FilterBox = styled.div`
  display: flex;
  align-items: center;
`;
