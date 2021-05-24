import styled from 'styled-components';
import { SUPER_HOST } from '../../../../../const';

const HostBadge = () => {
  return (
    <div>
      <HostBadgeWrapper>
        <HostBadgeBox>{SUPER_HOST}</HostBadgeBox>
      </HostBadgeWrapper>
    </div>
  );
};

export default HostBadge;

const HostBadgeWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  color: rgb(34, 34, 34);

  display: inline-flex;
  vertical-align: top;
  background-clip: padding-box;
  max-width: 100%;
  box-shadow: rgb(0 0 0 / 18%) 0px 2px 4px;
  border-radius: 4px;
  padding: 4px 8px;
  contain: content;
`;

const HostBadgeBox = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  letter-spacing: 0.04em;
  max-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
