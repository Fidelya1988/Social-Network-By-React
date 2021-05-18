import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
 
    return (

        <div>
            <h1>Users</h1>
            {
             props.users.map(user => <div className={styles.user} key={user.id}>
                <div>
                    {user.followed
                    ? <button onClick = {()=> {props.follow(user.id)}}>Unfollow</button>
                    : <button onClick = {()=> {props.unfollow(user.id)}}>Follow</button>}
                </div>

                <div className={styles.name}><img src={user.img} alt="photo" /></div>
                <div className={styles.name}>{user.fullname}</div>
                <div className={styles.name}>{user.status}</div>
                <div className={styles.name}>{user.location.country}</div>
                <div className={styles.name}>{user.location.city}</div>

            </div>
            )}


        </div>
    )
}
export default Users