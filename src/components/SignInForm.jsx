import React from "react";
import "./SingInForm.scss";
import { Formik } from "formik";

const SignInForm = ({ handleSingIn }) => {
  return (
    <div className="form-container">
      <Formik
        initialValues={{ username: "", name: "", lastname: "", password: "" }}
        validateOnChange={false}
        validate={(valores) => {
          let errores = {};

          if (!valores.username) {
            errores.username = "Please enter username";
          }
          if (!valores.name) {
            errores.name = "Please enter name";
          } else if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(valores.name)) {
            errores.name = "Only accept letters without white space";
          }
          if (!valores.lastname) {
            errores.lastname = "Please enter lastname";
          } else if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(valores.name)) {
            errores.lastname = "Only accept letters without white space";
          }
          if (!valores.password) {
            errores.password = "Please enter password";
          } else if (
            !/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/.test(
              valores.password
            )
          ) {
            errores.password =
              "La contraseña debe tener al menos una letra mayúscula, un número, un símbolo y 8 dígitos.";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          handleSingIn(
            valores.username,
            valores.name,
            valores.lastname,
            valores.password
          );

          console.log("formualrio enviado");
        }}
      >
        {({
          errors,
          values,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="username" className="form-label">
                Username
              </label>
              <input
                name="username"
                className="form-control"
                type="text"
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.username && errors.username && (
                <div className="alert alert-danger">{errors.username}</div>
              )}
            </div>
            <div className="mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                name="name"
                className="form-control"
                type="text"
                placeholder="Name"
              />
              {touched.name && errors.name && (
                <div className="alert alert-danger">{errors.name}</div>
              )}
            </div>
            <div className="mb-3">
              <label for="lastname" className="form-label">
                Lastname
              </label>
              <input
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                name="lastname"
                className="form-control"
                type="text"
                placeholder="Lastname"
              />
              {touched.lastname && errors.lastname && (
                <div className="alert alert-danger">{errors.lastname}</div>
              )}
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                className="form-control"
                name="password"
                type="password"
                placeholder="Password"
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
                Sign in
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignInForm;
