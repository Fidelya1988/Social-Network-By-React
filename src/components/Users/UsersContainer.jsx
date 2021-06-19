import React from 'react';
import { connect } from 'react-redux';

import { follow, unfollow, getUsersTC } from './../../redux/usersReducer';
import Users from './Users'
import Preloader from '../commons/Preloader.jsx/Preloader';
import { compose } from 'redux';
import { getFollowingInProgress, getUsersIsFetching, getUsersList, getUserspageSize, getUserstotalCount, getUsersPage } from '../../redux/usersSelector';
import { useEffect, useCallback } from 'react';
const UsersContainer  =(props) => {
useEffect(()=>{props.getUsersTC(props.currentPage, props.pageSize)},[])

  const onChangePage = useCallback(pageNumber=> {props.getUsersTC(pageNumber, props.pageSize);
  })

    


        return (
            <div>
                {props.isFetching ? <Preloader /> : null}

                <Users users={props.users}
                    pageSize={props.pageSize}
                    totalCount={props.totalCount}
                    currentPage={props.currentPage}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    onChangePage={onChangePage}
                    followingInProgress={props.followingInProgress}
                />

            </div>
        )
  
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