import styles from "./page.module.css";
import Header from "./Header";
import Footer from "./Footer";
import CategoryDisplay from "./CategoryDisplay";

export default function Home() {
  return (
    <div>
    <Header />
    <CategoryDisplay />
    <Footer />
    </div>
  );
}
