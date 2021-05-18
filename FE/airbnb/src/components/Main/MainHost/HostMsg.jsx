import styled from 'styled-components';
import { SECTION_HOST_MSG } from '../../../const';

const HostMsg = () => {
  return <HostMsgStyle>{SECTION_HOST_MSG}</HostMsgStyle>;
};

export default HostMsg;

const HostMsgStyle = styled.div`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: normal;
  color: #fff;
  padding-top: 8px;
  white-space: pre-line;
  word-break: keep-all;

  @media (min-width: 744px) {
    padding-top: 12px;
  }

  @media (min-width: 1128px) {
    font-size: 17px;
    line-height: 25px;
  }
`;
