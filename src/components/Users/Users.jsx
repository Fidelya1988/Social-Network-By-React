import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, getUsersTC } from "../../redux/usersReducer";
import Preloader from "../commons/Preloader.jsx/Preloader";
import {
  getFollowingInProgress,
  getUsersIsFetching,
  getUsersList,
  getUserspageSize,
  getUserstotalCount,
  getUsersPage,
} from "../../redux/usersSelector";
import { useEffect, useCallback } from "react";
import styles from "./Users.module.css";
import { NavLink } from "react-router-dom";
import userPhotoDefault from "../../assets/images/default-user.png";
import PaginationPages from "../commons/Pagination/Pagination";
import MainButton from "../commons/Buttons";

const Users = React.memo(
  ({
    users,
    getUsersTC,
    currentPage,
    pageSize,
    follow,
    unfollow,
    followingInProgress,
    isFetching,
    totalCount,
  }) => {
    useEffect(() => {
      getUsersTC(currentPage, pageSize);
    }, []);

    const onChangePage = useCallback(pageNumber => {
      getUsersTC(pageNumber, pageSize);
    }, []);
    const disableButton = useCallback((userId) =>
      followingInProgress.some((id) => id === userId)
    );
    const toggleFollowing = useCallback((isFollowing, id) => {
      isFollowing ? unfollow(id) : follow(id);
    }, []);

    return (
      <div>
        {console.log("Render")}
        {isFetching && <Preloader />}

        <h1>Users</h1>
        <PaginationPages
          currentPage={currentPage}
          totalCount={totalCount}
          onChange={onChangePage}
          pageSize={100}
        />

        {users.map((user) => (
          <div className={styles.user} key={user.id}>
            <div>
              <MainButton
                className={styles.followButton}
                onClick={() => toggleFollowing(user.followed, user.id)}
                disabled={() => disableButton(user.id)}
                value={user.followed ? "Unfollow" : "Follow"}
              />
            </div>

            <NavLink to={"/profile/" + user.id}>
              <div className={styles.photo}>
                <img
                  src={
                    user.photos.small != null
                      ? user.photos.small
                      : userPhotoDefault
                  }
                  alt="photo"
                />
              </div>
            </NavLink>

            <div className={styles.content}>
              <div className={styles.name}>{user.name}</div>
              <div className={styles.status}>
                <span>/status: </span>
                {user.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
);

const mapStateToProps = (state) => {
  return {
    users: getUsersList(state),
    pageSize: getUserspageSize(state),
    totalCount: getUserstotalCount(state),
    currentPage: getUsersPage(state),
    isFetching: getUsersIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  getUsersTC,
})(Users);
