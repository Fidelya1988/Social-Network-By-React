import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Profile from './Profile';
import { setUserProfileInfo, setCurrentProfilePhoto } from '../../redux/profileReducer';
import { withRouter } from 'react-router';
import {profileAPI } from '../../api'

class ProfileContainer extends React.Component {

    componentDidMount() {
        
    const userId = this.props.match.params.userId;
        profileAPI.getUserProfile(userId).then(data => {

            this.props.setUserProfileInfo(data);


        })
    }


    render() {
       

        return <Profile {...this.props}
            profileInfo={this.props.userProfileInfo}
            setCurrentProfilePhoto={this.props.setCurrentProfilePhoto}
            isProfilePhotoSmall={this.props.isProfilePhotoSmall}
            toggleProfilePhoto={this.toggleProfilePhoto}
        />
    };


}
const mapStateToProps = (state) => {

    return (
        {
            userProfileInfo: state.profile.userProfileInfo,
            isProfilePhotoSmall: state.profile.isProfilePhotoSmall
        }

    )
}
const withURLContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfileInfo, setCurrentProfilePhoto })(withURLContainerComponent);