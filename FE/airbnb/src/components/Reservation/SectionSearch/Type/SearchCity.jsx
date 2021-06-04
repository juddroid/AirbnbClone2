import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { citySectionState } from '../../../../Recoil/ReservationState';
// import TypeContent from './TypeContent';
import TypeContentCity from './TypeContentCity';
import TypeHeader from './TypeHeader';

const SearchCity = ({ search }) => {
  const [citySection, setCitySection] = useRecoilState(citySectionState);

  useEffect(() => {
    setCitySection(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!citySection) return null;
  return (
    <div>
      <TypeHeader {...{ search }} />
      <TypeContentCity />
    </div>
  );
};

export default SearchCity;
