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

export default connect(null,{login})(LoginPage);