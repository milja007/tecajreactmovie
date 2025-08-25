import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";
import fire from "../../assets/fire.png";
import star from "../../assets/glowing-star.png";
import party from "../../assets/partying-face.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Moviemaniac</h1>
      <div className="navbar-Navs">
        <DarkMode />
        <NavLink className="fire" to="/">
          Popular <img className="icon" src={fire} alt="fire" />
        </NavLink>
        <NavLink className="star" to="/top-rated">
          Top Rated <img className="icon" src={star} alt="star" />
        </NavLink>
        <NavLink className="party" to="/upcoming">
          Upcomming <img className="icon" src={party} alt="party" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
