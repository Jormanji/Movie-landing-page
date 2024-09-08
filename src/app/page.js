import styles from "./page.module.css";
import Header from "./Header";
import Footer from "./Footer";
import TrendingMovies from "./TrendingMovies";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import MoviesInCinema from "./MoviesInCinema";

export default function Home() {
  return (
    <div>
    <Header />


     <div className="section-container">
        <h2 className="section-heading">Trending Movies</h2>
        <div className="movies-list">
          <TrendingMovies />
        </div>
      </div>




      <div className="section-container">
        <h2 className="section-heading">Popular Movies</h2>
        <div className="movies-list">
          <PopularMovies />
        </div>
      </div>



      <div className="section-container">
        <h2 className="section-heading">Top Rated Movies</h2>
        <div className="movies-list">
          <TopRatedMovies />
        </div>
      </div>




      <div className="section-container">
        <h2 className="section-heading">Movies Still in Cinema</h2>
        <div className="movies-list">
          <MoviesInCinema />
        </div>
      </div>
      
    <Footer />
    </div>
  );
}
