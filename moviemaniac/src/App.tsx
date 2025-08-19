import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/navbar/Navbar";
import fire from "./assets/fire.png";
import star from "./assets/star.png";
import party from "./assets/partying-face.png";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <MovieList type="popular" title="Popular" emoji={fire} />
        <MovieList type="top_rated" title="Top Rated" emoji={star} />
        <MovieList type="upcoming" title="Upcoming" emoji={party} />
      </main>
    </div>
  );
};

export default App;
