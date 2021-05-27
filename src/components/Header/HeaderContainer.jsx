import React from 'react';
import Header from './Header';
import { setAuthData, setIsAuth } from '../../redux/authReducer';
import * as axios from 'axios';
import { connect } from 'react-redux';
class HeaderContainer extends React.Component {

    componentDidMount() {
     
        axios.get
            (`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => {
                let { id, login, email } = response.data.data;
                console.log(response.data.data)
                if (response.data.resultCode === 0) {
                    this.props.setAuthData( id, login, email)
                    this.props.setIsAuth(true)
                }


            })
    }

    render() {
        return <Header {...this.props} login ={this.props.login} isAuth= {this.props.isAuth}/>
    }
}

 const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        id: state.auth.id
    }

}
export default connect(mapStateToProps, { setAuthData, setIsAuth  })(HeaderContainer)

