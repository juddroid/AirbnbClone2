import styled from 'styled-components';

const FilterMenu = ({ filter }) => {
  return (
    <FilterMenuStyle>
      <FilterMenuBox>
        <FilterButton>
          <FilterButtonUpper>
            <div>
              <span>{filter}</span>
            </div>
          </FilterButtonUpper>
          <FilterButtonBottom>
            <span>
              <div>
                <span>{filter}</span>
              </div>
            </span>
          </FilterButtonBottom>
        </FilterButton>
      </FilterMenuBox>
    </FilterMenuStyle>
  );
};

export default FilterMenu;

const FilterMenuStyle = styled.div`
  flex-shrink: 0;
  display: inline-block;
  position: relative;
`;

const FilterMenuBox = styled.div`
  display: inline-block;
  white-space: nowrap;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
`;

const FilterButton = styled.button`
  cursor: pointer;
  text-align: center;
  border: 1px solid rgb(176, 176, 176);
  background-color: rgb(255, 255, 255);
  outline: none;
  margin: 0px;
  border-radius: 30px;
  color: rgb(34, 34, 34);
  position: relative;
  padding: 8px 16px;
  font-size: 12px;
  line-height: 16px;

  :hover {
    border-color: #222;
  }
`;

const FilterButtonUpper = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  div {
    display: flex;

    span {
      display: inline-block;
    }
  }
`;

const FilterButtonBottom = styled.span`
  display: block;
  height: 0px;
  overflow: hidden;
  visibility: hidden;
  pointer-events: none;
  background-color: rgb(247, 247, 247);
  color: rgb(34, 34, 34);
  border-color: rgb(34, 34, 34);
  font-weight: 800;

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    div {
      display: flex;

      span {
        display: inline-block;
      }
    }
  }

  ::after {
    content: '';
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background-color: transparent;
    position: absolute;
    top: -1px;
    left: -1px;
    border-color: inherit;
    border-style: solid;
    border-width: 2px;
    border-radius: inherit;
  }
`;
