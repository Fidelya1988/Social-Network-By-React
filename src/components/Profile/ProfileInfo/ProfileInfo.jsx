import React from 'react';

import styles from './ProfileInfo.module.css';



const ProfileInfo = (props) => {
  return (
     <div className = {styles.ProfileInfo}>
    <img src={window.location.origin + '/img/background.jpg'} alt="background" width = "100%"/>
    
  <div className={styles.description}>
      avatar + description
  </div>
    
  
  </div>
  )
}
export default ProfileInfo;