import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
    if(props.users.length === 0) {
        
        props.setUsers(
           [ {
                id: 1, followed: true, fullname: 'Volodymyr K', status: 'My life is good', location: { city: 'Kyiv', country: 'Ukraine' },
                img: 'https://forum.survarium.com/ru/images/avatars/gallery/personnages/avatar1.jpg',
            },
            {
                id: 2, followed: false, fullname: 'Valeria Marchenko', status: 'I love music', location: { city: 'Kyiv', country: 'Ukraine' },
                img: 'https://image.freepik.com/free-vector/illustration-of-young-woman-meditating_23-2148513213.jpg'
            },
            {
                id: 3, followed: false, fullname: 'Stasya Synko <3', status: 'Hi!!', location: { city: 'Kyiv', country: 'Ukraine' },
                img: 'https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg'
            }
           ])
    } else {
        console.log(props.users.length)
    }
  
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