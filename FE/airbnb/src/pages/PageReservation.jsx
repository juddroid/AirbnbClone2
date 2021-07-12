import Reservation from '../components/Reservation/Reservation';

const PageReservation = ({ location, history, match }) => {
  return <Reservation {...{ location, history, match }} />;
};

export default PageReservation;
