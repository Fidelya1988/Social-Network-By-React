import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching } from './../../redux/usersReducer';
import Users from './Users'
import Preloader from '../commons/Preloader.jsx/Preloader';

class UsersContainer extends React.Component {


    componentDidMount() {


        this.props.toggleIsFetching(true)
        axios.get
            (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onChangePage = (pageNumber) => {

        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
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
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onChangePage={this.onChangePage} />

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
        isFetching: state.users.isFetching

    }
}


export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching
})(UsersContainer);
