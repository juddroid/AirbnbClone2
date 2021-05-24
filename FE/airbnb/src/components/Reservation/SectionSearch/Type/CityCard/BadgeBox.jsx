import styled from 'styled-components';
import HostBadge from './HostBadge';
import LikeItBadge from './LikeItBadge';

const BadgeBox = () => {
  return (
    <BadgeBoxStyle>
      <HostBadge />
      <LikeItBadge />
    </BadgeBoxStyle>
  );
};

export default BadgeBox;

const BadgeBoxStyle = styled.div`
  padding: 8px;

  display: flex;
  justify-content: space-between;
`;
