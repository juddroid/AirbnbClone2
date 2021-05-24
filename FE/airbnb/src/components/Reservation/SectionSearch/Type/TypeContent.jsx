import styled from 'styled-components';
import TypeCity from './City/TypeCity';

const TypeContent = () => {
  return (
    <TypeContentStyle>
      <TypeContentWrapper>
        <TypeCity />
        <TypeCity />
        <TypeCity />
        <TypeCity />
        <TypeCity />
      </TypeContentWrapper>
    </TypeContentStyle>
  );
};

export default TypeContent;

const TypeContentStyle = styled.div`
  min-height: 400px;
  overflow: hidden;
`;

const TypeContentWrapper = styled.div`
  overflow-anchor: none;
`;
