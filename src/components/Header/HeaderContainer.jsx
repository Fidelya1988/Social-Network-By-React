import React from 'react';
import Header from './Header';
import { getAuthData, logOut} from '../../redux/authReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect'
class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthData()

    }



    render() {
        return <Header {...this.props} login={this.props.login} isAuth={this.props.isAuth} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        id: state.auth.id
    }

}

export default compose(
   
    connect(mapStateToProps, { getAuthData, logOut})
)(HeaderContainer)
