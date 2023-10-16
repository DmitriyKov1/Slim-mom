import React from "react";
import { Formik } from "formik";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={styles.loginform}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <h2>LOG IN</h2>
            <label>
              Log In*
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </label>

            {errors.email && touched.email && errors.email}
            <label>
              Password*
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </label>

            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Log In
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
