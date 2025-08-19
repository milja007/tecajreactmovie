// Prvo, importamo sve što nam treba
import React, { useEffect, useState } from "react";
import "./MovieList.css";
import fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";
import FilteredGroup from "./FilteredGroup";

// Definiramo tip za jedan film (ovo je primjer)
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
}

// Kažemo da je MovieList funkcionalna komponenta
const MovieList: React.FC = () => {
  // Primjer state-a s TypeScript tipom
  const [movies, setMovies] = useState<Movie[]>([]);
  const [minRating, setMinRating] = useState<number>(0);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  const [sortBy, setSortBy] = useState<string>("date");
  useEffect(() => {
    fetchMovies();
  }, []);
  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=833797ac379e7d2b90f4e7cd997b828d"
    );
    const data = await response.json();
    setMovies(data.results);
    setFilteredMovies(data.results);
  };
  const handleFilter = (rate: number) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilteredMovies(movies);
    }
    if (rate !== minRating) {
      setMinRating(rate);
      const filteredMovieRating = movies.filter(
        (movie) => movie.vote_average >= rate
      );
      setFilteredMovies(filteredMovieRating);
    }
  };
  // Primjer event handlera s tipiziranim eventom
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  return (
    <section className="movie_list">
      <header className="align_center movie_list_header ">
        <h2 className="align_center movie_list_heading ">
          Popular <img src={fire} alt="fire" className="icon" />
        </h2>

        <div className="align_center movie_list_content ">
          <FilteredGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />
          {/* Povezujemo select s state-om i handlerom */}
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="movie_sorting"
          >
            <option value="date">Date</option>
            <option value="rating">Rating</option>
          </select>
          <select name="" id="" className="movie_sorting">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
