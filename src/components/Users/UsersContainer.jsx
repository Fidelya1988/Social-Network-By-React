import React from 'react';
import { connect } from 'react-redux';

import { follow, unfollow, getUsersTC } from './../../redux/usersReducer';
import Users from './Users'
import Preloader from '../commons/Preloader.jsx/Preloader';
import { compose } from 'redux';
import { getFollowingInProgress, getUsersIsFetching, getUsersList, getUserspageSize, getUserstotalCount, getUsersPage } from '../../redux/usersSelector';

class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)



    }

    onChangePage = (pageNumber) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize);

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
                    onChangePage={this.onChangePage}
                    followingInProgress={this.props.followingInProgress}
                />

            </div>
        )
    }
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




export default compose(
    connect(mapStateToProps, {
        follow, unfollow, getUsersTC
    }))(UsersContainer)