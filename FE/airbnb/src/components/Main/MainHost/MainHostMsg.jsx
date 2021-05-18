import styled from 'styled-components';
import HostDetailButton from './HostDetailButton';
import HostMsg from './HostMsg';
import HostTitle from './HostTitle';

const MainHostMsg = () => {
  return (
    <MainHostMsgStyle>
      <HostTitle />
      <HostMsg />
      <HostDetailButton />
    </MainHostMsgStyle>
  );
};

export default MainHostMsg;

const MainHostMsgStyle = styled.div`
  position: absolute;
  top: 0px;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  z-index: 1;

  @media (min-width: 744px) {
    align-items: flex-start;
    height: 100%;
    justify-content: center;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 0px;
    text-align: left;
    width: 360px;
  }

  @media (min-width: 1128px) {
    padding-left: 80px;
    padding-right: 80px;
    width: 544px;
  }
`;
