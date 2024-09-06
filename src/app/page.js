import styles from "./page.module.css";
import Header from "./Header";
import Footer from "./Footer";
import TrendingMovies from "./TrendingMovies";

export default function Home() {
  return (
    <div>
    <Header />
    <TrendingMovies />
    <Footer />
    </div>
  );
}
