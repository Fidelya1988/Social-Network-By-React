import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import MainButton from "../commons/Buttons";
const Header = (props) => {
  const login = props.login;
  return (
    <header className={styles.header}>
      <img src={window.location.origin + "/img/logo.png"} />
      {props.isAuth ? (
        <span className={styles.login}>
          {login}
          <MainButton value="Log Out" onClick={props.logOut} />
        </span>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </header>
  );
};

export default Header;
