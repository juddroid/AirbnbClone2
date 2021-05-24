import styled from 'styled-components';
import SectionMap from './SectionMap/SectionMap';
import SectionSearch from './SectionSearch/SectionSearch';

const Reservation = () => {
  return (
    <ReservationStyle>
      <SectionSearch />
      <SectionMap />
    </ReservationStyle>
  );
};

export default Reservation;

const ReservationStyle = styled.div`
  inset: 105px 0px 0px;
  padding-bottom: 56px;
  padding-top: 80px;

  @media (min-width: 1128px) {
    padding-bottom: 0px;
  }
  ::before {
    content: ' ';
    display: table;
  }

  ::after {
    content: ' ';
    display: table;
    clear: both;
  }
`;
