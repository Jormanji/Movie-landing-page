"use client"
import React from "react";
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "./MovieRequests";
import MovieCard from "./MovieCard";

export default function TrendingMovies () {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [timeWindow, setTimeWindow] = useState("day")


    useEffect(() => {
        fetchTrendingMovies(timeWindow)
        .then((response) => {
            const firstFiveMovies = response.data.results.slice(0, 5);
            setMovies(firstFiveMovies)
            setLoading(false)
        })
        .catch((error) => {
            console.log('Error fetching trending movies', error)
            setLoading(false)
        })
    }, [timeWindow])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
    <div>
        <div className="time-window-selector">
        <label htmlFor="time-window">Trending for: </label>
        <select
          id="time-window"
          value={timeWindow}
          onChange={(e) => setTimeWindow(e.target.value)}
        >
          <option value="day">Today</option>
          <option value="week">This Week</option>
        </select>
        </div>

        <div className="movies-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
    </div>
    )
}