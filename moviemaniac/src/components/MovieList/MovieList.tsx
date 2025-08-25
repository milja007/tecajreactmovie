// Prvo, importamo sve što nam treba
import React, { useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
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
const MovieList: React.FC<{ type: string; title: string; emoji: string }> = ({
  type,
  title,
  emoji,
}) => {
  // Primjer state-a s TypeScript tipom
  const [movies, setMovies] = useState<Movie[]>([]);
  const [minRating, setMinRating] = useState<number>(0);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [sort, setSort] = useState<{
    by: string;
    order: string;
  }>({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchMovies();
  }, [type]);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=833797ac379e7d2b90f4e7cd997b828d`
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
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  // Funkcija za formatiranje rating-a na 1 decimalu
  const formatRating = (rating: number): number => {
    return Math.round(rating * 10) / 10;
  };

  useEffect(() => {
    if (sort.by !== "default") {
      // Sortiraj filmove prema odabranom kriteriju
      const sortedMovies = _.orderBy(
        movies.filter((movie) => movie.vote_average >= minRating),
        [sort.by],
        [sort.order as "asc" | "desc"]
      );
      setFilteredMovies(sortedMovies);
    } else if (sort.by === "default") {
      // Vrati se na filtrirane filmove prema ratingu ili sve filmove
      if (minRating > 0) {
        const filteredMovieRating = movies.filter(
          (movie) => movie.vote_average >= minRating
        );
        setFilteredMovies(filteredMovieRating);
      } else {
        setFilteredMovies(movies);
      }
    }
  }, [sort, movies, minRating]);

  return (
    <section className="movie_list" id={type}>
      <header className="align_center movie_list_header ">
        <h2 className="align_center movie_list_heading ">
          {title} <img src={emoji} alt={`${emoji} icon`} className="icon" />
        </h2>

        <div className="align_center movie_list_content ">
          <FilteredGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />
          {/* Povezujemo select s state-om i handlerom */}
          <select
            name="by"
            id=""
            className="movie_sorting"
            onChange={handleSort}
            value={sort.by}
          >
            <option value="default">Default</option>
            <option value="release_date"> Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id=""
            className="movie_sorting"
            onChange={handleSort}
            value={sort.order}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} formatRating={formatRating} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
