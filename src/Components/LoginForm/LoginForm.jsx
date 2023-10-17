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
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.title}>LOG IN</h2>
            <div className={styles.input__form}>
              <label className={styles.label}>
                Log In*
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </label>

              {errors.email && touched.email && errors.email}
            </div>
            <div className={styles.input__form}>
              <label className={styles.label}>
                Password*
                <input
                  className={styles.input}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </label>

              {errors.password && touched.password && errors.password}
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.btn__login}
                type="submit"
                disabled={isSubmitting}
              >
                Log In
              </button>
              <button
                className={styles.btn__registration}
                type="submit"
                disabled={isSubmitting}
              >
                Registralion
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
