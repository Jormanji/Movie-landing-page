require('dotenv').config()
const axios = require("axios");

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.TMDB_API_KEY
  }
});

//Trending Movies API
const fetchTrendingMovies = () => {
  return api.get('/trending/movie/week');
};

//Popular Movies API
const fetchPopularMovies = () => {
  return api.get('/movie/popular')
}

//Top Rated Movies API
const fetchTopRatedMovies = () => {
  return api.get('/movie/top_rated')
}

//Currently Playing Movies API
const fetchCurrentlyPlayingMovies = () => {
  return api.get('/movie/now_playing')
}



// //Trending Movies API test
// fetchTrendingMovies()
//   .then(response => {
//     console.log('Trending Movies:', response.data.results);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


//Popular Movies API test
// fetchPopularMovies()
// .then(response => {
//       console.log('Popular Movies:', response.data.results);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });

//Top Rated Movies API test
// fetchTopRatedMovies()
// .then(response => {
//       console.log('Trending Movies:', response.data.results);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });

//Currently Playing Movies API test
// fetchCurrentlyPlayingMovies()
// .then(response => {
//         console.log('Trending Movies:', response.data.results);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });