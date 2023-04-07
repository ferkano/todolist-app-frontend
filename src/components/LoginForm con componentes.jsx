import React, { useState } from "react";
import "./LoginForm.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";

const LoginForm = ({ handleLogin }) => {
  const [formularioSend, setFormularioSend] = useState(false);

  return (
    <div className="form-container">
      <Formik
        validateOnChange={false}
        initialValues={{
          username: "",
          password: "",
        }}
        validate={(valores) => {
          let errores = {};

          //validation username
          if (!valores.username) {
            errores.username = "Por favor ingresa un nombre";
          }
          // } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.username)) {
          //   errores.username = "El nombre solo puede tener letras y espacios ";
          // }

          //validation password
          if (!valores.password) {
            errores.password = "Por favor ingresa password";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          handleLogin(valores.username, valores.password);
          console.log("formulario enviado");
        }}
      >
        {({ errors, handleChange, handleBlur, values }) => (
          <Form>
            {console.log(errors)}
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
              <ErrorMessage
                name="username"
                component={() => <div>{errors.username}</div>}
              />
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
              <ErrorMessage
                name="password"
                component={() => <div>{errors.password}</div>}
              />
            </div>
            <div className="container-button">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            {formularioSend && <p>Formulario enviado con exito!</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
