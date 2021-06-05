import React from 'react';
import Preloader from '../../commons/Preloader.jsx/Preloader';
import styles from './ProfileInfo.module.css';
import defaultUserPhoto from '../../../assets/images/default-user.png'
import ProfileStatus from './ProfileStatus';
import {profileAPI} from '../../../api'


const Contacts = (props) => {

  const contactsArray = Object.entries(props.contacts)


  const contacts = contactsArray.map(([key, url]) => {

    if (url) {


      return <div key={key} className={styles.contacts}> <span>{key}: </span> {url}</div>
    }






  })






  return (

    <div>
      <h3>Contacts:</h3>
      {contacts}

    </div>
  )

}

const ProfileInfo = (props) => {

  if (!props.profileInfo) {
    return <Preloader />
  }

  const profileInfo = props.profileInfo;
  const contacts = props.profileInfo.contacts;

  const smallPhoto = profileInfo.photos.small;
  const largePhoto = profileInfo.photos.large;



  return (
    <div className={styles.profileInfo}>




      <div className={styles.photo} onClick={() => { props.setCurrentProfilePhoto(props.isProfilePhotoSmall); }}>
        {smallPhoto
          ? props.isProfilePhotoSmall
            ? <img className={styles.smallPhoto} src={smallPhoto} alt='small-photo' />
            : <img className={styles.largePhoto} src={largePhoto} alt='large-photo' />
          : <img className={styles.smallPhoto} src={defaultUserPhoto} alt='small-photo' />


        }

        <ProfileStatus status={props.status} updateStatus = {props.updateStatus}/>





      </div>

      <div className={styles.name}>
        <h1>{profileInfo.fullName}</h1>
        <div className={styles.aboutMe}>{profileInfo.aboutMe}</div>
      </div>



      <div className={styles.job}>
        <span>Looking for a Job:</span>
        {profileInfo.lookingForAJob
          ? <> Yes  </>
          : <> No </>}

        {profileInfo.lookingForAJobDescription
          ? <span className={styles.jobDescription}>{profileInfo.lookingForAJobDescription}</span> : null}

      </div>
      <div className={styles.contacts}>


        <Contacts contacts={contacts} />

      </div>



    </div>
  )
}
export default ProfileInfo;