import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';
import {setCurrentProfilePhoto, getUserProfileInfo } from '../../redux/profileReducer';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {

    componentDidMount() {
       
    const userId = this.props.match.params.userId;
    this.props.getUserProfileInfo(userId)
   
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

export default connect(mapStateToProps, { setCurrentProfilePhoto, getUserProfileInfo })(withURLContainerComponent);