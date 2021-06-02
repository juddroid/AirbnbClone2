import styled from 'styled-components';
import TypeCityContent from './TypeCityContent';

const TypeCityLong = ({ city }) => {
  return (
    <TypeCityStyle>
      <TypeCityWrapper>
        <TypeCityContainer>
          <TypeCityContent {...{ city }} />
        </TypeCityContainer>
      </TypeCityWrapper>
    </TypeCityStyle>
  );
};

export default TypeCityLong;

const TypeCityStyle = styled.div`
  ::before {
    display: flex;
    content: '';
  }
  ::after {
    display: flex;
    content: '';
  }
`;

const TypeCityWrapper = styled.div`
  background-color: transparent;
  padding-left: 24px;
  padding-right: 24px;
  max-width: none;

  @media (min-width: 1128px) {
    margin: 0px auto;
    position: relative;
  }
`;

const TypeCityContainer = styled.div`
  @media (min-width: 744px) {
    padding: 0px;
    margin-left: -8px;
    margin-right: -8px;
  }
`;
