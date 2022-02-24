import React, { useEffect, useState, createRef, useRef } from "react";
import "./list.css";
import { Places } from "../Places/Places";

export const List = ({ places, child, type, setType, rating, setRating }) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <div className="list">
      <div className="filters">
        <div className="filter">
          <label>Type :</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Restaurants">Restaurants</option>
            <option value="Hotels">Hotels</option>
            <option value="Attractions">Attractions</option>
          </select>
        </div>
        <div className="filter">
          <label>Rating:</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">All</option>
            <option value="3">Above 3.0</option>
            <option value="4">Above 4.0</option>
            <option value="4.5">Above 4.5</option>
          </select>
        </div>
      </div>
      <div className="list-items">
        {places?.map((place, i) => {
          return (
            <div ref={elRefs[i]} className="item" key={i}>
              <Places
                selected={Number(child) === i}
                refProp={elRefs[i]}
                place={place}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
