import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC } from './../../redux/usersReducer';
import Users from './Users'

class UsersContainer extends React.Component {


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
        return(
        <Users users={this.props.users} 
        pageSize ={this.props.pageSize} 
        totalCount = {this.props.totalCount}
        currentPage={this.props.currentPage}
        follow= {this.props.follow}
        unfollow= {this.props.unfollow} 
        onChangePage={this.onChangePage}/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (pageNumber)=> dispatch(setCurrentPageAC(pageNumber)),
        setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
