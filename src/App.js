import React from 'react';
import { Route } from 'react-router-dom';
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer';

import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './Login/Login';
import { connect } from 'react-redux';
import { getAuthData } from './redux/authReducer'
import { compose } from 'redux'
import { withRouter } from 'react-router';

class App extends React.Component {
    componentDidMount() {
        this.props.getAuthData()

    }
    render() {
        return (

            <div className='app-wrapper' >

                <HeaderContainer />
                <Navbar />

                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render=
                        {() => <DialogsContainer />
                        } />

                    <Route path='/profile/:userId' render={() =>
                        <ProfileContainer />} />

                    <Route path='/users' render={() =>
                        <UsersContainer />} />

                    <Route path='/news' render={() => <News

                    />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/settings' render={() => <Settings />} />
                    <Route path='/login' render={() => <LoginPage />} />
                </div>


            </div >


        )
    }
}

export default compose(
    connect(null, { getAuthData }),
    withRouter)(App)