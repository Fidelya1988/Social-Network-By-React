import React from 'react';
import Preloader from '../../commons/Preloader.jsx/Preloader';

import styles from './ProfileInfo.module.css';



const ProfileInfo = (props) => {

  if (!props.profileInfo) {
    return <Preloader />
  }
  const profileInfo = props.profileInfo;
  const contacts = props.profileInfo.contacts;
  return (
    <div className={styles.profileInfo}>
      <div className={styles.backImg}><img src= 'https://icapps-website-2020.s3.amazonaws.com/site/what-is-the-right-background-for-a-react-native-developer/_800x418_crop_center-center_82_none/React_Native_image.jpg' alt="background"  /></div>

  
       
        <div className={styles.photo}><img src={profileInfo.photos.small} alt='user-photo' /></div>
        <div className={styles.name}><h1>{profileInfo.fullName}</h1></div>
        <div className={styles.aboutMe}>{profileInfo.aboutMe}</div>
       <div className={styles.job}><span>Job:</span> {profileInfo.lookingForAJobDescription}</div>
        <div className={styles.contacts}>
          <h3>Contacts:</h3>
          <ul>
            <li><span>Facebook: </span>{contacts.facebook}</li>
            <li><span>Website: </span>{contacts.website}</li>
            <li><span>Vkontakte:</span> {contacts.vk}</li>
            <li><span>Twitter:</span> {contacts.twitter}</li>
            <li><span>Instagrame:</span> {contacts.instagram}</li>
            <li><span>YouTube:</span> {contacts.youtube}</li>
            <li><span>Git Hub:</span>{contacts.github}</li>
            <li><span>Main Link:</span> {contacts.mainLink}</li>
          </ul>
        </div>
      


    </div>
  )
}
export default ProfileInfo;