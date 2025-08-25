import { useParams } from "react-router-dom";

const movie = () => {
  const { movieId } = useParams();

  return (
    <div>
      <h1>Movie {movieId}</h1>
    </div>
  );
};

export default movie;
