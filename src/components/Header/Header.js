import React from "react";
import "./header.css";
// import { Autocomplete } from "@react-google-maps/api";

export const Header = ({ onPlaceChanged, onLoad }) => {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <div className="explore">
        <div className="explore-item">Explore here</div>
        {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
        <input type="text" />
        {/* </Autocomplete> */}
      </div>
    </div>
  );
};
