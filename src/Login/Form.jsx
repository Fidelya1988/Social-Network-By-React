import { Formik, Form, ErrorMessage, Field } from "formik";
import { Redirect } from "react-router-dom";
import MainButton from "../components/commons/Buttons";
import styles from "./login.module.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
    
    },
  },
}));

const LoginForm = (props) => {
  const classes =useStyles()
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        rememberMe: false,
      }}
      validate={validate}
      onSubmit={(values) => {
        // alert(JSON.stringify(values, null, 2));
        props.login(values.email, values.password, values.rememberMe);
        if (props.isAuth) <Redirect to="/profile" />;
      }}
    >
      {({ errors, touched, handleChange }) => (
        <Form className={classes.root}>
   
          <div className={styles.inputItem}>
            <TextField
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              error={props.touched && Boolean(props.errors.email)}
              onChange={handleChange}
              label="Email" variant="outlined"
            />
            <div className={styles.errors}>
              <ErrorMessage name="email" />
            </div>
          </div>
          <div className={styles.inputItem}>
            <TextField
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              error={props.touched && Boolean(props.errors.password)}
              onChange={handleChange}
            />
            <div className={styles.errors}>
              <ErrorMessage name="password" />
            </div>
          </div>
          {props.serverErrors && (
            <div className={styles.errors}>{props.serverErrors}</div>
          )}
          <div>
            <label htmlFor="rememberMe">Remember me: </label>
            <TextField
              className={styles.checkbox}
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              onChange={handleChange}
            />
          </div>
          <MainButton type="submit" value="Login" />
          {/* <button type='submit'>Login</button> */}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
