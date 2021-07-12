import styled from 'styled-components';
import GlobeLogo from '../../../svg/GlobeLogo';

const Globe = () => {
  return (
    <GlobeStyle>
      <button>
        <div>
          <GlobeLogo />
        </div>
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

    :hover::before {
      background: #f7f7f7;
    }

    ::before {
      border-radius: 22px;
      bottom: 0px;
      content: '';
      left: -3px;
      position: absolute;
      right: -3px;
      top: 0px;
      z-index: 0;
    }

    div {
      align-items: center;
      display: flex;
      height: 100%;
      position: relative;
      z-index: 1;
    }
  }
`;
