import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';



const Header = (props) => {
    const login = props.login
    return <header className={styles.header}>
        <img src={window.location.origin + '/img/logo.png'} />
        {props.isAuth
            ? <span>
                {login}
                <button onClick={props.logOut}>Log Out</button>
            </span>
            : <NavLink to='/login'>Login</NavLink>}


    </header >
}

export default Header
