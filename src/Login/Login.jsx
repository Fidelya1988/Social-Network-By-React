import React from "react";
import LoginForm from "./Form";
import { login } from "../redux/authReducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
const LoginPage = (props) => {
  return (
    <div>
      {props.isAuth ? (
        <Redirect to={"/profile/" + props.id} />
      ) : (
        <LoginForm login={props.login} serverErrors={props.serverErrors} />
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    id: state.auth.id,
    serverErrors: state.auth.error,
  };
};
export default connect(mapStateToProps, { login })(LoginPage);
