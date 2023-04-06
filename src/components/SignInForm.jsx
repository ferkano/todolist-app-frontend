import React from "react";
import "./SingInForm.scss";

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
    <div className="form-container">
      <form onSubmit={handleSingIn}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            value={userName}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Lastname
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Lastname"
            onChange={handleLastnameChange}
            value={lastname}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
          />
        </div>

        <div className="container-button">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
