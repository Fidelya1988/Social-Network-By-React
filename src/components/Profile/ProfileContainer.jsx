import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Profile from './Profile';
import { setUserProfileInfo } from '../../redux/profileReducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/12`).then(response => {
            
            this.props.setUserProfileInfo(response.data);
          

        })
    }

    render() {
        debugger;

        return <Profile {...this.props} profileInfo={this.props.userProfileInfo} />
    };
}
const mapStateToProps = (state) => {
   
    return (
        { userProfileInfo: state.profile.userProfileInfo}

)
}

export default connect(mapStateToProps, { setUserProfileInfo })(ProfileContainer);