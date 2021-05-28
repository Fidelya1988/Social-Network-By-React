import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { profileAPI } from '../../api';

const Header = (props) => {
    return <header className={styles.header}>
        <img src={window.location.origin + '/img/logo.png'} />
        {props.isAuth
            ? <span onClick={() => props.getProfileData(props.id)}>
                <NavLink to={'/profile/' + props.id}>{props.login}</NavLink>
            </span>
            : <NavLink to='/login'>Login</NavLink>}


    </header >
}
export default Header;