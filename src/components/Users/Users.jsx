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

const Users = (props) => {
  console.log(props)
  useEffect(() => {
    props.getUsersTC(props.currentPage, props.pageSize);
   
  }, []);

  const onChangePage = (pageNumber) => {
   console.log(pageNumber)
    props.getUsersTC(pageNumber, props.pageSize);
  };
  // const pagesCount = Math.ceil(props.totalCount / props.pageSize);

  return (
    <div>
      {props.isFetching ? <Preloader /> : null}

      <h1>Users</h1>
      <PaginationPages
        currentPage={props.currentPage}
        totalCount={props.totalCount}
       onChange={onChangePage}
        pageSize={100}
      />

      {props.users.map((user) => (
        <div className={styles.user} key={user.id}>
          <div>
            {user.followed ? (
              <MainButton
                className={styles.followButton}
                onClick={() => props.unfollow(user.id)}
                disabled={props.followingInProgress.some(
                  (id) => id === user.id
                )}
                value="Unfollow"
              />
            ) : (
              <MainButton
                className={styles.unfollowButton}
                onClick={() => props.follow(user.id)}
                disabled={props.followingInProgress.some(
                  (id) => id === user.id
                )}
                value="Follow"
              />
            )}
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
};

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
