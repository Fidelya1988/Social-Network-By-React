import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';
import { getUserProfileInfo, getStatus, updateStatus } from '../../redux/profileReducer';
import { withRouter } from 'react-router';
// import withAuthRedirect from '../../hoc/withAuthRedirect'
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
   
        const userId = this.props.match.params.userId;
        this.props.getUserProfileInfo(userId)
        this.props.getStatus(userId)
    }


    render() {




        return <Profile {...this.props}
            profileInfo={this.props.userProfileInfo}
           
            toggleProfilePhoto={this.toggleProfilePhoto}
            isAuth={this.props.isAuth}
            status = {this.props.status}
            updateStatus = {this.props.updateStatus}
            getStatus= {this.props}
        />
    };
}



const mapStateToProps = (state) => {

    return (
        {
            userProfileInfo: state.profile.userProfileInfo,
        isProfilePhotoSmall: state.profile.isProfilePhotoSmall,
            status: state.profile.statusMessage
        }

    )
}

export default compose(
   
    connect(mapStateToProps, {getUserProfileInfo, getStatus, updateStatus }),
    withRouter
)(ProfileContainer)