import styled from 'styled-components';
import { HOST } from '../../../const';

const Host = () => {
  return (
    <HostStyle>
      <a href="/">{HOST}</a>
    </HostStyle>
  );
};

export default Host;

const HostStyle = styled.div`
  appearance: none;
  background: transparent;
  border: 0px;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  margin: 0px;
  outline: none;
  overflow: visible;
  padding: 12px;
  text-align: inherit;
  text-decoration: none;
  user-select: auto;
  position: relative;
  white-space: nowrap;
  z-index: 1;
  color: #222;

  a {
    color: #222;
  }
`;
