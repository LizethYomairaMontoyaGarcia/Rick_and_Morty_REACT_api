import React, { useState, useContext} from "react";
import ThemeContext from "../context/ThemeContext";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

const color = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="Header">
      <h1 style={{color}}>Rick y Morty</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "Dark Mode" : "Light Mode"}{" "}
      </button>

      <button type="button" onClick={() => setDarkMode(!setDarkMode)}>
        {darkMode ? "Dark Mode 2" : "Light Mode"}{" "}
      </button>
    </div>
  );
}

export default Header;
