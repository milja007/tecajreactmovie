import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";
import fire from "../../assets/fire.png";
import star from "../../assets/glowing-star.png";
import party from "../../assets/partying-face.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Moviemaniac</h1>
      <div className="navbar-links">
        <DarkMode />
        <a className="fire" href="#popular">
          Popular <img className="icon" src={fire} alt="fire" />
        </a>
        <a className="star" href="#top_rated">
          Top Rated <img className="icon" src={star} alt="star" />
        </a>
        <a className="party" href="#upcoming">
          Upcomming <img className="icon" src={party} alt="party" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
