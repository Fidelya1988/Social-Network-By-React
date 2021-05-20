import React from 'react';
import styles from './Users.module.css';

import * as axios from 'axios'
import userPhotoDefault from './../../assets/images/default-user.png'

class Users extends React.Component {
   

    componentDidMount () {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
           this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (

            <div>
                <h1>Users</h1>

                {
                    this.props.users.map(user => <div className={styles.user} key={user.id}>
                        <div>
                            {user.followed
                                ? <button onClick={() => { this.props.follow(user.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.unfollow(user.id) }}>Follow</button>}
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
}
export default Users