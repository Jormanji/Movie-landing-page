"use client"
import React from "react";
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "./MovieRequests";
import MovieCard from "./MovieCard";

export default function TrendingMovies () {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetchTrendingMovies()
        .then((response) => {
            setMovies(response.data.results)
            setLoading(false)
        })
        .catch((error) => {
            console.log('Error fetching trending movies', error)
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