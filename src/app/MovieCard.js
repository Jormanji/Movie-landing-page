import React from "react";

export default function MovieCard({ movie }) {
    return (
      <div className="movie-card">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title} 
          className="movie-card__image"
        />
        <div className="movie-card__details">
          <h3 className="movie-card__title">{movie.title}</h3>
          <p className="movie-card__rating">Rating: {movie.vote_average}</p>
          <p className="movie-card__release-date">Release Date: {movie.release_date}</p>
        </div>
      </div>
    );
  }