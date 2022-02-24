import React from "react";
import "./places.css";

export const Places = ({ selected, refProp, place }) => {
  {
    selected &&
      refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="places-container">
      <div className="places-media">
        <img
          className="img"
          src={
            place.photo
              ? place.photo.images.medium.url
              : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
          }
          alt="img"
        />
      </div>
      <div className="places-info">
        <div className="place-name">{place.name}</div>
        <div className="name-info">
          <div>Rating: {Number(place.rating)}/5</div>
          <div>
            {place.num_reviews} review{place.num_reviews > 1 && "s"}
          </div>
        </div>
        <div className="ranking">
          <p>Ranking</p>
          <p>{place.ranking}</p>
        </div>
        {place.address && (
          <div className="addr">
            {" "}
            <span>Address</span> <>{place.address}</>{" "}
          </div>
        )}
      </div>
      <div className="places-contact">
        <button onClick={() => window.open(place.web_url, "_blank")}>
          Trip Advisor
        </button>
        <button onClick={() => window.open(place.website, "_blank")}>
          Website
        </button>
      </div>
    </div>
  );
};
