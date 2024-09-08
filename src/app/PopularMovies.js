"use client"
import React from "react";
import { useEffect, useState } from "react";
import { fetchPopularMovies } from "./MovieRequests";
import MovieCard from "./MovieCard";

export default function PopularMovies () {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetchPopularMovies()
        .then((response) => {
            const firstFiveMovies = response.data.results.slice(0, 5);
            setMovies(firstFiveMovies)
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