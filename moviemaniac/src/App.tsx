import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/navbar/Navbar";
import fire from "./assets/fire.png";
import star from "./assets/star.png";
import party from "./assets/partying-face.png";
import { Route, Routes } from "react-router-dom";
import Movie from "./components/movie";
import NotFound from "./components/NotFound";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<MovieList type="popular" title="Popular" emoji={fire} />}
          />
          <Route
            path="/top-rated"
            element={
              <MovieList type="top_rated" title="Top Rated" emoji={star} />
            }
          />
          <Route
            path="/upcoming"
            element={
              <MovieList type="upcoming" title="Upcoming" emoji={party} />
            }
          />
          <Route path="/movie/:movieId" element={<Movie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
