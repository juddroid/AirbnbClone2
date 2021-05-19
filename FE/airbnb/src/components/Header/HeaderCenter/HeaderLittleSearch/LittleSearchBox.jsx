import styled from 'styled-components';
import LittleSearchButton from './LittleSearchButton';

const LittleSearchBox = () => {
  return (
    <LittleSearchBoxStyle>
      <LittleSearchButton />
    </LittleSearchBoxStyle>
  );
};

export default LittleSearchBox;

const LittleSearchBoxStyle = styled.div`
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 40px;
  box-shadow: 0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%);
  color: #222;
  display: inline-flex;
  max-width: 100%;
  text-align: left;
  transition: box-shadow 0.2s ease;
  vertical-align: middle;
`;
