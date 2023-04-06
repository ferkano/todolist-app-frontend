import React from "react";
import "./Navbar.scss";

const Navbar = ({
  handleLogout,
  sectionStarted,
  handleButtonLogin,
  handleButtonSignIn,
}) => {
  return (
    <nav className="navbar">
      <h2>To do list</h2>
      {!sectionStarted && (
        <div className="navbar__buttons">
          <ul className="navbar__buttons--ul">
            <li>
              <button onClick={handleButtonLogin} className="btn btn-secondary">
                Sign in
              </button>
            </li>
            <li>
              <button onClick={handleButtonSignIn} className="btn btn-primary">
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
    </nav>
  );
};

export default Navbar;
