import styled from 'styled-components';
import GuestCount from './GuestCount';
import GuestWho from './GuestWho';

const GuestSection = ({ header, info, count, id }) => {
  return (
    <GuestSectionStyle>
      <GuestWho {...{ header, info }} />
      <GuestCount {...{ count, id }} />
    </GuestSectionStyle>
  );
};

export default GuestSection;

const GuestSectionStyle = styled.div`
  color: rgb(34, 34, 34);
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 330px;

  :not(:last-child) {
    border-bottom: 1px solid rgb(235, 235, 235);
  }
`;
