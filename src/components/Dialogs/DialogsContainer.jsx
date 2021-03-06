import React from "react";
import { connect } from "react-redux";
import { sendMessage } from "./../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs.dialogsData,
    messages: state.dialogs.messagesData,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { sendMessage })
)(Dialogs);
