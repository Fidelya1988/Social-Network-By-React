import React from 'react'
import { connect } from 'react-redux';
import { wrightMessageActionCreator, sendMessageActionCreator } from './../../redux/dialogsReducer'
import Dialogs from './Dialogs';





const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs.dialogsData,
        messages: state.dialogs.messagesData,
        newMessageText: state.dialogs.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => dispatch(sendMessageActionCreator()),
        onChangeText: (text) => {

            let action = wrightMessageActionCreator(text);
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;









