"use client"
import React from "react";
import { useEffect, useState } from "react";
import { fetchMoviesInCinema } from "./MovieRequests";
import MovieCard from "./MovieCard";

export default function MoviesInCinema () {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetchMoviesInCinema()
        .then((response) => {
            setMovies(response.data.results)
            setLoading(false)
        })
        .catch((error) => {
            console.log('Error fetching popular movies', error)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className="movies-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
    )
}