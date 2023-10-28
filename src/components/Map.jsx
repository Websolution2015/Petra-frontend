import React from "react";
import GoogleMapReact from 'google-map-react';

const Maps = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 41.378979,
      lng: -81.449677
    },
    zoom: 13
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%',}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDy-iYk9xgGFrp7bpBEa8KDGZbX8MuXsrE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Maps
          lat={41.378979}
          lng={-81.449677}
          text="Petra Power"
        />
      </GoogleMapReact>
    </div>
  );
}