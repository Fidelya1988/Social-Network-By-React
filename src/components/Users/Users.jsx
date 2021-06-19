import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, getUsersTC } from '../../redux/usersReducer';
import Preloader from '../commons/Preloader.jsx/Preloader';
import { compose } from 'redux';
import { getFollowingInProgress, getUsersIsFetching, getUsersList, getUserspageSize, getUserstotalCount, getUsersPage } from '../../redux/usersSelector';
import { useEffect, useCallback } from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';
import userPhotoDefault from '../../assets/images/default-user.png'


const Users = (props) => {
    useEffect(()=>{props.getUsersTC(props.currentPage, props.pageSize)
    console.log('render')},[])

    const onChangePage = useCallback(pageNumber=> {props.getUsersTC(pageNumber, props.pageSize);
    })
  const pagesCount = Math.ceil(props.totalCount / props.pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    
    return (
       

        <div>
              {props.isFetching ? <Preloader /> : null}

            <h1>Users</h1>
            <div className={styles.pageButtons}>
                {pages.map(page => {
                    
                    return <span key={page} onClick={() => {onChangePage(page) }}
                        className={props.currentPage === page ? styles.selectedPage : styles.pageButton}>{page}
                    </span>
                })}
            </div>
            {

                props.users.map(user => <div className={styles.user} key={user.id}>
                   
                     
                    <div>

                        {
                            user.followed
                                ? <button className={styles.followButton} onClick={() => props.unfollow(user.id)  } disabled={props.followingInProgress.some(id => id === user.id)}>
                                    Unfollow
                                </button>

                                : <button  className={styles.unfollowButton} onClick={() => props.follow(user.id)} disabled={props.followingInProgress.some(id => id === user.id)}>
                                    Follow
                                </button>
                        }
                    </div>

                    <NavLink to={'/profile/' + user.id}>
                        <div className={styles.photo}>

                            <img src={user.photos.small != null ? user.photos.small : userPhotoDefault} alt="photo" />
                        </div>
                    </NavLink>

                    <div className={styles.content}>
                        <div className={styles.name}>{user.name}</div>
                        <div className={styles.status}><span>/status: </span>{user.status}</div>
                    </div>

                   


                </div>
                )}


        </div>

    )
}



const mapStateToProps = (state) => {
    return {
        users: getUsersList(state),
        pageSize: getUserspageSize(state),
        totalCount: getUserstotalCount(state),
        currentPage: getUsersPage(state),
        isFetching: getUsersIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}




export default connect(mapStateToProps, {
        follow, unfollow, getUsersTC
    })(Users)