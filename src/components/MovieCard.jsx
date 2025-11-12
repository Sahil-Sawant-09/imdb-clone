import React from "react";
import "./MovieCard.css";

const MovieCard = ({ title, year, rating, poster }) => {
  return (
    <div className="movie-card">
      <div className="poster-wrap">
        <img src={poster} alt={title} className="poster" />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">Released: {year}</p>
        <p className="movie-rating">⭐ {rating}/10</p>
      </div>
    </div>
  );
};

export default MovieCard;
