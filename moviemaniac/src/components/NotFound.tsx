import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Stranica nije pronađena</h2>
        <p>Stranica koju tražite ne postoji ili je premještena.</p>
        <Link to="/" className="back-home">
          Povratak na početnu
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
