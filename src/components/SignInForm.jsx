import React from "react";

const SignInForm = ({
  userName,
  password,
  name,
  lastname,
  handleUsernameChange,
  handlePasswordChange,
  handleNameChange,
  handleLastnameChange,
  handleSingIn,
}) => {
  return (
    <div>
      <form onSubmit={handleSingIn}>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={handleUsernameChange}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Lastname"
          onChange={handleLastnameChange}
          value={lastname}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
