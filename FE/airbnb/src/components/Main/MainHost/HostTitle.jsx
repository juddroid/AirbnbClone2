import styled from 'styled-components';
import { SECTION_HOST_TITLE } from '../../../const';

const HostTitle = () => {
  return <HostTitleStyle>{SECTION_HOST_TITLE}</HostTitleStyle>;
};

export default HostTitle;

const HostTitleStyle = styled.div`
  font-size: 28px;
  line-height: 36px;
  letter-spacing: normal;
  color: #fff;
  font-weight: 500;
  white-space: pre-wrap;

  @media (min-width: 1128px) {
    font-size: 44px;
    line-height: 52px;
  }
`;
