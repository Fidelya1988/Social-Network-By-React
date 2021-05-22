import React from 'react';
import styles from './Users.module.css';

import * as axios from 'axios'
import userPhotoDefault from './../../assets/images/default-user.png'

class Users extends React.Component {


    componentDidMount() {



        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onChangePage = (pageNumber) => {

        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        const pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (

            <div>
                <h1>Users</h1>
                <div className ={styles.pageButtons}>
                    {pages.map(page => {
                        return <span onClick={() => { this.onChangePage(page) }}
                            className={this.props.currentPage === page ? styles.selectedPage: styles.pageButton}>{page}
                        </span>
                    })}
                </div>
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