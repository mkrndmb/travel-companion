import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";

export const Map = ({ places, setCoords, setBounds, coords, setChild }) => {
  const coord = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div className="map" style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.KEY
        }}
        defaultCenter={coord.center}
        defaultZoom={coord.zoom}
        margin={""}
        options={""}
        onChange={(e) => {
          console.log(e);
          setCoords({
            lat: e.center.lat,
            lng: e.center.lng
          });
          setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne });
        }}
        onChildClick={(child) => setChild(child)}
      >
        {places?.map((place, i) => {
          return (
            <div
              className="map-div"
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              <div className="map-pic">
                <p>{place.name}</p>
                <img
                  className="map-img"
                  src={place.photo ? place.photo.images.small.url : ""}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
};
