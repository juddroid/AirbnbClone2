import styled from 'styled-components';
import GlobeLogo from '../../../svg/GlobeLogo';

const Globe = () => {
  return (
    <GlobeStyle>
      <button>
        <GlobeLogo />
      </button>
    </GlobeStyle>
  );
};

export default Globe;

const GlobeStyle = styled.div`
  button {
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
  }
`;
