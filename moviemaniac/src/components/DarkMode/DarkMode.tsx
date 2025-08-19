import "./DarkMode.css";
import Sun from "../../assets/sun.svg";
import Moon from "../../assets/moon.svg";

const DarkMode = () => {
  const setDarkTheme = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  };
  const setLightTheme = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  };
  const selectedTheme = localStorage.getItem("theme");
  if (selectedTheme === "light") setLightTheme();
  if (selectedTheme !== "light") setDarkTheme();

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) setDarkTheme();
    else setLightTheme();
  };
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme !== "light"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img src={Sun} alt="Sun" className="dark_mode_icon sun_icon" />
        <img src={Moon} alt="Moon" className="dark_mode_icon moon_icon" />
      </label>
    </div>
  );
};

export default DarkMode;
