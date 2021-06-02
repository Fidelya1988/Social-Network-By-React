import React from 'react'
import { connect } from 'react-redux';
import { wrightMessage, sendMessage } from './../../redux/dialogsReducer'
import Dialogs from './Dialogs';
import withAuthRedirect from '../../hoc/withAuthRedirect'




const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs.dialogsData,
        messages: state.dialogs.messagesData,
        newMessageText: state.dialogs.newMessageText,
        isAuth: state.auth.isAuth
    }
}


const DialogsContainer = withAuthRedirect(connect(mapStateToProps, { sendMessage, wrightMessage })(Dialogs));

export default DialogsContainer;









