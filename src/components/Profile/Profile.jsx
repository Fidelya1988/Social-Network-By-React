import React from "react";
import MyPosts from "./MyPosts/MyPosts";

import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo
        profileInfo={props.profileInfo}
        setCurrentProfilePhoto={props.setCurrentProfilePhoto}
        isProfilePhotoSmall={props.isProfilePhotoSmall}
        toggleProfilePhoto={props.toggleProfilePhoto}
        status={props.status}
        updateStatus={props.updateStatus}
      />

      <MyPosts />
    </div>
  );
};
export default Profile;
