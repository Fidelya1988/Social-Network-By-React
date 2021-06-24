import { useState } from "react";
import styles from "./ProfileInfo.module.css";
import defaultUserPhoto from "../../../assets/images/default-user.png";

const ProfilePhoto = ({ smallPhoto, largePhoto }) => {
  const [isPhotoSmall, setPhotoSizeState] = useState(true);
  const handleClick = () => {
    isPhotoSmall ? setPhotoSizeState(false) : setPhotoSizeState(true);
  };
  const isPhotoPresent = smallPhoto;

  return (
    <div className={styles.photo} onClick={handleClick}>
      {isPhotoPresent ? (
        isPhotoSmall ? (
          <img
            className={styles.smallPhoto}
            src={smallPhoto}
            alt="small-photo"
          />
        ) : (
          <img
            className={styles.largePhoto}
            src={largePhoto}
            alt="large-photo"
          />
        )
      ) : (
        <img
          className={styles.smallPhoto}
          src={defaultUserPhoto}
          alt="small-photo"
        />
      )}
    </div>
  );
};

export default ProfilePhoto;
