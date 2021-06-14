import React from 'react';
import LoginForm from './Form';
import {login} from '../redux/authReducer'
import {connect} from 'react-redux'
const LoginPage = (props) => {
    return (
        <div>
           <LoginForm login= {props.login}/>
        </div>
    )
}
const mapStateToProps = (state)=> {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps,{login})(LoginPage);