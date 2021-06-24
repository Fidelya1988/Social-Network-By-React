import React from "react";
import { connect } from "react-redux";
import Friends from "./Friends";

const mapStateToProps = (state) => ({ data: state.sidebar.friendsData });
const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;
