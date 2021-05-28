import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';
import userPhotoDefault from './../../assets/images/default-user.png'
import * as axios from 'axios';
import { usersAPI } from '../../api'
const Users = (props) => {



    const pagesCount = Math.ceil(props.totalCount / props.pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (

        <div>
            <h1>Users</h1>
            <div className={styles.pageButtons}>
                {pages.map(page => {
                    return <span onClick={() => { props.onChangePage(page) }}
                        className={props.currentPage === page ? styles.selectedPage : styles.pageButton}>{page}
                    </span>
                })}
            </div>
            {

                props.users.map(user => <div className={styles.user} key={user.id}>
                    <div>

                        {user.followed
                            ? <button onClick={() => {
                                usersAPI.unfollowUser(user.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.unfollow(user.id)
                                    }
                                })
                            }}>Unfollow</button>
                           
                            : <button onClick={() => {
                                usersAPI.followUser(user.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.follow(user.id)
                                    }
                                })
                            }}>Follow</button>}
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

                    {/* <div className={styles.name}>{'user.location.country'}</div>
                            <div className={styles.name}>{'user.location.city'}</div> */}


                </div>
                )}


        </div>

    )
}

export default Users