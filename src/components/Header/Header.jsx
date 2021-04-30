import React from 'react';
import styles from './Header.module.css';

const Header =() => {
    return  <header className = {styles.header}>
    <img src={window.location.origin + '/img/logo.png'} />
    </header >
}
 export default Header;