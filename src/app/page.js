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
    <TrendingMovies />
    <PopularMovies />
    <TopRatedMovies />
    <MoviesInCinema />
    <Footer />
    </div>
  );
}
