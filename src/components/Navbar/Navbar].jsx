import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsContainer from './Friends/FriendsContainer';
import styles from './Navbar.module.css';







  
  const Navbar = (props) => {
    return <nav className={styles.nav}>
      <div className={styles.links}>
        <div className={styles.item}>
          <NavLink to="/profile" activeClassName = {styles.activeLink}>Profile</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/dialogs" activeClassName = {styles.activeLink}>Messages</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/news" activeClassName = {styles.activeLink}>News</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/music" activeClassName = {styles.activeLink}>Music</NavLink>
        </div>
        <div className={`${styles.item} ${styles.active}`}>
          <NavLink to="/settings" activeClassName = {styles.activeLink}>Settings</NavLink>
        </div>
      </div>
  
  
    
    
  
     <FriendsContainer/>
    
  
  
    </nav>

}
export default Navbar;