import React, { useState } from "react";
import "./Navbar.scss";
import { useThemeContext } from "../context/ThemeContext";
import ReactSwitch from "react-switch";

const Navbar = ({
  handleLogout,
  sectionStarted,
  handleButtonLogin,
  handleButtonSignIn,
  handleHome,
}) => {
  const { contextTheme, setContextTheme } = useThemeContext();
  const [checked, setChecked] = useState(false);

  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === "Light" ? "Dark" : "Light"));
    setChecked(nextChecked);
  };
  return (
    <nav className={contextTheme === "Dark" ? "navbar navbarDark" : "navbar"}>
      <h2 onClick={handleHome}>To do list</h2>
      <div className="navbar__container-buttons">
        {!sectionStarted && (
          <div className="navbar__buttons">
            <ul className="navbar__buttons--ul">
              <li>
                <button
                  onClick={handleButtonLogin}
                  className="btn btn-secondary"
                >
                  Sign in
                </button>
              </li>
              <li>
                <button
                  onClick={handleButtonSignIn}
                  className="btn btn-primary"
                >
                  Sign up
                </button>
              </li>
            </ul>
          </div>
        )}
        {sectionStarted && (
          <div className="navbar__buttons">
            <ul className="navbar__buttons--ul">
              <li>
                <button onClick={handleLogout} className="btn btn-primary">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
        <div>
          <p>DarkMode</p>{" "}
          <ReactSwitch
            checked={checked}
            onChange={handleSwitch}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch btn-dark"
            id="material-switch"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
