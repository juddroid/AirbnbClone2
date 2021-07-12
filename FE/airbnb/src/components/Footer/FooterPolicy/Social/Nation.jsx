import styled from 'styled-components';
import Language from './Language';
import Money from './Money';

const Nation = () => {
  return (
    <NationStyle>
      <NationBox>
        <Language />
        <Money />
      </NationBox>
    </NationStyle>
  );
};

export default Nation;

const NationStyle = styled.div``;

const NationBox = styled.div`
  display: flex;
`;
