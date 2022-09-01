import React from "react";

const TvShows = (props) => {
  return (
    <>
      {props.tvShows.map((tvShow, index) => (
        <div className="show-image-container">
          <img className="show-image" src={tvShow.Poster} alt="tvshow"></img>
        </div>
      ))}
    </>
  );
};

export default TvShows;
