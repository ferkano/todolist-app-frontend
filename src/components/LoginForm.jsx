import React, { useState } from "react";
import "./LoginForm.scss";
import { Formik } from "formik";

const LoginForm = ({ handleLogin }) => {
  return (
    <div className="form-container">
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validateOnChange={false}
        validate={(valores) => {
          let errores = {};

          //validation username
          if (!valores.username) {
            errores.username = "Please enter username";
          }
          // } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.username)) {
          //   errores.username = "El nombre solo puede tener letras y espacios ";
          // }

          //validation password
          if (!valores.password) {
            errores.password = "Please enter password";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          handleLogin(valores.username, valores.password);
          console.log("formulario enviado");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                name="username"
                className="form-control"
                type="text"
                placeholder="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {touched.username && errors.username && (
                <div className="alert alert-danger">{errors.username}</div>
              )}
            </div>
            <div class="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                name="password"
                className="form-control"
                type="password"
                placeholder="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {touched.password && errors.password && (
                <div className="alert alert-danger">{errors.password}</div>
              )}
            </div>
            <div className="container-button">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
