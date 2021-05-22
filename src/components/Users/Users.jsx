import React from 'react';
import styles from './Users.module.css';

import userPhotoDefault from './../../assets/images/default-user.png'

const Users = (props)=>{


    
        const pagesCount = Math.ceil(props.totalCount /props.pageSize);
        const pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (

            <div>
                <h1>Users</h1>
                <div className ={styles.pageButtons}>
                    {pages.map(page => {
                        return <span onClick={() => {props.onChangePage(page) }}
                            className={props.currentPage === page ? styles.selectedPage: styles.pageButton}>{page}
                        </span>
                    })}
                </div>
                {

                    props.users.map(user => <div className={styles.user} key={user.id}>
                        <div>
                            {user.followed
                                ? <button onClick={() => { props.follow(user.id) }}>Unfollow</button>
                                : <button onClick={() => { props.unfollow(user.id) }}>Follow</button>}
                        </div>

                        <div className={styles.name}><img src={user.photos.small != null ? user.photos.small : userPhotoDefault} alt="photo" /></div>
                        <div className={styles.name}>{user.name}</div>
                        <div className={styles.name}>{user.status}</div>
                        <div className={styles.name}>{'user.location.country'}</div>
                        <div className={styles.name}>{'user.location.city'}</div>

                    </div>
                    )}


            </div>
             
        )
    }

export default Users