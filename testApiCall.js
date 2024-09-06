require('dotenv').config()
const axios = require("axios");

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.TMDB_API_KEY
  }
});

const fetchTrendingMovies = () => {
  return api.get('/trending/movie/day');
};

// Test the API call
fetchTrendingMovies()
  .then(response => {
    console.log('Trending Movies:', response.data.results);
  })
  .catch(error => {
    console.error('Error:', error);
  });
