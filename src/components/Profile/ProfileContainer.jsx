import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Profile from './Profile';
import { setUserProfileInfo, setCurrentProfilePhoto } from '../../redux/profileReducer';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
    debugger;
    componentDidMount() {
        
    const userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {

            this.props.setUserProfileInfo(response.data);


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