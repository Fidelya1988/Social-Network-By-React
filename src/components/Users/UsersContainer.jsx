import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../api';
import { follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching, toggleFollowingDisabled } from './../../redux/usersReducer';
import Users from './Users'
import Preloader from '../commons/Preloader.jsx/Preloader';

class UsersContainer extends React.Component {


    componentDidMount() {


        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            })

    }

    onChangePage = (pageNumber) => {

        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    unfollow = (userId) => {
       this.props.toggleFollowingDisabled(true, userId);
  
        console.log(this.props.followingInProgress)
        usersAPI.unfollowUser(userId).then(data => {
            
            if (data.resultCode == 0) {
                this.props.unfollow(userId);
            }
        })
        this.props.toggleFollowingDisabled(false, userId);
        console.log(this.props.followingInProgress);
    }

    follow = (userId) => {
        this.props.toggleFollowingDisabled(true, userId);
        
        console.log(this.props.followingInProgress)
        usersAPI.followUser(userId).then(data => {
            if (data.resultCode == 0) {
                this.props.follow(userId);
            }
            this.props.toggleFollowingDisabled(false, userId);
            console.log(this.props.followingInProgress)
        })
        
       
    }
    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader /> : null}

                <Users users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalCount={this.props.totalCount}
                    currentPage={this.props.currentPage}
                    follow={this.follow}
                    unfollow={this.unfollow}
                    onChangePage={this.onChangePage}
                    followingInProgress={this.props.followingInProgress}
                />

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}


export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching, toggleFollowingDisabled
})(UsersContainer);
