import "./MovieCard.css";
import Star from "../../assets/Star.png";

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
    overview: string;
  };
  formatRating: (rating: number) => number;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, formatRating }) => {
  const { poster_path, title, release_date, vote_average, overview } = movie;
  return (
    <div className="movie_card">
      <a
        href={`https://www.themoviedb.org/movie/${movie.id}`}
        target="_blank"
        className="movie_card_image"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="Movie Poster"
          className="movie_poster"
        />
        <div className="movie_details">
          <h3 className="movie_details_heading">{title}</h3>
          <div className="align_center movie_date_rate   ">
            <p>{release_date}</p>
            <p>
              {formatRating(vote_average)}{" "}
              <img src={Star} alt="rating icon" className="card_emoji" />
            </p>
          </div>
          <p className="movie_description">
            {overview?.slice(0, 100) + "..." || "No description available"}
          </p>
        </div>
      </a>
    </div>
  );
};

export default MovieCard;
