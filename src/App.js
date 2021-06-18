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
import { initialaseApp } from './redux/appReducer'
import { compose } from 'redux'
import { withRouter } from 'react-router';
import {useDispatch, useSelector} from 'react-redux'
import Preloader from './components/commons/Preloader.jsx/Preloader';

const App =(props)=> {
   
 const dispatch = useDispatch();
 const initialased=useSelector((state)=>state.app.initialased)
 
 dispatch(initialaseApp())
        
if(!initialased) return <Preloader/>
 return (
    

            <div className='app-wrapper' >

                <HeaderContainer />
                <Navbar />

                <div className='app-wrapper-content'>

                    <Route path='/dialogs' component={DialogsContainer} />
                    <Route path='/profile/:userId' component={ProfileContainer} />
                    <Route path='/users' component={UsersContainer} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                    <Route path='/login' component={LoginPage} />
                </div>


            </div >


        )
    }

export default compose(
  
 withRouter)(App)