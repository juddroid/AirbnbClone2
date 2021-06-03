import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import dotenv from 'dotenv';
import { useRecoilState } from 'recoil';
import { markerState } from '../../../Recoil/MapState';
import { v4 as uuidv4 } from 'uuid';

const GoogleMap = ({ google }) => {
  const [marker, setMarker] = useRecoilState(markerState);

  const mapStyles = {
    width: `100%`,
    height: `94%`,
  };

  const handleClickAddMarkers = async (e, aug, geoData) => {
    const latLng = {
      latitude: geoData.latLng.lat(),
      longitude: geoData.latLng.lng(),
    };

    await setMarker([...marker, latLng]);
  };

  const displayMarkers = () => {
    return marker.map((mark, idx) => {
      return (
        <Marker
          key={uuidv4()}
          id={idx}
          label={mark.title}
          position={{ lat: mark.latitude, lng: mark.longitude }}
          onClick={() => removeMarkers(idx)}
        />
      );
    });
  };

  const removeMarkers = async (idx) => {
    await setMarker(marker.filter((mark, i) => i !== idx));
  };

  return (
    <div>
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 37.5, lng: 127 }}
        onClick={handleClickAddMarkers}
        disableDefaultUI={true}
        fullscreenControl={true}
        zoomControl={true}
        scaleControl={false}
        mapTypeControl={true}
        gestureHandling={'greedy'}
      >
        {displayMarkers()}
      </Map>
    </div>
  );
};

dotenv.config();
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(GoogleMap);
