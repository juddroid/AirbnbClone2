import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import dotenv from 'dotenv';

const GoogleMap = ({ google }) => {
  const mapStyles = {
    width: `100%`,
    height: `100%`,
  };

  return (
    <div>
      <Map
        google={google}
        zoom={10}
        style={mapStyles}
        initialCenter={{ lat: 37.5, lng: 127 }}
      ></Map>
    </div>
  );
};

dotenv.config();
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(GoogleMap);
