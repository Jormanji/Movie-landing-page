import React from "react";

export default function MovieCard({ movie }) {
  const releaseDate = new Date(movie.release_date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

    return (
      <div className="movie-card">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title} 
          className="movie-card__image"
        />
        <div className="movie-card__details">
          <h3 className="movie-card__title">{movie.title}</h3>
          <p className="movie-card__rating">
          <span className="star-icon">★</span>
            {movie.vote_average.toFixed(2)}</p>
          <p className="movie-card__release-date">Release Date: {releaseDate}</p>
        </div>
      </div>
    );
  }