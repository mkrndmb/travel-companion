import "./styles.css";
import React, { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";
import { Map } from "./components/Map/Map";
// import {Places} from './Places'
import { getPlaces } from "./api/index";

export default function App() {
  const [places, setPlaces] = useState([]);
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});
  const [child, setChild] = useState(null);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [autocomplete, setAutocomplete] = useState(null);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filtered = places?.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {
    console.log("child", child);
    console.log(coords, bounds);
    getPlaces(type, bounds.sw, bounds.ne).then((data) => {
      console.log("dat", data);
      setPlaces(data);
    });
  }, [type]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };

  return (
    <div className="App">
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
      <div className="content">
        <Map
          places={places}
          setCoords={setCoords}
          setBounds={setBounds}
          coords={coords}
          setChild={setChild}
        />
        <List
          places={places}
          child={child}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
          places={filteredPlaces?.length ? filteredPlaces : places}
        />
      </div>
    </div>
  );
}
