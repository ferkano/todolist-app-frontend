import React from "react";

const Navbar = ({ login, singIng, handleButtonLogin, handleButtonSignIn }) => {
  return (
    <nav>
      <h2>To do list</h2>
      <ul>
        <li>
          <button onClick={handleButtonSignIn}>Sign in</button>
        </li>
        <li>
          <button onClick={handleButtonLogin}>Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
