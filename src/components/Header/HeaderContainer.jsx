import React from 'react';
import Header from './Header';
import { setAuthData, setIsAuth } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { authAPI } from '../../api'
import { setUserProfileInfo } from '../../redux/profileReducer'
import { profileAPI } from '../../api';

class HeaderContainer extends React.Component {

    componentDidMount() {

        authAPI.getAuth()
            .then(data => {
                let { id, login, email } = data.data;
                console.log(data.data)
                if (data.resultCode == 0) {
                    this.props.setAuthData(id, login, email)
                    this.props.setIsAuth(true)
                }


            })

    }
   
    getProfileData = id => profileAPI.getUserProfile(id).then(data => this.props.setUserProfileInfo(data))
    
    render() {
        return <Header {...this.props} login={this.props.login} isAuth={this.props.isAuth} getProfileData={this.getProfileData} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        id: state.auth.id
    }

}
export default connect(mapStateToProps, { setAuthData, setIsAuth, setUserProfileInfo })(HeaderContainer)

