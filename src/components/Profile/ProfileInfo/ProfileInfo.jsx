import Preloader from "../../commons/Preloader.jsx/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfilePhoto from "./ProfilePhoto";
import ProfileStatusHooks from "./ProfileStatusHooks";

const Contacts = ({ contacts }) => {
  const contactsArray = Object.entries(contacts);

  const contactsList = contactsArray.map(([key, url]) => {
    if (url) {
      return (
        <div key={key} className={styles.contacts}>
          {" "}
          <span>{key}: </span> {url}
        </div>
      );
    }
  });

  return (
    <div>
      <h3>Contacts:</h3>
      {contactsList}
    </div>
  );
};

const ProfileInfo = ({ profileInfo, status, updateStatus }) => {
  if (!profileInfo) {
    return <Preloader />;
  }

  const {
    contacts,
    photos,
    fullName,
    aboutMe,
    lookingForAJob,
    lookingForAJobDescription,
  } = profileInfo;

  return (
    <div className={styles.profileInfo}>
      <ProfilePhoto smallPhoto={photos.small} largePhoto={photos.large} />

      <ProfileStatusHooks status={status} updateStatus={updateStatus} />
     
      <div className={styles.name}>
        <h1>{fullName}</h1>
        <div className={styles.aboutMe}>{aboutMe}</div>
      </div>

      <div className={styles.job}>
        <span>Looking for a Job:</span>
        {lookingForAJob ? <> Yes </> : <> No </>}

        {lookingForAJobDescription ? (
          <span className={styles.jobDescription}>
            {lookingForAJobDescription}
          </span>
        ) : null}
      </div>
      <div className={styles.contacts}>
        <Contacts contacts={contacts} />
      </div>
    </div>
  );
};
export default ProfileInfo;
