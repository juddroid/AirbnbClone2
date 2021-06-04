import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import dotenv from 'dotenv';
import { useRecoilState } from 'recoil';
import { markerState } from '../../../Recoil/MapState';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const GoogleMap = ({ google }) => {
  const [marker, setMarker] = useRecoilState(markerState);

  const mapStyles = {
    width: `100%`,
    height: `94%`,
  };

  // const handleClickAddMarkers = async (e, aug, geoData) => {
  //   const latLng = {
  //     latitude: geoData.latLng.lat(),
  //     longitude: geoData.latLng.lng(),
  //     title: 'new',
  //   };

  //   await setMarker([...marker, latLng]);
  // };

  const displayMarkers = () => {
    console.log(marker);
    return marker.map((mark, idx) => {
      return (
        <Marker
          key={uuidv4()}
          id={idx}
          position={{ lat: mark.latitude, lng: mark.longitude }}
          // onClick={() => removeMarkers(idx)}
          animation={google.maps.Animation.DROP}
          name={'name'}
          icon={{ path: google.maps.SymbolPath.CIRCLE, scale: 0 }}
        ></Marker>
      );
    });
  };

  const displayWindows = () => {
    return marker.map((mark, idx) => {
      return (
        <InfoWindow
          google={google}
          visible={true}
          position={{ lat: mark.latitude, lng: mark.longitude }}
          key={uuidv4()}
        >
          <PriceBackground>{mark.title}</PriceBackground>
        </InfoWindow>
      );
    });
  };

  return (
    <div>
      <>
        <Map
          google={google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: 37.490810646466926, lng: 127.03341904961496 }}
          // onClick={handleClickAddMarkers}
          disableDefaultUI={true}
          fullscreenControl={true}
          zoomControl={true}
          scaleControl={false}
          mapTypeControl={true}
          gestureHandling={'greedy'}
        >
          {displayMarkers()}
          {displayWindows()}
        </Map>
      </>
    </div>
  );
};

dotenv.config();
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(GoogleMap);

const PriceBackground = styled.div`
  width: 60px;
  height: 15px;
  background: #fff;
  padding: 0;
  display: center;
  justify-content: center;
  align-items: center;
  color: #222;
`;
