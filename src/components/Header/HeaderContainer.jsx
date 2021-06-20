import React from 'react';
import Header from './Header';
import { logOut } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';

class HeaderContainer extends React.Component {
//     componentDidMount () {
//         setInterval(()=>{this.setState({a:12})}, 3000)
       
//     }

// // shouldComponentUpdate(nextProps, nextState) {
// //     return nextProps !== this.props || nextState !==this.state}

    render() {
        console.log('render header')
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

    connect(mapStateToProps, { logOut })
)(HeaderContainer)
