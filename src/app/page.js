import styles from "./page.module.css";
import Header from "./Header";
import Footer from "./Footer";
import TrendingMovies from "./TrendingMovies";
import PopularMovies from "./PopularMovies";

export default function Home() {
  return (
    <div>
    <Header />
    <TrendingMovies />
    <PopularMovies />
    <Footer />
    </div>
  );
}
