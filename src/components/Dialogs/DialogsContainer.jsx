import React from 'react'
import { connect } from 'react-redux';
import { wrightMessage, sendMessage } from './../../redux/dialogsReducer'
import Dialogs from './Dialogs';
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { compose } from 'redux'



const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs.dialogsData,
        messages: state.dialogs.messagesData,
        newMessageText: state.dialogs.newMessageText,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { sendMessage, wrightMessage })

)(Dialogs);









