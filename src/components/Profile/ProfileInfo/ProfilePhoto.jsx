import React from "react";

import styles from "./ProfileInfo.module.css";
import defaultUserPhoto from "../../../assets/images/default-user.png";

class ProfilePhoto extends React.Component {
  state = {
    isPhotoSmall: true,
  };

  setCurrentProfilePhoto = () => {
    this.state.isPhotoSmall
      ? this.setState({ isPhotoSmall: false })
      : this.setState({ isPhotoSmall: true });
  };

  render() {
    const isPhotoPresent = this.props.smallPhoto;
    return (
      <div className={styles.photo} onClick={this.setCurrentProfilePhoto}>
        {isPhotoPresent ? (
          this.state.isPhotoSmall ? (
            <img
              className={styles.smallPhoto}
              src={this.props.smallPhoto}
              alt="small-photo"
            />
          ) : (
            <img
              className={styles.largePhoto}
              src={this.props.largePhoto}
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
  }
}

export default ProfilePhoto;
